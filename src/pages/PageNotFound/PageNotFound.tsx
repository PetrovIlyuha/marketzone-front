import { Container, Subtitle, Title } from "./styled";

interface Props {
  message: string;
}

const PageNotFound: React.FC<Props> = ({ message }) => {
  return (
    <Container>
      <Title>404</Title>
      <Subtitle>{message}</Subtitle>
    </Container>
  );
};

export default PageNotFound;
