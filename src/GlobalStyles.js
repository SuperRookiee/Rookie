import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    
    * {
        font-family: 'Noto Sans KR', sans-serif !important;
    }

    body {
        margin: 0;
        padding: 0;
    }
    
    a  {
        text-decoration-line: none;
        text-decoration: none;
    }
`;

export default GlobalStyles;