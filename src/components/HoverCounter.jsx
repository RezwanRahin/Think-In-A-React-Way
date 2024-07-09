function HoverCounter({ count, incrementCount, theme }) {
    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#FFA500' } : null;

    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>Hovered {count} times</h1>
        </div>
    );
}

export default HoverCounter;
