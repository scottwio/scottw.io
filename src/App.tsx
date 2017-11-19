import * as React from 'react';
import './App.css';
import './Normalize.css';
import { Route, withRouter } from 'react-router-dom';
import { HomeContainer } from './pages/home/HomeContainer';
import { MenuContainer } from './core/Menu/MenuContainer';
import { ProjectsContainer } from './pages/projects/ProjectsContainer';
import { ProjectsDetailsContainer } from './pages/projectDetails/ProjectsDetailsContainer';
import { toggleMenu } from './store/menu';
import { Switch } from 'react-router';
import { AboutContainer } from './pages/about/AboutContainer';
// import TransitionGroup from 'react-transition-group/TransitionGroup';

// https://github.com/gianlucacandiotti/react-router-transitions

class App extends React.Component {
  props: any;
  closeMenu() {
    this.props.dispatch(toggleMenu());
  }
  render() {
    return (
      <AppWithRouter menu={this.props.menu} onCloseMenu={() => { this.closeMenu(); }} />
    );
  }
}
const AppWithRouter: any = withRouter((props) => (
  <div
    className={`MasterContainer
    ${props.menu.open ? ' is-menu-open' : ''}
    ${props.location.pathname === '/projects' ? ' is-dark' : ''}`}
  >
    <MenuContainer router={props} />
    <section className="Page">
      {props.menu.open ? <div className="Page-block" onClick={props.onCloseMenu} /> : ''}
      <Switch>
        <Route path="/" exact={true} component={HomeContainer} />
        <Route path="/projects" exact={true} component={ProjectsContainer} />
        <Route path="/about" exact={true} component={AboutContainer} />
        <Route path="/project-details/:uri" exact={true} component={ProjectsDetailsContainer} />
      </ Switch>
    </section >
  </div>
));

/**
 * Scroll to the top of the page
 * when the route changes
 */
// const ScrollToTop = () => {
//   window.scrollTo(0, 0);
//   return null;
// };

/**
 * For animation transition groups
 * @param props 
 */
// const firstChild = props => {
//   const childrenArray = React.Children.toArray(props.children);
//   return childrenArray[0] || null;
// };

export default App;
