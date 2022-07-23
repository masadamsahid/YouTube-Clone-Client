import styled, {ThemeProvider} from "styled-components";
import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import {darkTheme, lightTheme} from "./utils/Theme";
import HomePage from "./pages/HomePage";
import WatchVideoPage from "./pages/WatchVideoPage";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({theme}) => theme.bg};
  transition: all .2s ease-in-out;
  color: ${({theme}) => theme.text};
`;
const Wrapper = styled.div`
  padding: 12px;
`;

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Main>
            <Navbar/>
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<HomePage/>}/>
                  <Route path="video">
                    <Route path=":id" element={<WatchVideoPage/>}/>
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
