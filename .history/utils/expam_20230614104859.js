import React, { useRef, useEffect } from 'react';

const MyComponent = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return <input ref={inputRef} />;
};
