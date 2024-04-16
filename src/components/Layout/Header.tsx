import { IconMenu2, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ActionButton } from '../Elements';
import logo from './logo.svg';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="menu md:h-full max-w-[var(--content-width)] mx-auto">
      <div className="relative w-full mx-auto md:p-5 md:flex md:flex-row md:justify-between md:items-center">
        <nav
          className={twMerge(
            'absolute top-0 h-screen left-[-250px] w-[250px] p-5 z-50 shadow-md bg-white md:bg-transparent md:static md:w-fit md:h-[unset] md:p-0 md:shadow-none',
            open ? 'left-0 fixed' : ''
          )}
        >
          <div className="list-container relative h-full flex flex-col justify-between">
            <ul className="menu-items-list h-[120px] flex flex-col justify-between uppercase md:h-[unset] md:gap-8 md:flex-row">
              <li className="menu-item">Our menu</li>
              <li className="menu-item">Our mission</li>
              <li className="menu-item">Outpost</li>
            </ul>
            <IconX
              className="absolute right-0 top-0 cursor-pointer md:hidden"
              onClick={() => setOpen(false)}
            />
            <div className="header-actions-mobile flex w-full gap-5 md:hidden">
              <ActionButton variant="primary">Sign in</ActionButton>
              <ActionButton variant="secondary">Order</ActionButton>
            </div>
          </div>
        </nav>
        <div className="header-fixed relative p-5 md:p-0 flex justify-center items-center">
          <IconMenu2
            className="absolute left-5 cursor-pointer md:hidden"
            onClick={() => setOpen(true)}
          />
          <img src={logo} alt="Logo" />
        </div>
        <div className="header-actions-fixed hidden md:flex">
          <ActionButton variant="primary">Sign in</ActionButton>
          <ActionButton variant="secondary">Order</ActionButton>
        </div>
      </div>
    </header>
  );
}
