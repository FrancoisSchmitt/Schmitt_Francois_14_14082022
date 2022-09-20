import { NavLink } from 'react-router-dom';
import logo from '../../../Assets/logo.png';
import './index.css';
export default function Header() {
      return (
            <div>
                  <nav className="main-nav">
                        <div className="nav-link-logo">
                              <NavLink className="main-nav-item-home" to="/">
                                    <img src={logo} alt="Logo Of WebSite" />
                              </NavLink>
                        </div>
                        <h1 className="nav-title">HRNET</h1>
                        <div className="nav-link">
                              <NavLink
                                    className="main-nav-item"
                                    to="/"
                                    // activeclassname="selected"
                              >
                                    <i className="fa fa-user-circle"></i>
                                    Create employee
                              </NavLink>
                              <NavLink
                                    className="main-nav-item"
                                    to="/Employee-list"
                                    // activeclassname="selected"
                              >
                                    <i className="fa fa-user-circle"></i>
                                    Employee list
                              </NavLink>
                        </div>
                  </nav>
            </div>
      );
}
