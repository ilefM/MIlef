import { useTranslation } from 'react-i18next';
import profilepic from '../assets/profilepic.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';

function AboutMe() {
  const { t, i18n } = useTranslation();

  function downloadCV() {
    const pdfUrl =
      i18n.language === 'en' ? 'milefCVenglish.pdf' : 'milefCV.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="flex flex-col mx-auto items-center w-full">
      <div className="w-full flex flex-col sm:flex-row sm:justify-between  items-center mt-4">
        <img
          className="order-1 sm:order-2 w-[170px] sm:w-[230px] shadow-lg rounded-full"
          src={profilepic}
          alt="profile picture"
        />
        <div className="order-2 sm:order-1 flex flex-col items-center sm:items-start sm:justify-between">
          <p className="text-xl mt-8 sm:text-4xl">Mohammed Ilef</p>
          <h1 className="text-7xl sm:text-9xl font-dosis">Ikhelef</h1>

          <div className="order-3 flex justify-between mt-4 space-x-3">
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
          <button
            className="order-4 mt-8 flex justify-center items-center space-x-2 bg-buttonColor dark:bg-darkButtonColor hover:bg-buttonColorHover dark:hover:bg-darkButtonColorHover text-slate-50 text-lg rounded-md py-1 px-3"
            onClick={downloadCV}
          >
            <LuDownload size={20} />
            <p className="font-dosisSemiBold">{t('about.downloadCV')}</p>
          </button>
        </div>
      </div>

      <div className="mt-32 sm:mt-20">
        <h2 className="text-2xl">{t('about.title')}</h2>
        <div className="mt-2 flex flex-col sm:flex-row sm:space-x-5 justify-between">
          <div className="bg-foreground dark:bg-darkForeground rounded-md p-4 h-fit">
            <p>{t('about.description')}</p>
          </div>
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
