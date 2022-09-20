import { NavLink } from 'react-router-dom';
import './index.css'
export default function Error() {
      return (
          <section className="main bg-dark">
              <h1 className="Error-type">404</h1>
              <h3 className="Error-desc">
                  This page does not exist, please visit the{' '}
                  <NavLink className="Error-link" to="/">
                      homepage
                  </NavLink>
              </h3>
          </section>
      );
}
