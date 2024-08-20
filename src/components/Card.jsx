import nerdImage from '../assets/images/illustration.png';
import Button from './Button25';
import { CardContainer, ContentContainer, ButtonContainer } from './styles/Container.styles'
import { Tag, H1, P, Image } from './styles/Elements.styles'

function Card() {
    return (
        <CardContainer>
            <ContentContainer>
                <Tag color="#4361ee">EXCLUSIVE</Tag>
                <H1>React styled components</H1>
                <P>
                    Exclusive React JS Tutorial on Styled Components where you will learn why we
                    need this & how to use it.
                </P>
                <ButtonContainer>
                    <Button link="https://lwsbd.link/rsc" text="Watch now" />
                    <Button link="https://lwsbd.link/react" text="GitHub repo" />
                </ButtonContainer>
                <Image src={nerdImage} alt="Nerd" width="300px" />
            </ContentContainer>
        </CardContainer>
    );
}

export default Card;
