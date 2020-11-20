import React, { useState } from 'react';
import store from '../redux/store';
import { Link } from 'react-router-dom';
import './Main.css';

const Main = () => {
  const [linker, setLinker] = useState(['link1', 'link2', 'link3']);

  return (
    <div className="main">
      <div>
        <div className="section">
          <p>Section 1</p>
          <button onClick={() => fullpageApi.moveSectionDown()}>
            Move down
          </button>
        </div>
        <div className="section">
          <p>Section 2</p>
          <button onClick={() => fullpageApi.moveSectionUp()}>Move up</button>
        </div>
        <div className="section">
          <p>Section 3</p>
        </div>
      </div>
      <h1>title</h1>
      <ul>
        <Link to="/nav/link1">
          <li>link1</li>
        </Link>
        <Link to="/nav/link2">
          <li>link2</li>
        </Link>
        <Link to="/nav/link3">
          <li>link3</li>
        </Link>
      </ul>
    </div> // main
  );
};

export default Main;
