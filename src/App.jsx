import styled from "styled-components";
import "./App.css";
import MainDashboard from "./components/MainDashboard/MainDashboard";
import TopDashboard from "./components/TopDashboard/TopDashboard";
import MainStoryPanel from "./components/MainSoryPanel/MainStoryPanel";
import { AppProvider } from "./utils/Context/AppContext";

const StyledApp = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <AppProvider>
      <StyledApp>
        <TopDashboard />
        <MainStoryPanel />
        <MainDashboard />
      </StyledApp>
    </AppProvider>
  );
}

export default App;
