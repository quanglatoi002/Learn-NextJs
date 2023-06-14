import React, { useState, useMemo } from 'react';

const MyComponent = () => {
    const [count, setCount] = useState(0);

    //tránh việc tính toán không cần thiết khi component render lại.
    const handle = useMemo(() => {
        // Tính toán phức tạp, mất nhiều thời gian và tài nguyên
        return count * 2;
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <p>Result of expensive calculation: {expensiveCalculation}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default MyComponent;
