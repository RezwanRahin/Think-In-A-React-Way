import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../contexts/themeContext";
import React from "react";

// function Content() {
//     const context = useContext(ThemeContext);
//     const { theme, switchTheme } = context;


//     return (
//         <div>
//             <h1>This is a content</h1>
//             <Counter>
//                 {(counter, incrementCount) => (
//                     <ThemeContext.Consumer>
//                         {({ theme, switchTheme }) => (
//                             <HoverCounter count={counter} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme} />
//                         )}
//                     </ThemeContext.Consumer>
//                 )}
//             </Counter>
//         </div>
//     );
// }

class Content extends React.Component {
    render() {
        const { theme, switchTheme } = this.context;

        return (
            <div>
                <h1>This is a content</h1>
                <Counter>
                    {(counter, incrementCount) => (
                        <HoverCounter count={counter} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme} />
                    )}
                </Counter>
            </div>
        );
    }
}

Content.contextType = ThemeContext;

export default Content;
