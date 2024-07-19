import fikra from '../assets/fikra.png';
import sortingVisualiser from '../assets/sortingVisualiser.png';
import passwordGenerator from '../assets/passwordGenerator.png';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      url: fikra,
      title: 'Fikra',
      live: 'https://fikra.vercel.app',
      github: 'https://github.com/ilefM/fikra',
    },
    {
      id: 2,
      url: sortingVisualiser,
      title: 'Sorting Algorithm Visualiser',
      live: 'https://ilefm.github.io/sorting-visualiser',
      github: 'https://github.com/ilefM/sorting-visualiser',
    },
    {
      id: 3,
      url: passwordGenerator,
      title: 'Password Generator',
      live: 'https://ilefm.github.io/password-generator',
      github: 'https://github.com/ilefM/password-generator',
    },
  ];

  return (
    <div className="mt-16 w-full">
      <p className="text-2xl font-dosis text-textColor dark:text-slate-50 text-nowrap">
        {t('petProjects.title')}
      </p>
      <p className="text-sm italic">{t('petProjects.indication')}</p>
      <div className="flex flex-col sm:flex-row items-center mt-4 justify-center sm:justify-between -mx-2">
        {projects.map((p) => (
          <div
            className="flex flex-col m-2 w-64 max-w-full h-52 bg-foreground dark:bg-darkForeground rounded-lg shadow-lg overflow-hidden"
            key={p.id}
          >
            <img src={p.url} className="w-full h-36 object-contain p-4" />
            <div className="px-4">
              <h2 className="text-lg">{p.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
