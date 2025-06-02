import Card from "./Card";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  width: auto;
  height: auto;
  color: black;
`;

export default function Search() {
  return (
    <Wrapper>
      <Card color="lightgreen"></Card>
      <Card color="lavender"></Card>
    </Wrapper>
  );
}
