import React from 'react';
import InViewportDetector from './InViewportDetector';
import CenterScreen from '../styled-components/CenterScreen';
import TitleComponent from '../styled-components/TitleComponent';

const ViewportUseComponent = () => {
  return (
    <div>
      <CenterScreen>
      <TitleComponent>Scroll down to make component in viewport</TitleComponent>
      <div style={{ height: '100vh',backgroundColor:'#FF8F8F',width:'100vw' }}>
        {/* Add some content to make scrolling easier */}
      </div>
      <InViewportDetector
        options={{ rootMargin: '-1.0px' }}
        onEnterViewport={() => console.log('Entered viewport')}
        onLeaveViewport={() => console.log('Left viewport')}
      >
        {(inViewport, enterCount, leaveCount) => (
          <div style={{  backgroundColor: '#EEF296', 
          borderRadius: '10px',     
          padding: '20px',       
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
          width: '300px',            
          margin: '5%',  
          display:'flex',
          flexDirection:'column',
        justifyItems:'center'     ,
        alignItems:'center'   
}}> 
            <h3>{inViewport ? 'In viewport' : 'Not in viewport'}</h3>
            <p>{`Enter viewport: ${enterCount} times`}</p>
            <p>{`Leave viewport: ${leaveCount} times`}</p>
          </div>
        )}
      </InViewportDetector>
      <div style={{ height: '100vh',backgroundColor:'#9ADE7B',width:'100vw'   }}>
        {/* Add more content to continue scrolling */}
      </div>
      </CenterScreen>
      
    </div>
  );
};

export default ViewportUseComponent;
