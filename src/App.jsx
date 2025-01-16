
import styled from 'styled-components'
import './App.css'
import MainDashboard from './components/MainDashboard/MainDashboard'
import TopDashboard from './components/TopDashboard/TopDashboard'
import MainStoryPanel from './components/MainSoryPanel/MainStoryPanel'

const StyledApp = styled.main`

display: flex;
flex-direction: column;
justify-content:space-between;
align-items: center;
height: 100vh;

`

function App() {
  
  return (
    <StyledApp>
      <TopDashboard/>
      <MainStoryPanel/>
      <MainDashboard/>
    </StyledApp>
  )
}

export default App
