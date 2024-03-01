import styled from "styled-components";

function App() {
  const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Item = styled.div`
    background-color: red;
    color: grey;
    font-size: 6rem;
    font-weight: bold;
  `;

  const Description = styled.p`
    color: grey;
    font-size: 4rem;
  `;

  return (
    <Container>
      <Item>iGym</Item>
      <Description>
        Here is my new React project to learn typescript 😊
      </Description>
    </Container>
  );
}

export default App;
