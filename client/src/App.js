import ReactDOM from 'react-dom';
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";
import "./index.css";
import Sidebar from './components/Sidebar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar.jsx';
import Dashboard from "./pages/Dashboard.jsx";
import Search from "./pages/Search.jsx";
import Profile from "./pages/Profile.jsx";
import Favourites from "./pages/Favourites.jsx";
import DisplayPodcast from "./pages/DisplayPodcast.jsx";
import PodcastDetails from "./pages/PodcastDetails.jsx";

const Container = styled.div`
  display: flex;  
  background: ${({ theme }) => theme.bgLight};
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          {menuOpen && (
            <Sidebar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              setDarkMode={setDarkMode}
              darkMode={darkMode}
            />
          )}
          <Frame>
            <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/search" exact element={<Search />} />
              <Route path="/favourites" exact element={<Favourites />} />
              <Route path="/profile" exact element={<Profile />} />
              <Route path="/podcast/:id" exact element={<PodcastDetails />} />
              <Route path="/showpodcasts/:type" exact element={<DisplayPodcast />} />
            </Routes>
          </Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
