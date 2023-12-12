import React from 'react';
import { Link } from 'react-router-dom';
import TitleComponent from './Helperfiles/styled-components/TitleComponent';

const HomePage = () => {
  return (
<div
  style={{
    textAlign: 'center',
    padding: '20px',
    height: '100%', // Default height for mobile
    backgroundColor: '#F7EFE5',
    // Media query for screens wider than 768px
    '@media (min-width: 769px)': {
      height: '100vh', // Adjust as needed
    },
  }}
>      <TitleComponent style={{ color: 'black' }}>Welcome to My React Components Showcase</TitleComponent>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
      <Link to="/HighlightableComponent"><ButtonCard title="Highlightable Component" /></Link>
<Link to="/FolderDataUseTree"><ButtonCard title="Folder Data Use Tree" /></Link>
<Link to="/AvatarEditorWrapper"><ButtonCard title="Avatar Editor Wrapper" /></Link>
<Link to="/CopyToClipboardUsage"><ButtonCard title="Copy To Clipboard Usage" /></Link>
<Link to="/CountUpComponent"><ButtonCard title="Count Up Component" /></Link>
<Link to="/FastMarquee"><ButtonCard title="Fast Marquee" /></Link>
<Link to="/MyReactHookForm"><ButtonCard title="My React Hook Form" /></Link>
<Link to="/ViewportUseComponent"><ButtonCard title="Viewport Use Component" /></Link>
<Link to="/ReactInspector"><ButtonCard title="React Inspector" /></Link>
<Link to="/StatefulToolTip"><ButtonCard title="Stateful ToolTip" /></Link>
<Link to="/SortableIndex"><ButtonCard title="Sortable Index" /></Link>
<Link to="/ResizableView"><ButtonCard title="Resizable View" /></Link>
<Link to="/CommonPrintComponent"><ButtonCard title="Common Print Component" /></Link>
<Link to="/CountdownTimer"><ButtonCard title="Countdown Timer" /></Link>
<Link to="/MZInputNumber"><ButtonCard title="MZ Input Number" /></Link>
<Link to="/PhoneInputComponent"><ButtonCard title="Phone Input Component" /></Link>
<Link to="/CodeBlockComponent"><ButtonCard title="Code Block Component" /></Link>
<Link to="/WhatsAppButton"><ButtonCard title="WhatsApp Button" /></Link>
<Link to="/Captcha"><ButtonCard title="Captcha" /></Link>
<Link to="/AudioPlayerComponent"><ButtonCard title="Audio Player Component" /></Link>
<Link to="/JoystickComponent"><ButtonCard title="Joystick Component" /></Link>
<Link to="/LiveCodeEditor"><ButtonCard title="Live Code Editor" /></Link>
<Link to="/LoadingComponent"><ButtonCard title="Loading Component" /></Link>
<Link to="/Sidebars"><ButtonCard title="Sidebars" /></Link>
<Link to="/SpinnersWithProps"><ButtonCard title="Spinners With Props" /></Link>
<Link to="/StickyNotes"><ButtonCard title="Sticky Notes" /></Link>
<Link to="/SyntaxHighlighterComponent"><ButtonCard title="Syntax Highlighter Component" /></Link>
<Link to="/TabComponent"><ButtonCard title="Tab Component" /></Link>
<Link to="/MyTerminalApp"><ButtonCard title="My Terminal App" /></Link>
<Link to="/Timeline"><ButtonCard title="Timeline" /></Link>
<Link to="/WorldFlags"><ButtonCard title="World Flags" /></Link>
<Link to="/GoogleMapReactComponent"><ButtonCard title="Google Map React Component" /></Link>
<Link to="/SparklineChart"><ButtonCard title="Sparkline Chart" /></Link>
<Link to="/ChartIndex"><ButtonCard title="Chart Index" /></Link>
<Link to="/MUIIndex"><ButtonCard title="MUI Index" /></Link>
<Link to="/ChatElementsIndex"><ButtonCard title="Chat Elements Index" /></Link>
<Link to="/ColorPicker"><ButtonCard title="Color Picker" /></Link>
<Link to="/TailwindCSSIndex"><ButtonCard title="Tailwind CSS Index" /></Link>
<Link to="/ReactCssFlexExamples"><ButtonCard title="React CSS Flex Examples" /></Link>
<Link to="/ReactCssGridExamples"><ButtonCard title="React CSS Grid Examples" /></Link>
<Link to="/LandingPageUI"><ButtonCard title="Landing Page UI" /></Link>
<Link to="/SchoolWebsiteUI"><ButtonCard title="School Website UI" /></Link>
<Link to="/DashboardUI"><ButtonCard title="Dashboard UI" /></Link>
<Link to="/HermesIndex"><ButtonCard title="Hermes Index" /></Link>
<Link to="/DropzoneHelper"><ButtonCard title="Dropzone Helper" /></Link>
<Link to="/MagnifierComponent"><ButtonCard title="Magnifier Component" /></Link>
<Link to="/ReactIntl"><ButtonCard title="React Intl" /></Link>
<Link to="/MyResizableComponent"><ButtonCard title="My Resizable Component" /></Link>
{/* Uncomment when you have a component for PaginatedItems */}
{/* <Link to="/PaginatedItems"><ButtonCard title="Paginated Items" /></Link> */}

      </div>
    </div>
  );
};

const ButtonCard = ({ title }) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        minWidth: '200px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#FFFFDD', // Light Blue
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      }}
    >
      <div
        style={{
          padding: '20px',
          textAlign: 'center',
          position: 'relative',
          color: 'black', // Dark Blue
        }}
      >
        <h3 style={{ margin: '0', fontSize: '1.5rem' }}>{title}</h3>
      </div>
      {/* You can add more content or customize further */}
    </div>
  );
};

export default HomePage;
