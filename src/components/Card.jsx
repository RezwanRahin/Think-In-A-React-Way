import nerdImage from '../assets/images/illustration.png';
import Button from './Button25';
import Content from './Content';
import Image from './Image';
import Tag from './Tag';

function Card() {
    return (
        <div className="card">
            <Content>
                <Tag text="EXCLUSIVE" />
                <h1>React styled components</h1>
                <p>
                    Exclusive React JS Tutorial on Styled Components where you will learn why we
                    need this & how to use it.
                </p>
                <div className="buttons">
                    <Button link="https://lwsbd.link/rsc" text="Watch now" />
                    <Button link="https://lwsbd.link/react" text="GitHub repo" />
                </div>
                <Image imgSrc={nerdImage} altTag="Nerd" width="300px" />
            </Content>
        </div>
    );
}

export default Card;
