import { NavLink } from 'react-router-dom';
import './index.css';
export default function Header() {
      return (
            <div>
                  <nav className="main-nav">
                        <NavLink className="main-nav-item" to="/">
                              <h1 className="sr-only">HRnet</h1>
                        </NavLink>
                        <div className="nav-link">
                              <NavLink className="main-nav-item" to="/">
                                    <i className="fa fa-user-circle"></i>
                                    Create employee
                              </NavLink>
                              <NavLink
                                    className="main-nav-item"
                                    to="/Employee-list"
                              >
                                    <i className="fa fa-user-circle"></i>
                                    Employee list
                              </NavLink>
                        </div>
                  </nav>
            </div>
      );
}
