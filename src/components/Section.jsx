import Content from "./Content";

function Section({ theme }) {
    return (
        <div>
            <h1>This is a section</h1>
            <Content theme={theme} />
        </div>
    );
}

export default Section;
