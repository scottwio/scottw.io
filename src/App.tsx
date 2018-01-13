import * as React from 'react';
import './App.css';
import './Normalize.css';
import { Route, Switch } from 'react-router-dom';
import { HomeContainer } from './pages/home/HomeContainer';
import { MenuContainer } from './core/Menu/MenuContainer';
import { ProjectsContainer } from './pages/projects/ProjectsContainer';
import { ProjectsDetailsContainer } from './pages/projectDetails/ProjectsDetailsContainer';
import { AboutContainer } from './pages/about/AboutContainer';
import { toggleMenu } from './store/menu/menuActions';

export class App extends React.Component {
  props: any;
  closeMenu() {
    this.props.dispatch(toggleMenu());
  }
  render() {
    return (
      <div
        className={`MasterContainer
      ${this.props.menu.open ? ' is-menu-open' : ''}
      ${this.props.location.pathname === '/projects' ? ' is-dark' : ''}`}
      >
        <MenuContainer router={this.props} />
        <section className="Page">
          {this.props.menu.open ? <div className="Page-block" onClick={() => { this.closeMenu(); }} /> : ''}
          <Switch>
            <Route path="/" exact={true} component={HomeContainer} />
            <Route path="/projects" exact={true} component={ProjectsContainer} />
            <Route path="/about" exact={true} component={AboutContainer} />
            <Route path="/project-details/:uri" exact={true} component={ProjectsDetailsContainer} />
          </ Switch>
        </section >
      </div>
    );
  }
}
