import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import fikra from '../assets/fikra.png';
import sortingVisualiser from '../assets/sortingVisualiser.png';
import passwordGenerator from '../assets/passwordGenerator.png';

function Projects() {
  const { t } = useTranslation();

  return (
    <div className="mt-8 w-full">
      <p className="text-2xl font-dosis text-textColor dark:text-slate-50 text-nowrap">
        {t('petProjects.title')}
      </p>
      <p className="text-sm italic">{t('petProjects.indication')}</p>
      <div className="flex flex-col sm:flex-row items-center mt-2 justify-center sm:justify-between -mx-2">
        <div className="flex flex-col m-2 w-64 max-w-full h-48 bg-foreground dark:bg-darkForeground rounded-lg shadow-lg overflow-hidden hover:shadow-xl">
          <Link to={'projects'}>
            <img src={fikra} className="w-full h-36 object-contain p-4" />
            <div className="px-4">
              <h2 className="text-lg">{t('petProjects.fikra.title')}</h2>
            </div>
          </Link>
        </div>
        <div className="flex flex-col m-2 w-64 max-w-full h-48 bg-foreground dark:bg-darkForeground rounded-lg shadow-lg overflow-hidden hover:shadow-xl">
          <Link to={'projects'}>
            <img
              src={sortingVisualiser}
              className="w-full h-36 object-contain p-4"
            />
            <div className="px-4">
              <h2 className="text-lg">
                {t('petProjects.sortingAlgorithm.title')}
              </h2>
            </div>
          </Link>
        </div>
        <div className="flex flex-col m-2 w-64 max-w-full h-48 bg-foreground dark:bg-darkForeground rounded-lg shadow-lg overflow-hidden hover:shadow-xl">
          <Link to={'projects'}>
            <img
              src={passwordGenerator}
              className="w-full h-36 object-contain p-4"
            />
            <div className="px-4">
              <h2 className="text-lg">
                {t('petProjects.passwordGenerator.title')}
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
