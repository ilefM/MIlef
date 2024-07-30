import { useTranslation } from 'react-i18next';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ContactMe() {
  const { t } = useTranslation();

  return (
    <div>
      <p className="text-2xl">{t('contactme.title')}</p>

      <div className="mt-12 px-4 py-8 max-w-[400px] sm:max-w-[550px] mx-auto flex flex-col items-center bg-foreground dark:bg-darkForeground rounded-md">
        <div className="sm:flex space-y-10 sm:space-y-0 sm:space-x-16">
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-buttonColor dark:bg-darkButtonColor p-1.5">
              <MdOutlineMailOutline size={20} color="white" />
            </div>
            <p className="text-lg">{t('contactme.email')}</p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-buttonColor dark:bg-darkButtonColor p-1.5">
              <FaLinkedin size={20} color="white" />
            </div>
            <Link
              className="hover:underline text-lg"
              to="https://www.linkedin.com/in/mohammed-ilef-ikhelef-70935a1b2/"
            >
              {t('contactme.linkedIn')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
