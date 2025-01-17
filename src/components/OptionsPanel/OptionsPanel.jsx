import styled from "styled-components"

const StyledOptionsPanel = styled.div`
margin: 2em 0;

button {
    background-color: #222;
    color: #fff
}
`

function OptionsPanel() {
    return (
        <StyledOptionsPanel>

            <button>Iniciar Jornada</button>
        </StyledOptionsPanel>
    )
}

export default OptionsPanel
