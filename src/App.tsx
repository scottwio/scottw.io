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
        <AppWithRouter menu={this.props.menu} onCloseMenu={() => {this.closeMenu(); }}/>
    );
  }
}

const AppWithRouter: any = withRouter((props) => (
  <div className={'MasterContainer ' + (props.menu.open ? 'is-menu-open' : '')}>
  <MenuContainer />
  <section className={`Page${props.location.pathname === '/projects' ? ' Page--black' : ''}`}>
    {props.menu.open ? <div className="Page-block" onClick={props.onCloseMenu}/> : ''}
    <Switch>
      <Route path="/" exact={true} component={HomeContainer} />
      <Route path="/projects" component={ProjectsContainer} />
      <Route path="/about" component={About} />
      <Route path="/project-details/:uri" component={ProjectsDetailsContainer} />
    </Switch>
  </section >
  </div>
));

export default App;
