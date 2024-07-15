import fikra from '../assets/fikra.png';
import sortingVisualiser from '../assets/sortingVisualiser.png';
import passwordGenerator from '../assets/passwordGenerator.png';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
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
    <div className="bg-neutral-100 w-full border-2">
      <div className="mt-32 mx-8">
        <div className="flex opacity-45 mb-4">
          <div className="bg-gray-400 dark:text-[#fefae0] mt-4 w-full h-[1px]"></div>
          <p className="mx-4 text-xl font-dosisSemiBold text-neutral-800 dark:text-[#fefae0] text-nowrap text-center">
            {t('petProjects.title')}
          </p>
          <div className="bg-gray-400 dark:text-[#fefae0] mt-4 w-full h-[1px]"></div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between -mx-2">
          {projects.map((p) => (
            <div
              className="flex flex-col p-2 m-2 w-80 max-w-full h-60 bg-white rounded-sm shadow-sm hover:shadow-2xl transition-shadow duration-300 ease-in-out"
              key={p.id}
            >
              <div className="flex p-2 items-center justify-center bg-gray-200 w-full h-2/3 rounded-sm overflow-hidden">
                <img src={p.url} className="w-4/5" />
              </div>
              <div className="mt-2">
                <h2 className="text-lg mb-2">{p.title}</h2>
                <div className="flex space-x-4">
                  <a
                    href={p.github}
                    className="text-neutral-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={p.live}
                    className="text-neutral-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
