import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CenterScreen from '../styled-components/CenterScreen';
import TitleComponent from '../styled-components/TitleComponent';
import BoxComponent from '../styled-components/BoxComponent';

const Timeline = () => {
  return (
    <>
    <CenterScreen>
      <TitleComponent>React-vertical-timeline-component </TitleComponent>
      <BoxComponent sty>
      <VerticalTimeline >
      {/* Timeline Element 1 */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '60px', height: '60px' }}
        icon={<img src="https://picsum.photos/60" alt="Icon 1" style={{width: '100%', height: '100%',objectFit: 'cover'}}/>}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
      </VerticalTimelineElement>

      {/* Timeline Element 2 */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '60px', height: '60px' }}
        icon={<img src="https://picsum.photos/60" alt="Icon 2" />}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online Marketing
        </p>
      </VerticalTimelineElement>

      {/* More Timeline Elements Here */}
    </VerticalTimeline>
      </BoxComponent>
    </CenterScreen>
    </>

  );
};

export default Timeline;
