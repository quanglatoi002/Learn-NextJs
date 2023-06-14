import React, { useState, useCallback } from 'react';

const MyComponent = () => {
    const [count, setCount] = useState(0);
    // khi sử dụng 1 hàm làm đối số component khác
    //lần đầu tiên được mount lúc đó nó sẽ chạy qua tk handleClick và useCallback sẽ nhận được cái callback của nó thì nó sẽ đi tạo ra cái hàm này và nhận tham chiếu để lưu ra ngoài phạm vi của hàm MyComponent và return lại tham chiếu đó cho hàm handleClick
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
