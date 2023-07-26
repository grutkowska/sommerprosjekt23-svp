import { useEffect } from 'react';

function debounce(fn: any, ms: number) {
    let timer: any;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            timer = 0;
            //@ts-ignore
            fn.apply(this, []);
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
