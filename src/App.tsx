import styled from "styled-components";

function App() {
  const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Item = styled.div`
    background-color: red;
    color: grey;
    font-size: 6rem;
    font-weight: bold;
  `;

  return (
    <Container>
      <Item>iGym</Item>
    </Container>
  );
}

export default App;
