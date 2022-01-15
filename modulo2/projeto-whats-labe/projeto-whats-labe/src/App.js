import ChatLabe from "./components/ChatLabe";
import styled from "styled-components";

const BlocoMensagem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function App() {
  
  return (
    <BlocoMensagem>
      <ChatLabe />
    </BlocoMensagem>
  );
}
