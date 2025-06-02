import styled from "styled-components";
import Card from "../../components/Card";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  width: auto;
  height: auto;
  color: black;
`;

export default function Home() {
  return (
    <Wrapper>
      <Card color="blue"></Card>
      <Card color="red"></Card>
    </Wrapper>
  );
}
