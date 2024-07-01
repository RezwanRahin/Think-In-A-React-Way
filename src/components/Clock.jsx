import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { date: new Date(), locale: 'bn-BD' };
    //     this.handleClick = this.handleClick.bind(this);
    // }

    state = { date: new Date(), locale: 'bn-BD' };

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        this.setState({
            locale
        });
    }

    render() {
        const { date, locale } = this.state;

        return (
            <div>
                <h1 className="heading">
                    <span className="text">{this.state.date.toLocaleTimeString(locale)}</span>
                    <img src="" />
                </h1>

                {/* <button type='button' onClick={this.handleClick}>Click here</button> */}
                {/* <button type='button' onClick={this.handleClick.bind(this, 'en-US')}>Click here</button> */}
                {/* <button type='button' onClick={() => this.handleClick('en-US')}>Click here</button> */}

                {/* <Button change={this.handleClick} locale='en-US'></Button> */}
                {/* <Button change={this.handleClick} locale='en-US' /> */}

                {locale === 'bn-BD' ? (
                    <Button change={this.handleClick} locale='en-US' show={false} enable={false} />
                ) : (
                    <Button change={this.handleClick} locale='bn-BD' show enable />
                )}
            </div>
        );
    }
}

export default Clock;
