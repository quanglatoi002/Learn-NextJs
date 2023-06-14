import React, { useLayoutEffect, useState, useRef } from 'react';

const MyComponent = () => {
    const [width, setWidth] = useState(0);
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const updateWidth = () => {
            const containerWidth = containerRef.current.offsetWidth;
            setWidth(containerWidth);
        };

        window.addEventListener('resize', updateWidth);
        updateWidth();

        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, [containerRef]);

    return (
        <div ref={containerRef}>
            <p>Container width: {width}px</p>
        </div>
    );
};

export default MyComponent;
