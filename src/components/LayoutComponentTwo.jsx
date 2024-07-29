import { useEffect, useState } from 'react';

function LayoutComponentTwo() {
    const [onSmallScreen, setOnSmallScreen] = useState();

    const checkScreenSize = () => {
        setOnSmallScreen(window.innerWidth < 768);
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.addEventListener("resize", checkScreenSize);
    }, []);

    return (
        <div className={onSmallScreen ? 'small' : 'large'}>
            <h1>This is another component</h1>
        </div>
    );
}

export default LayoutComponentTwo;
