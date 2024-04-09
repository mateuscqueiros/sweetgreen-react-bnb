import { IconMenu2, IconX } from '@tabler/icons-react';
import logo from './logo.svg';

export function Header() {
  console.log('render');
  return (
    <header className="menu">
      <div className="container">
        <nav>
          <div className="list-container">
            <ul className="menu-items-list">
              <li className="menu-item">Our menu</li>
              <li className="menu-item">Our mission</li>
              <li className="menu-item">Outpost</li>
            </ul>
            <IconX />
            <div className="header-actions-mobile">
              <button>Sign in</button>
              <button>Order</button>
            </div>
          </div>
        </nav>
        <div className="header-fixed">
          <IconMenu2 />
          <img src={logo} alt="Logo" />
        </div>
        <div className="header-actions-fixed">
          <button>Sign in</button>
          <button>Order</button>
        </div>
      </div>
    </header>
  );
}
