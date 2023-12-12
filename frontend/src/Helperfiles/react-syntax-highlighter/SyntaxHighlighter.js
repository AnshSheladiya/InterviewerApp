import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CenterScreen from '../styled-components/CenterScreen';
import TitleComponent from '../styled-components/TitleComponent';

const SyntaxHighlighterComponent = () => {
  const codeString = `
  (num) => num + 1 
  (num) => num + 1 
  (num) => num + 1 
  (num) => num + 1 
  (num) => num + 1 
  (num) => num + 1 
  `;
  return (
    <>
    <CenterScreen>
      <TitleComponent>Syntax Highlighter Component</TitleComponent>
      <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
    </CenterScreen>

    </>

  );
};
export default SyntaxHighlighterComponent;

