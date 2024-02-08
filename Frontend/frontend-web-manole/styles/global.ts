import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      scroll-behavior: smooth !important;
    }

    body {
      background: ${props => props.theme.colors.black};
      color: ${props => props.theme.colors.white};
      width: 100vw;
      overflow-x: hidden;
    }
  `}
`;