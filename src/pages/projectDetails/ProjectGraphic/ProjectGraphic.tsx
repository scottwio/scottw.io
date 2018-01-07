import * as React from 'react';
import './ProjectGraphic.css';

export const ProjectGraphic = (props: any) => (
  <div className="ProjectGraphic">
    { (() => {
        if (props.image.type === 'phone') {
          return (<img className="ProjectGraphic-bg" src="/assets/images/phone.svg" />);
        } else {
          return (<img className="ProjectGraphic-bg" src="/assets/images/desktop.svg" />);
        }
      })()
    }
  
    <img className="ProjectGraphic-img" src={props.image.url} />
  </div>
);
