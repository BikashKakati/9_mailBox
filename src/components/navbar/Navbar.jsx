import { Bars3Icon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThemeChanger } from '../ThemeChanger';

const Navbar = () => {
  const { currentUser } = useSelector(state => state.auth);
  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    console.log("running");
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <nav className='navbar shadow-sm bg-base-100'>
      <div className="flex-1">
        {
          currentUser &&
          <label htmlFor="my-drawer" className="btn btn-ghost drawer-button lg:hidden">
            <Bars3Icon className="h-6 w-6" />
          </label>
        }
        <Link to={"/"}><span className='text-2xl font-bold btn btn-ghost'>GetMail</span></Link>
      </div>

      {/* light/dark mode */}
      {
        currentUser && <ThemeChanger onThemeChange={toggleTheme} theme={theme} />
      }

      <div className="flex-none">
        {currentUser && <span className='px-8 py-2 bg-error rounded-lg mr-5 hidden md:block'>{currentUser.email}</span>}
        {
          !currentUser && <button className='btn btn-info'>Log in</button>
        }
      </div>
    </nav>
  )
}
export default Navbar