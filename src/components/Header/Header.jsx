import styled from "styled-components";

const HeaderStyle = styled.header`
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderH1Style = styled.h1`
    font-size: 64px;
    font-weight: bold;
    color: white;
`;

function Header() {
    return (
        <>
            <HeaderStyle>
                <HeaderH1Style>Halloween VnW</HeaderH1Style>
            </HeaderStyle>
        </>
    );
}

export default Header;
