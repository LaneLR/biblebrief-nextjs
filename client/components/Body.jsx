import styled from "styled-components";

const Bodystyle = styled.main`
  background-color: rgb(230, 228, 228);
  overflow-y: auto;
  flex: 1;
  min-height: 80vh;
`;

export default function Body({ children }) {
  return <Bodystyle>{children}</Bodystyle>;
}
