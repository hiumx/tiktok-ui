import { useEffect, useState } from 'react';

function Debounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const TimerId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => clearTimeout(TimerId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debouncedValue;
}

export default Debounce;
