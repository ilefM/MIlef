import { useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

function Header() {
  const { i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState(
    i18n.language === 'fr' ? 'En' : 'Fr'
  );

  function toggleDarkMode() {
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
    <div className="flex mt-4 mx-8 justify-end space-x-4 md:space-x-6">
      <button
        className="hover:underline hover:transition-all hover:ease-linear hover:duration-500 font-ralewaySemiBold text-xl"
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
