import * as  React from 'react';
import { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';
import { computeElapsedTime, elapsedTimeReachedMaximumNumberOfMinutes } from './utils';


export const MicVoiceRecorder = ({ background, handleBlob, foreground, width, height, barWidth = 10, className, state, maximumRecordingTimeInMinutes = 2 }) => {
    console.log({ state: state.value })
    const analyserCanvas = React.useRef(null);
    let audioRecordStartTime = null
    let elapsedTimeTimer = null
    const bufferSize = 2048
    const draw = (list, ctx) => {
        if (analyserCanvas.current) {
            ctx.fillStyle = background;
            ctx.fillRect(0, 0, analyserCanvas.current.width, analyserCanvas.current.height)
            ctx.fillStyle = foreground;
            list = list.map((x) => ({ ...x, x: x.x - list[0].x, }))
            list.forEach((i) => {
                let region = new Path2D();
                region.moveTo(i.x, i.y + i.w / 2);
                region.lineTo(i.x + i.w / 2, i.y);
                region.lineTo(i.x + i.w, i.y + i.w / 2);
                region.lineTo(i.x + i.w, i.y + i.h - i.w / 2);
                region.lineTo(i.x + i.w / 2, i.y + i.h);
                region.lineTo(i.x, i.y + i.h - i.w / 2);
                region.closePath();
                ctx.fill(region)
            })
        }
    }
    let s = 0
    let elapsedTime = null
    const [timer, setTimer] = useState(null)
    const handleElapsedRecordingTime = () => {
        displayElapsedTimeDuringAudioRecording("00:00");
        elapsedTimeTimer = setInterval(() => {
            elapsedTime = computeElapsedTime(audioRecordStartTime);
            displayElapsedTimeDuringAudioRecording(elapsedTime);
        }, 1000);
    }

    const displayElapsedTimeDuringAudioRecording = (elapsedTime) => {
        setTimer(elapsedTime)
        if (elapsedTimeReachedMaximumNumberOfMinutes(elapsedTime, maximumRecordingTimeInMinutes)) {
            stopAudioRecording();
        }
    }
    const startAudioRecording = () => {
        audioRecorder.start()
            .then(() => {
                audioRecordStartTime = new Date();
            })
            .catch(error => {
                if (error.message.includes("mediaDevices API or getUserMedia method is not supported in this browser.")) {
                    console.log("To record audio, use browsers like Chrome and Firefox.");
                }
                switch (error.name) {
                    case 'AbortError': //error from navigator.mediaDevices.getUserMedia
                        console.log("An AbortError has occured.");
                        break;
                    case 'NotAllowedError': //error from navigator.mediaDevices.getUserMedia
                        console.log("A NotAllowedError has occured. User might have denied permission.");
                        break;
                    case 'NotFoundError': //error from navigator.mediaDevices.getUserMedia
                        console.log("A NotFoundError has occured.");
                        break;
                    case 'NotReadableError': //error from navigator.mediaDevices.getUserMedia
                        console.log("A NotReadableError has occured.");
                        break;
                    case 'SecurityError': //error from navigator.mediaDevices.getUserMedia or from the MediaRecorder.start
                        console.log("A SecurityError has occured.");
                        break;
                    case 'TypeError': //error from navigator.mediaDevices.getUserMedia
                        console.log("A TypeError has occured.");
                        break;
                    case 'InvalidStateError': //error from the MediaRecorder.start
                        console.log("An InvalidStateError has occured.");
                        break;
                    case 'UnknownError': //error from the MediaRecorder.start
                        console.log("An UnknownError has occured.");
                        break;
                    default:
                        console.log("An error occured with the error name " + error.name);
                };
            });
    }
    const stopAudioRecording = () => {
        clearInterval(elapsedTimeTimer)
        audioRecorder.stop()
            .then((audioAsblob) => {
                handleBlob({ blob: audioAsblob })
            })
            .catch(error => {
                switch (error.name) {
                    case 'InvalidStateError':
                        console.log("An InvalidStateError has occured.");
                        break;
                    default:
                        console.log("An error occured with the error name " + error.name);
                };
            });
    }
    const audioRecorder = {
        audioBlobs: [],
        mediaRecorder: null,
        streamBeingCaptured: null,
        start: () => {
            if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
                return Promise.reject(new Error('mediaDevices API or getUserMedia method is not supported in this browser.'));
            }
            else {
                handleElapsedRecordingTime()
                return navigator.mediaDevices.getUserMedia({ audio: true })
                    .then(stream => {
                        audioRecorder.streamBeingCaptured = stream;
                        audioRecorder.mediaRecorder = new MediaRecorder(stream)
                        audioRecorder.audioBlobs = [];
                        audioRecorder.mediaRecorder.addEventListener("dataavailable", event => {
                            audioRecorder.audioBlobs.push(event.data);
                        });
                        audioRecorder.mediaRecorder.start()
                        const audioCtx = new AudioContext()
                        const analyser = audioCtx.createAnalyser()
                        analyser.fftSize = bufferSize
                        const audioSrc = audioCtx.createMediaStreamSource(stream)
                        audioSrc.connect(analyser)
                        const data = new Uint8Array(analyser.frequencyBinCount)
                        const ctx = analyserCanvas.current.getContext('2d')
                        ctx.fillStyle = background
                        ctx.fillStyle = foreground

                        let list = []
                        const loopingFunction = () => {
                            let numb = null
                            numb = requestAnimationFrame(loopingFunction)
                            if (state.value === 'recording') {
                                console.log('ss')
                                analyser.getByteFrequencyData(data);
                                if (analyserCanvas.current.width && (s > analyserCanvas.current.width)) list = list.slice(1)
                                const barHeight = data.reduce((a, b) => a + b, 0) / data.length
                                list.push({
                                    x: s,
                                    y: (analyserCanvas.current.height || 0) / 2 - barHeight,
                                    w: barWidth,
                                    h: barHeight * 2,
                                })
                                draw(list, ctx)
                                s += barWidth
                            }
                            else if (state.value === 'stop') {
                                console.log('dd')
                                cancelAnimationFrame(numb)
                                clearInterval(elapsedTimeTimer)
                                stopAudioRecording()
                                audioSrc.disconnect()
                                analyser.disconnect()
                            }
                        }
                        requestAnimationFrame(loopingFunction)
                    });
            }
        },
        stop: () => {
            return new Promise(resolve => {
                let mimeType = audioRecorder.mediaRecorder.mimeType;
                audioRecorder.mediaRecorder.addEventListener("stop", () => {
                    let audioBlob = new Blob(audioRecorder.audioBlobs, { type: mimeType });
                    resolve(audioBlob);
                });
                audioRecorder.cancel();
            });
        },
        cancel: () => {
            audioRecorder.mediaRecorder.stop();
            audioRecorder.stopStream();
            audioRecorder.resetRecordingProperties();
        },
        stopStream: function () {
            audioRecorder.streamBeingCaptured.getTracks()
                .forEach(track => track.stop());
        },
        resetRecordingProperties: function () {
            audioRecorder.mediaRecorder = null
            audioRecorder.streamBeingCaptured = null
        }
    }

    const useAudio = ({ state, analyserCanvas }) => {
        useEffect(() => {
            startAudioRecording()
        }, [state.value, analyserCanvas])
    }
    useAudio({ state, analyserCanvas })

    return (<div style={{ display: 'flex', alignItems: 'center' }}>
        <canvas style={{ width, height, flex: 1 }} ref={analyserCanvas} {...{ className }}></canvas>
        <div>{timer}</div>
    </div>

    )
}

