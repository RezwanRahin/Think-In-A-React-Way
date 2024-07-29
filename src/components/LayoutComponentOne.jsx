import useWindowWidth from './hooks/useWindowWidth';

function LayoutComponentOne() {
    const onSmallScreen = useWindowWidth();

    return (
        <div>
            <h1>You are browsing on {onSmallScreen ? 'small' : 'large'} device</h1>
        </div>
    );
}

export default LayoutComponentOne;
