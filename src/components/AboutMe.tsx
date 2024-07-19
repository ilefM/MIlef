import { useTranslation } from 'react-i18next';
import profilepic from '../assets/profilepic.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function AboutMe() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col mx-auto items-center w-full">
      <div className="w-full max-w-[620px] flex flex-col sm:flex-row sm:justify-between  items-center mt-4">
        <img
          className="order-1 sm:order-2 w-[170px] shadow-lg rounded-full"
          src={profilepic}
          alt="profile picture"
        />
        <div className="order-2 sm:order-1 flex flex-col items-center sm:items-start">
          <p className="text-xl mt-8 sm:text-4xl">Mohammed Ilef</p>
          <h1 className="text-7xl sm:text-9xl font-dosis">Ikhelef</h1>
          <div className="flex space-x-4 mt-4">
            <div className="bg-foreground dark:bg-darkForeground rounded-md p-1">
              <a
                href="https://github.com/ilefM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
            </div>
            <div className="bg-foreground dark:bg-darkForeground rounded-md p-1">
              <a
                href="https://www.linkedin.com/in/mohammed-ilef-ikhelef-70935a1b2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
            <div className="bg-foreground dark:bg-darkForeground rounded-md p-1">
              <a
                href="https://www.instagram.com/ilef.m.i/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="border-l-2 dark:border-slate-50 mx-auto mt-14">
        <div className="ml-2 space-y-2">
          <p>Developer</p>
          <p>Geek</p>
          <p>Developer</p>
        </div>
      </div> */}
      <div className="mt-32 sm:mt-28">
        <h2 className="text-2xl">{t('about.title')}</h2>
        <div className="mt-2 bg-foreground dark:bg-darkForeground rounded-md p-4">
          <p>{t('about.description')}</p>
        </div>
      </div>
    </div>
  );
}

export function Socials() {
  return (
    <div className="flex space-x-4 mx-auto justify-center md:justify-start mt-6 md:mt-4"></div>
  );
}

export default AboutMe;
