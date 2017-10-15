import * as React from 'react';
import './App.css';
import './Normalize.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import { HomeContainer } from './containers/HomeContainer';
import { MenuContainer } from './containers/MenuContainer';
import { About } from './pages/about/About';
import { ProjectsContainer } from './containers/ProjectsContainer';
import { ProjectsDetailsContainer } from './containers/ProjectsDetailsContainer';
import { toggleMenu } from './reducers/menu';
import TransitionGroup from 'react-transition-group/TransitionGroup';

// https://github.com/gianlucacandiotti/react-router-transitions

class App extends React.Component {
  props: any;
  constructor() {
    super();
  }
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
    <MenuContainer />
    <section className="Page">
      {props.menu.open ? <div className="Page-block" onClick={props.onCloseMenu} /> : ''}
      <Route component={ScrollToTop} />
      <Switch>
        <Route 
          path="/" exact={true} children={({ match, ...rest }) => (
          <TransitionGroup component={firstChild}>
            {match && <HomeContainer {...rest} />}
          </TransitionGroup>
        )} />
        <Route path="/projects" component={ProjectsContainer} />
        <Route path="/about" component={About} />
        <Route path="/project-details/:uri" component={ProjectsDetailsContainer} />
      </Switch>
    </section >
  </div>
));

/**
 * Scroll to the top of the page
 * when the route changes
 */
const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

/**
 * For animation transition groups
 * @param props 
 */
const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

export default App;
