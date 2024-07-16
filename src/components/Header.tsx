import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LuMenu } from 'react-icons/lu';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import profilepic from '../assets/profilepic.png';

function Header() {
  const { i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState(
    i18n.language === 'fr' ? 'En' : 'Fr'
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
      setLanguage('Fr');
      i18n.changeLanguage('en');
    } else {
      setLanguage('En');
      i18n.changeLanguage('fr');
    }
  }

  function MobileMenu() {
    return (
      <Menu>
        <MenuButton className="p-2 border-2 border-[#3e525a] text-[#25343b] dark:text-[#eae0d5] dark:border-[#eae0d5] rounded-lg">
          <LuMenu size={16} />
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom end"
          className="w-36 rounded-lg bg-white border-2 border-gray-100 shadow-lg mt-1 p-1 text-sm/6 text-neutral-700 transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100">
              About
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
              {language}
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    );
  }

  return (
    <div className="max-w-[900px] w-full backdrop-blur-xl bg-cream/30 dark:bg-darkGreen/30 fixed top-0 left-1/2 -translate-x-1/2 py-2">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center w-full">
            <img
              className="w-[30px] rounded-full mr-2"
              src={profilepic}
              alt="profile picture"
            />
            <p className="font-dosisBold text-lg text-darkGreen dark:text-cream">
              Mohammed Ilef
            </p>
          </div>

          <div className="w-full flex space-x-2 items-center justify-end">
            <div className="hidden sm:flex items-center space-x-2 font-dosisSemiBold text-darkGreen dark:text-cream text-lg">
              <a
                className="p-2 rounded-lg  hover:scale-90 transition ease-out"
                href=""
              >
                About
              </a>
              <a
                className="p-2 rounded-lg hover:scale-90 transition ease-out"
                href=""
              >
                Projects
              </a>
              <a
                className="p-2 rounded-lg hover:scale-90 transition ease-out"
                href=""
              >
                Contact me
              </a>
            </div>
            {!darkMode ? (
              <button
                className="p-2 rounded-lg bg-darkGreen border-2 border-darkGreen"
                onClick={toggleDarkMode}
              >
                <MdDarkMode size={16} color="#eae0d5" />
              </button>
            ) : (
              <button
                className="p-2 bg-cream rounded-lg border-2 border-cream"
                onClick={toggleDarkMode}
              >
                <MdLightMode size={16} color="#25343b" />
              </button>
            )}
            <div className="block sm:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
