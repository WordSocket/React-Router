require('normalize.css/normalize.css');
require('styles/App.scss');
import React, { Component } from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import {Lb,Df,Lsy} from './App';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className='App'>
          <h1>Simple SAP</h1>
          <ul className='header'>
            <nav>
              {/* NavLink 判断链接点击状态高亮显示 */}
              <li><NavLink to='/' exact activeClassName='active'>李白</NavLink></li>
              <li><NavLink to='/df' activeClassName='active'>杜甫</NavLink></li>
              <li><NavLink to='/lsy' activeClassName='active'>李商隐</NavLink></li>
            </nav>
          </ul>

          <div className='content'>
            {/* 和路由要匹配否则不显示component */}
            <Route path='/' exact component={Lb} />
            <Route path='/df' component={Df} />
            <Route path='/lsy' component={Lsy} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
