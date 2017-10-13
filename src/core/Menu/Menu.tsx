import * as React from 'react';
import './Menu.css';

const Menu = (props) => (
  <section className="Menu">
    <div className="Menu-inner">
      <div className="Burger-container">
        <div className="Burger" onClick={props.onOpenMenu}>
          <div className="Burger-item"><span /></div>
          <div className="Burger-item"><span /></div>
        </div>
      </div>
      {props.menu.open ?
        <nav className="Nav">
          <a onClick={() => { props.link('/'); }}>Home</a>
          <a className="Nav-outline" onClick={() => { props.link('/projects'); }}>+ Projects</a>
          <a onClick={() => { props.link('/about'); }}>+ Projects</a>
        </nav>
        : ''
      }
    </div>
  </section>
);

export { Menu };