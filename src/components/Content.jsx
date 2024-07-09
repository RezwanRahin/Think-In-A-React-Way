import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

function Content({ theme }) {
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(counter, incrementCount) => <HoverCounter count={counter} incrementCount={incrementCount} theme={theme} />}
            </Counter>
        </div>
    );
}

export default Content;
