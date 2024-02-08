import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Estilizando o conteúdo do modal
export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .button {
    width: 100%;
    display: flex;
    justify-content: end;
  }
`;

export const ShowInfos = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;

  > p {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const DisplayInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > div {
    display: flex;
    gap: 4px;
  }
`;

export const ButtonClosed = styled.button`
  border: none;
  background-color: ${({theme}) => theme.colors.green200};
  padding: 8px 12px;
  border-radius: 4px;
`;