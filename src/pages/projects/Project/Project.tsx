import './Project.css';
import * as React from 'react';
import { ProjectModel } from '../../../store/projects/projectsModel';

interface IProjectProps extends ProjectModel {
  link: any;
}

export let Project: any = (props: IProjectProps) => (
  <div className="Project" onClick={() => {props.link(`/project-details/${props.uri}`); }}>
    <h4>{props.title}</h4>
    <div className="Project-icons">{props.icons.map((icon) => (<span key={icon.id}>{icon.key}</span>))}</div>
  </div>
);