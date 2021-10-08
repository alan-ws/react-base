import { styled } from 'goober';
import { useParams } from 'react-router';

function Examples() {
  const params = useParams();

  return (
    <Container>
      <h1>Single</h1>
    </Container>
  );
}

export default Examples;

const Container = styled('div')``;
