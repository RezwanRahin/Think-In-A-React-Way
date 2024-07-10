function HoverCounter({ count, incrementCount, theme, switchTheme }) {
    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#FFA500' } : null;

    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>Hovered {count} times</h1>
            <button type="button" onClick={switchTheme}>Change Theme</button>
        </div>
    );
}

export default HoverCounter;
