import styled from 'styled-components'

const StyledPanel = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
width: 90vw;
margin: 2em 0;
background: #101010;
border-radius: 1em;
box-shadow: inset 0 0 40px 1px #000;
`

function MainStoryPanel() {
    return (
       <StyledPanel>
       </StyledPanel> 
    )
}

export default MainStoryPanel
