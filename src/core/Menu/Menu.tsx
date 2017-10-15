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
        <ul className="Nav">
          <li><a onClick={() => { props.link('/'); }}>Home</a></li>
          <li><a className="Nav-outline" onClick={() => { props.link('/projects'); }}>+ Projects</a></li>
          {/* <a onClick={() => { props.link('/about'); }}>About</a> */}
        </ul>
        : ''
      }
    </div>
  </section>
);

export { Menu };