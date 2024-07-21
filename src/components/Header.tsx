import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdDarkMode, MdLightMode, MdOutlineLanguage } from 'react-icons/md';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { RiMenuFill } from 'react-icons/ri';
import profilepic from '../assets/profilepic.png';

function Header() {
  const { t, i18n } = useTranslation();
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

  function ThemeSwitcher() {
    return (
      <>
        {!darkMode ? (
          <button
            className="p-2 rounded-full bg-darkBackground text-slate-50"
            onClick={toggleDarkMode}
          >
            <MdDarkMode size={18} />
          </button>
        ) : (
          <button
            className="p-2 rounded-full bg-background text-[#191b1f]"
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
      <div className="fixed top-0 right-0 m-2 p-[2px] space-x-2 rounded-lg bg-foreground dark:bg-darkForeground ">
        <ThemeSwitcher />
        <Menu>
          <MenuButton className="p-2 text-textColor dark:text-slate-50">
            <RiMenuFill size={18} />
          </MenuButton>
          <MenuItems
            transition
            anchor="bottom end"
            className="sm:hidden w-40 mt-2 rounded-lg bg-foreground dark:bg-darkForeground shadow-lg p-1 text-sm/6 text-textColor dark:text-slate-50 transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100">
                {t('navigation.about')}
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100">
                {t('navigation.project')}
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100">
                {t('navigation.contactme')}
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
      <div className="w-full max-w-[800px] px-3 fixed top-0 right-auto left-1/2 -translate-x-1/2 my-2">
        <div className="max-auto py-2 px-4 rounded-lg flex justify-between backdrop-blur-xl bg-foreground dark:bg-darkForeground">
          <div className="flex items-center">
            <img
              className="w-[34px] rounded-full mr-2"
              src={profilepic}
              alt="profile picture"
            />
            <p className="font-dosisSemiBold text-md text-textColor dark:text-slate-50">
              Mohammed Ilef
            </p>
          </div>
          <div className="flex space-x-3">
            <div className="flex items-center space-x-5 font-dosisSemiBold text-textColor dark:text-slate-50 text-md">
              <a className="hover:scale-90 transition ease-out" href="">
                {t('navigation.about')}
              </a>
              <a className="hover:scale-90 transition ease-out" href="">
                {t('navigation.project')}
              </a>
              <a className="hover:scale-90 transition ease-out" href="">
                {t('navigation.contactme')}
              </a>
              <button
                className="hover:scale-90 transition ease-out underline w-6"
                onClick={changeLanguage}
              >
                {language}
              </button>
            </div>
            <ThemeSwitcher />
          </div>
        </div>
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
