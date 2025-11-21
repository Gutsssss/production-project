import { useEffect, useState } from 'react';

export const useDevice = () => {
    const [isModbile, setIsModile] = useState(false);
    useEffect(() => {
        const handleResize = () => setIsModile(window.matchMedia('(pointer:coarse)').matches);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return isModbile;
};
