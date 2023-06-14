import React, { useState, useCallback } from 'react';

const MyComponent = () => {
    const [count, setCount] = useState(0);
    // khi sử dụng 1 hàm làm đối số component khác
    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
};

export default MyComponent;
