import "./App.css";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";

function App() {
    return (
        <>
            <GlobalStyle></GlobalStyle>
            <Header></Header>
            <Main></Main>
        </>
    );
}

export default App;
