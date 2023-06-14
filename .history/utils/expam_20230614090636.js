import React, { useEffect, useState } from 'react';

const MyComponent = () => {
    const [count, setCount] = useState(0);
    //callback luôn được gọi sẽ khi component được mounted
    useEffect(() => {
        // Thực hiện các tác vụ sau khi thành phần đã được render
        console.log('Component is rendered');
    });

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default MyComponent;
