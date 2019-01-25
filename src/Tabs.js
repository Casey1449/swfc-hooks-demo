import React from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import HocExample from './pages/HocExample/index';
import RenderPropsExample from './pages/RenderPropsExample/index';
import HooksExample from './pages/HooksExample/index';

const Tabs = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/HocExample" className="tab" activeClassName="active">
              Higher Order Components
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/RenderPropsExample"
              className="tab"
              activeClassName="active"
            >
              Render Props
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/HooksExample"
              className="tab"
              activeClassName="active"
            >
              Hooks
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route
          exact
          path={`/`}
          render={() => <Redirect replace to={`/HocExample`} />}
        />
        <Route path={`/HocExample`} component={HocExample} />
        <Route path={`/RenderPropsExample`} component={RenderPropsExample} />
        <Route path={`/HooksExample`} component={HooksExample} />
      </Switch>
    </div>
  );
};

export default Tabs;
