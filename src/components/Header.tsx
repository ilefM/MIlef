import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

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

  return (
    <div className="flex pt-4 mx-8 justify-end space-x-4 md:space-x-6">
      <button
        className="transition duration-300 ease-in-out font-dosisSemiBold text-xl"
        onClick={changeLanguage}
      >
        {language}
      </button>
      <button onClick={toggleDarkMode}>
        {darkMode ? <MdLightMode size={30} /> : <MdDarkMode size={30} />}
      </button>
    </div>
  );
}

export default Header;
