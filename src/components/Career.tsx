function Career() {
  const expriences = [
    {
      id: 1,
      title: 'Intern software developer at Ticketmaster',
      period: 'January 15 2024 to april 26 2024',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus feugiat nunc, at semper magna ultricies id. In eu dui interdum, tincidunt tortor et, ornare lorem. Nulla sit amet ullamcorper quam.',
      date: '2018',
    },
    {
      id: 2,
      title: 'Intern software developer at Ticketmaster',
      period: 'January 15 2024 to april 26 2024',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus feugiat nunc, at semper magna ultricies id. In eu dui interdum, tincidunt tortor et, ornare lorem. Nulla sit amet ullamcorper quam.',
      date: '2021',
    },
    {
      id: 3,
      title: 'Intern software developer at Ticketmaster',
      period: 'January 15 2024 to april 26 2024',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus feugiat nunc, at semper magna ultricies id. In eu dui interdum, tincidunt tortor et, ornare lorem. Nulla sit amet ullamcorper quam.',
      date: '2024',
    },
  ];

  return (
    <div className="sm:mx-auto mt-20">
      <p className="text-2xl">Experience</p>
      <ol className="mt-6 items-center sm:flex">
        {expriences.map((e) => (
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-11 h-6 bg-gray-100 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                <p>{e.date}</p>
              </div>
              <div className="sm:flex w-full bg-gray-300 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {e.title}
              </h3>
              <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {e.period}
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {e.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Career;
