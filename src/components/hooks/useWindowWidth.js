import { useEffect, useState } from 'react';

const useWindowWidth = (screenSize) => {
    const [onSmallScreen, setOnSmallScreen] = useState();

    useEffect(() => {
        const checkScreenSize = () => {
            setOnSmallScreen(window.innerWidth < screenSize);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.addEventListener("resize", checkScreenSize);
    }, [screenSize]);

    return onSmallScreen;
};

export default useWindowWidth;
