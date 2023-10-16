import styled from "styled-components";
import SectionStyle from "./Section.jsx";

const MainStyle = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

function Main() {
    return (
        <>
            <MainStyle>
                <SectionStyle></SectionStyle>
            </MainStyle>
        </>
    );
}

export default Main;
