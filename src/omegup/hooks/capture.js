import { useEffect, useRef } from "react";
import { defaults } from "xml2js";

// export function useEventListener({ eventHost, eventName, handler })
// export function useEventListener({ eventHost, eventName, handler })

export const useEventListener= ({ eventName, handler, eventHost = window })=> {
    const savedHandler = useRef();
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);
    useEffect(
        () => {
            const isSupported = eventHost && eventHost.addEventListener;
            if (!isSupported) return;
            const eventListener = (event) => savedHandler.current(event);// To do
            eventHost.addEventListener(eventName, eventListener);
            return () => {
                eventHost.removeEventListener(eventName, eventListener);
            };
        },
        [eventName, eventHost]
    );
}
export default useEventListener;