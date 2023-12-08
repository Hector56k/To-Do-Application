import React, { useState, useEffect } from 'react';
import '../transitionalbackground/TransitionalBackground.css';

const TransitionalBackground = () => {
    const [backgroundIndex, setBackgroundIndex] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBackgroundIndex((prevIndex) => (prevIndex === 1 ? 2 : 1));
        }, 2000); //Change background color every 2 seconds

        return () => clearInterval(intervalId);
    }, []);

    return <div className={`background-${backgroundIndex}`} />;

};

export default TransitionalBackground;