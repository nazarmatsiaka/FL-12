import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import './App.css';

import Routs from './Routes';

class App extends Component{

    render() {
      let url = this.props.location.pathname;
      return (
          <div className="wrapper">
              <header>
                  <Link className={url === '/allEmp'? "header_link active": "header_link"} to="/allEmp">All Employees</Link>
                  <Link className={url === '/allUnits'? "header_link active": "header_link"} to="/allUnits">All Units</Link>
                  <Link className={url === '/warning'? "header_link active": "header_link"} to="/warning">Warning Employees</Link>
              </header>
              <main>
                  <Routs />
              </main>
          </div>
      )
  }
}

export default withRouter(App);
