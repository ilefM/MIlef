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
              <div className="flex flex-col justify-start space-y-2 mt-6">
                <Link to={p.github} target="_blank" rel="noopener noreferrer">
                  <div className="sm:max-w-[200px] p-1 bg-buttonColor dark:bg-darkButtonColor hover:bg-buttonColorHover dark:hover:bg-darkButtonColorHover rounded-md flex space-x-2 items-center justify-center text-slate-50 text-lg">
                    <FaGithub size={20} /> <p>Source code</p>
                  </div>
                </Link>
                <Link to={p.live} target="_blank" rel="noopener noreferrer">
                  <div className="sm:max-w-[200px] min-w-1/2 p-1 bg-buttonColor dark:bg-darkButtonColor hover:bg-buttonColorHover dark:hover:bg-darkButtonColorHover rounded-md flex space-x-2 items-center justify-center text-slate-50 text-lg">
                    <FaExternalLinkAlt size={19} />{' '}
                    <p>Visit the live version</p>
                  </div>
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
