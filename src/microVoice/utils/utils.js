
export const computeElapsedTime = (startTime) => {
    let endTime = new Date();
    let timeDiff = endTime.getTime() - startTime.getTime();
    timeDiff = timeDiff / 1000;
    let seconds = Math.floor(timeDiff % 60)
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timeDiff = Math.floor(timeDiff / 60);
    let minutes = timeDiff % 60
    minutes = minutes < 10 ? "0" + minutes : minutes;
    timeDiff = Math.floor(timeDiff / 60);
    let hours = timeDiff % 24;
    timeDiff = Math.floor(timeDiff / 24);
    let days = timeDiff;
    let totalHours = hours + (days * 24);
    totalHours = totalHours < 10 ? "0" + totalHours : totalHours;

    if (totalHours === "00") {
        return minutes + ":" + seconds;
    } else {
        return totalHours + ":" + minutes + ":" + seconds;
    }
}
export const elapsedTimeReachedMaximumNumberOfMinutes = (elapsedTime, maximumRecordingTimeInMinutes) => {
    let elapsedTimeSplitted = elapsedTime.split(":");
    //Turn the maximum recording time in hours to a string and pad it with zero if less than 10
    let maximumRecordingTimeInMinutesAsString = maximumRecordingTimeInMinutes < 10 ? "0" + maximumRecordingTimeInMinutes : maximumRecordingTimeInMinutes.toString();
    //if it the elapsed time reach minutes and also reach the maximum recording time in minutes return true
    if (elapsedTimeSplitted.length === 2 && elapsedTimeSplitted[0] === maximumRecordingTimeInMinutesAsString)
        return true;
    else
        return false;
}