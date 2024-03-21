import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import App from './App.tsx';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root{
    --accent-color: #febe98;
    --grayscale-black: #000000;
    --grayscale-900: #1E1E1E;
    --grayscale-800: #333333;
    --grayscale-700: #5E5E5E;
    --grayscale-600: #727272;
    --grayscale-500: #848484;
    --grayscale-400: #AAAAAA;
    --grayscale-300: #CCCCCC;
    --grayscale-200: #DDDDDD;
    --grayscale-100: #EBEBEB;
    --grayscale-50: #F3F3F3;
    --grayscale-white: #FFFFFF;
    
  }

  body {
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
	<RecoilRoot>
		<GlobalStyle />
		<App />
	</RecoilRoot>
);
