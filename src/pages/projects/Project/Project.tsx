import './Project.css';
import * as React from 'react';
import { ProjectModel } from '../../../reducers/projects';

let Project: any = (props: ProjectModel) => (
  <div className="Project">
    <h4>{props.title}</h4>
    <div className="Project-icons">{props.icons.map((icon) => (<span key={icon.id}>{icon.key}</span>))}</div>
  </div>
);

export {Project};