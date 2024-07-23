import { useTranslation } from 'react-i18next';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { projects } from '../data/projectsData';

function ProjectsDetails() {
  const { t } = useTranslation();
  return (
    <div className="">
      <p className="text-2xl">{t('petProjects.title')}</p>
      <div className="mt-8 space-y-8">
        {projects.map((p) => (
          <div
            key={p.id}
            className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between bg-foreground dark:bg-darkForeground rounded-lg p-4"
          >
            <img
              src={p.url}
              className="w-full max-h-60 sm:max-w-72 sm:h-full object-contain"
            />
            <div className="flex flex-col sm:justify-between mt-4 sm:mt-0 sm:ml-6">
              <div>
                <p className="text-xl">{p.title}</p>
                <p className="mt-2">{p.description}</p>
              </div>
              <div className="flex space-x-6 mt-6">
                <Link to={p.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} />
                </Link>
                <Link to={p.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt size={20} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsDetails;
