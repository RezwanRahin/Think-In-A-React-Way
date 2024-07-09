import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../contexts/themeContext";

function Content() {
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(counter, incrementCount) => (
                    <ThemeContext.Consumer>
                        {({ theme }) => (
                            <HoverCounter count={counter} incrementCount={incrementCount} theme={theme} />
                        )}
                    </ThemeContext.Consumer>
                )}
            </Counter>
        </div>
    );
}

export default Content;
