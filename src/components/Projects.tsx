import fikra from '../assets/fikra.png';
import algoVisualiser from '../assets/algoVisualiser.png';
import passwordGenerator from '../assets/passwordGenerator.png';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
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
      url: algoVisualiser,
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
    <div className="my-40">
      <div className="flex">
        <div className="bg-gray-400 mt-4 w-1/3 h-[1px]"></div>
        <p className="text-2xl font-raleway w-1/3 text-neutral-700 text-center">
          Pet projects
        </p>
        <div className="bg-gray-400 mt-4 w-1/3 h-[1px]"></div>
      </div>

      <div className="mt-6 flex flex-wrap justify-around">
        {projects.map((p) => (
          <div
            key={p.id}
            className="w-[270px] mt-5 mx-2 rounded-sm ring-gray-200 shadow-lg"
          >
            <div className="bg-gray-100 w-full h-[165px] flex justify-center items-center">
              <img className="w-[80%]" src={p.url} />
            </div>
            <div className="m-2">
              <p className="font-raleway text-nowrap">{p.title}</p>
              <div className="flex space-x-4 mt-2">
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={15} />
                </a>
                <a href={p.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt size={15} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
