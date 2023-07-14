import { useEffect } from 'react';

function debounce(fn, ms) {
    let timer;
    return (_) => {
        clearTimeout(timer);
        timer = setTimeout((_) => {
            timer = null;
            fn.apply(this, arguments);
        }, ms);
    };
}
const useDebounceOnWindowEvent = (fn: any, delay: number, typeOfEvent: string) => {
    useEffect(() => {
        const debounceHandleWindowEvent = debounce(fn, delay);
        window.addEventListener(typeOfEvent, debounceHandleWindowEvent);
        return () => {
            window.removeEventListener(typeOfEvent, debounceHandleWindowEvent);
        };
    });
};

export default useDebounceOnWindowEvent;
