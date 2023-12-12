import React, { useState, useEffect } from "react";
import { Loading, Progress, SetDefault } from "react-loading-ui";
import CenterScreen from "../styled-components/CenterScreen";
import TitleComponent from "../styled-components/TitleComponent";
import BoxComponent from "../styled-components/BoxComponent";

const LoadingComponent = ({ theme }) => {
  const [progress, setProgress] = useState(1);

  const DefaultLoading = () => {
    Loading();
    setTimeout(() => {
      Loading();
    }, 3000);
  };

  const TopbarLoading = () => {
    Loading({ topBar: true });
    setTimeout(() => {
      Loading();
    }, 3000);
  };

  const LoadingProgress = () => {
    Loading({
      progress: true,
      progressedClose: true,
    });

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 4;
        Progress(newProgress);

        if (newProgress >= 100) {
          clearInterval(interval);
          return 0;
        }

        return newProgress;
      });
    }, 100);
  };

  const toggleTheme = () => {
    SetDefault({ theme });
  };

  useEffect(() => {
    return () => {
      // Cleanup code, if needed
    };
  }, []);

  return (
    <div>
      <CenterScreen>
        <TitleComponent>
        Loading Component
        </TitleComponent>
        <BoxComponent>
        <button type="button" onClick={DefaultLoading} style={{marginTop:'10px',padding:'10px',backgroundColor:'#ECF4D6',border:'2px solid black',borderRadius:'10px'}}>
        Show Loading
      </button>
      <button type="button" onClick={TopbarLoading} style={{marginTop:'10px',padding:'10px',backgroundColor:'#ECF4D6',border:'2px solid black',borderRadius:'10px'}}>
        Show Top Bar Loading
      </button>
      <button type="button" onClick={LoadingProgress} style={{marginTop:'10px',padding:'10px',backgroundColor:'#ECF4D6',border:'2px solid black',borderRadius:'10px'}}>
        Show Progress
      </button>
        </BoxComponent>
      </CenterScreen>


    </div>
  );
};

export default LoadingComponent;
