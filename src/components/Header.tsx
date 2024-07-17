import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdDarkMode, MdLightMode, MdOutlineLanguage } from 'react-icons/md';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { RiMenuFill } from 'react-icons/ri';
import profilepic from '../assets/profilepic.png';

function Header() {
  const { i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState(
    i18n.language === 'fr' ? 'English' : 'Français'
  );

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
    }
  }, [setDarkMode]);

  function toggleDarkMode() {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.removeItem('theme');
      document.documentElement.classList.remove('dark');
    }
    setDarkMode(!darkMode);
  }

  function changeLanguage() {
    if (i18n.language === 'fr') {
      setLanguage('Français');
      i18n.changeLanguage('en');
    } else {
      setLanguage('English');
      i18n.changeLanguage('fr');
    }
  }

  function ThemeSwitcher() {
    return (
      <>
        {!darkMode ? (
          <button
            className="p-2 rounded-full bg-lightGray text-darkGray"
            onClick={toggleDarkMode}
          >
            <MdDarkMode size={18} />
          </button>
        ) : (
          <button
            className="p-2 rounded-full bg-darkGray text-lightGray"
            onClick={toggleDarkMode}
          >
            <MdLightMode size={18} />
          </button>
        )}
      </>
    );
  }

  function MobileView() {
    return (
      <div className="fixed top-0 right-0 m-2 p-[2px] rounded-full bg-[#191d20] dark:bg-lightGray ">
        <ThemeSwitcher />
        <Menu>
          <MenuButton className="p-2 text-lightGray dark:text-darkGray">
            <RiMenuFill size={18} />
          </MenuButton>
          <MenuItems
            transition
            anchor="bottom end"
            className="w-40 mt-2 rounded-lg bg-white border-2 border-gray-100 shadow-lg p-1 text-sm/6 text-neutral-700 transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100">
                About me
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100">
                My work
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100">
                Contact me
              </button>
            </MenuItem>
            <MenuItem>
              <button
                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100"
                onClick={changeLanguage}
              >
                <MdOutlineLanguage />
                {language}
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    );
  }

  function WebView() {
    // backdrop-blur-xl bg-lightGray/30 dark:bg-darkGray/30
    return (
      <div className="w-full max-w-[600px] fixed top-0 right-auto left-1/2 -translate-x-1/2 my-2 p-1 mx-auto rounded-full flex justify-between bg-darkGray dark:bg-lightGray">
        <img
          className="w-[34px] rounded-full mr-2"
          src={profilepic}
          alt="profile picture"
        />
        <div className="flex items-center space-x-2 font-dosis text-lightGray dark:text-darkGray text-lg">
          <a
            className="px-2 rounded-lg  hover:scale-90 transition ease-out"
            href=""
          >
            About
          </a>
          <a
            className="px-2 rounded-lg hover:scale-90 transition ease-out"
            href=""
          >
            Projects
          </a>
          <a
            className="px-2 rounded-lg hover:scale-90 transition ease-out"
            href=""
          >
            Contact me
          </a>
        </div>
        <ThemeSwitcher />
      </div>
    );
  }

  return (
    <>
      <div className="block sm:hidden">
        <MobileView />
      </div>
      <div className="hidden sm:block">
        <WebView />
      </div>
    </>
  );
}

export default Header;
