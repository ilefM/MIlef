import { useTranslation } from 'react-i18next';
import profilepic from '../assets/profilepic.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function AboutMe() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-full md:flex-row">
      <div className="text-center md:text-left mt-4 mx-auto md:mx-0 md:mt-0 text-darkTurquoise dark:text-customGray">
        <div className="m-auto md:mx-0">
          <img
            className="w-[150px] shadow-md border border-gray-400 rounded-full transition-all duration-300 ease-in-out"
            src={profilepic}
            alt="profile picture"
          />
        </div>
        <p className="text-xl mt-4 md:text-2xl">Mohammed Ilef</p>
        <h1 className="text-6xl md:text-8xl font-dosisLight">Ikhelef</h1>
      </div>
      <div className="flex space-x-4 mx-auto mt-4">
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
      <div className="border-l-2 dark:border-slate-50 mx-auto mt-14">
        <div className="ml-2 space-y-2">
          <p>Developer</p>
          <p>Geek</p>
          <p>Developer</p>
        </div>
      </div>
      <div className="my-32">
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
