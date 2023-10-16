import styled from "styled-components";

const SectionStyle = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1000px;
`;

const SectionFigureStyle = styled.figure`
    background-color: #efb41c;
    width: 300px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 38px;
    margin: 2% 0;
`;

const SectionFigureImageStyle = styled.img`
    width: 170px;
    height: 200px;
`;

const SectionFigureFigCaptionStyle = styled.figcaption`
    color: #ed2e2e;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
`;

function Section() {
    const names = ["bruxa", "fantasma", "vampiro", "zumbi", "fada", "pirata"];
    const sources = [];
    const size = names.length;
    const images = [];

    for (let i = 0; i < size; i++) {
        sources.push(
            new URL(`../../assets/images/${names[i]}.png`, import.meta.url).href
        );
        names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);

        let image = {
            name: names[i],
            source: sources[i],
        };

        images.push(image);
    }

    const figureElements = images.map((element, index) => (
        <SectionFigureStyle key={index}>
            <SectionFigureImageStyle src={element.source} />
            <SectionFigureFigCaptionStyle>
                {element.name}
            </SectionFigureFigCaptionStyle>
        </SectionFigureStyle>
    ));

    return (
        <>
            <SectionStyle>{figureElements}</SectionStyle>
        </>
    );
}

export default Section;
