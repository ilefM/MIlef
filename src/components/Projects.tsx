import project from '../assets/projectImage.png';

function Projects() {
  const projects = [
    {
      url: project,
      title: 'A Project Title',
      description:
        'Sed aliquet nibh eget nisi vehicula, quis blandit erat rhoncus. Duis neque augue, varius non lobortis sed, suscipit ac erat. Nunc placerat risus eget orci accumsan, suscipit ultrices mauris molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In lacus purus, mattis id nunc eu, sagittis volutpat eros. Phasellus suscipit est eu enim scelerisque cursus.',
    },
    {
      url: project,
      title: 'A Project Title',
      description:
        'Sed aliquet nibh eget nisi vehicula, quis blandit erat rhoncus. Duis neque augue, varius non lobortis sed, suscipit ac erat. Nunc placerat risus eget orci accumsan, suscipit ultrices mauris molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In lacus purus, mattis id nunc eu, sagittis volutpat eros. Phasellus suscipit est eu enim scelerisque cursus.',
    },
    {
      url: project,
      title: 'A Project Title',
      description:
        'Sed aliquet nibh eget nisi vehicula, quis blandit erat rhoncus. Duis neque augue, varius non lobortis sed, suscipit ac erat. Nunc placerat risus eget orci accumsan, suscipit ultrices mauris molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In lacus purus, mattis id nunc eu, sagittis volutpat eros. Phasellus suscipit est eu enim scelerisque cursus.',
    },
    {
      url: project,
      title: 'A Project Title',
      description:
        'Sed aliquet nibh eget nisi vehicula, quis blandit erat rhoncus. Duis neque augue, varius non lobortis sed, suscipit ac erat. Nunc placerat risus eget orci accumsan, suscipit ultrices mauris molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In lacus purus, mattis id nunc eu, sagittis volutpat eros. Phasellus suscipit est eu enim scelerisque cursus.',
    },
  ];
  return (
    <div className="border-2 mx-2 mt-20 sm:mx-auto sm:max-w-[1100px]">
      <p className="text-2xl">Pet projects</p>
      <div className="flex flex-col">
        {projects.map((p) => (
          <div className="my-3 flex justify-around">
            <img className="w-[250px]" src={p.url} alt="project" />
            <div className="flex flex-col max-w-[400px]">
              <p className="text-l font-semibold mb-2">{p.title}</p>
              <p>{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
