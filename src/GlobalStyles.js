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

        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
    
    body::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
    
    a  {
        text-decoration-line: none;
        text-decoration: none;
    }
`;

export default GlobalStyles;