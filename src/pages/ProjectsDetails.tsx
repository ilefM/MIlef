import { useTranslation } from 'react-i18next';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import fikra from '../assets/fikra.png';
import sortingVisualiser from '../assets/sortingVisualiser.png';
import passwordGenerator from '../assets/passwordGenerator.png';

function ProjectsDetails() {
  const { t } = useTranslation();

  return (
    <div>
      <p className="text-2xl">{t('petProjects.title')}</p>
      <div className="mt-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between bg-foreground dark:bg-darkForeground rounded-lg p-4">
          <img
            src={fikra}
            className="w-full mt-1.5 max-h-60 sm:max-w-72 sm:h-full object-contain"
          />
          <div className="flex flex-col mt-4 sm:mt-0 sm:ml-6">
            <div>
              <p className="text-xl">{t('petProjects.fikra.title')}</p>
              <p className="mt-2">{t('petProjects.fikra.description')}</p>
            </div>
            <div className="flex flex-col justify-start space-y-2 mt-6">
              <Link
                to={'https://github.com/ilefM/fikra'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="sm:max-w-[200px] p-1 bg-buttonColor dark:bg-darkButtonColor hover:bg-buttonColorHover dark:hover:bg-darkButtonColorHover rounded-md flex space-x-2 items-center justify-center text-slate-50 text-lg">
                  <FaGithub size={20} /> <p>{t('petProjects.sourceCode')}</p>
                </div>
              </Link>
              <Link
                to={'https://fikra.vercel.app'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="sm:max-w-[200px] min-w-1/2 p-1 bg-buttonColor dark:bg-darkButtonColor hover:bg-buttonColorHover dark:hover:bg-darkButtonColorHover rounded-md flex space-x-2 items-center justify-center text-slate-50 text-lg">
                  <FaExternalLinkAlt size={19} />{' '}
                  <p>{t('petProjects.liveVersion')}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between bg-foreground dark:bg-darkForeground rounded-lg p-4">
          <img
            src={sortingVisualiser}
            className="w-full mt-1.5 max-h-60 sm:max-w-72 sm:h-full object-contain"
          />
          <div className="flex flex-col sm:justify-between mt-4 sm:mt-0 sm:ml-6">
            <div>
              <p className="text-xl">
                {t('petProjects.sortingAlgorithm.title')}
              </p>
              <p className="mt-2">
                {t('petProjects.sortingAlgorithm.description')}
              </p>
            </div>
            <div className="flex flex-col justify-start space-y-2 mt-6">
              <Link
                to={'https://github.com/ilefM/sorting-visualiser'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="sm:max-w-[200px] p-1 bg-buttonColor dark:bg-darkButtonColor hover:bg-buttonColorHover dark:hover:bg-darkButtonColorHover rounded-md flex space-x-2 items-center justify-center text-slate-50 text-lg">
                  <FaGithub size={20} /> <p>{t('petProjects.sourceCode')}</p>
                </div>
              </Link>
              <Link
                to={'https://ilefm.github.io/sorting-visualiser'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="sm:max-w-[200px] min-w-1/2 p-1 bg-buttonColor dark:bg-darkButtonColor hover:bg-buttonColorHover dark:hover:bg-darkButtonColorHover rounded-md flex space-x-2 items-center justify-center text-slate-50 text-lg">
                  <FaExternalLinkAlt size={19} />
                  <p>{t('petProjects.liveVersion')}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between bg-foreground dark:bg-darkForeground rounded-lg p-4">
          <img
            src={passwordGenerator}
            className="w-full mt-1.5 max-h-60 sm:max-w-72 sm:h-full object-contain"
          />
          <div className="flex flex-col sm:justify-between mt-4 sm:mt-0 sm:ml-6">
            <div>
              <p className="text-xl">
                {t('petProjects.passwordGenerator.title')}
              </p>
              <p className="mt-2">
                {t('petProjects.passwordGenerator.description')}
              </p>
            </div>
            <div className="flex flex-col justify-start space-y-2 mt-6">
              <Link
                to={'https://github.com/ilefM/password-generator'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="sm:max-w-[200px] p-1 bg-buttonColor dark:bg-darkButtonColor hover:bg-buttonColorHover dark:hover:bg-darkButtonColorHover rounded-md flex space-x-2 items-center justify-center text-slate-50 text-lg">
                  <FaGithub size={20} /> <p>{t('petProjects.sourceCode')}</p>
                </div>
              </Link>
              <Link
                to={'https://ilefm.github.io/password-generator'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="sm:max-w-[200px] min-w-1/2 p-1 bg-buttonColor dark:bg-darkButtonColor hover:bg-buttonColorHover dark:hover:bg-darkButtonColorHover rounded-md flex space-x-2 items-center justify-center text-slate-50 text-lg">
                  <FaExternalLinkAlt size={19} />{' '}
                  <p>{t('petProjects.liveVersion')}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsDetails;
