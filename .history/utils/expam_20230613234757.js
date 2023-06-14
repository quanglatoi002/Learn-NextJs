import React, { useState } from 'react';

const TwoWayBinding = () => {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <input type="text" value={name} onChange={handleChange} />
            <p>Hello Q, {name}!</p>
        </div>
    );
};

export default TwoWayBinding;
