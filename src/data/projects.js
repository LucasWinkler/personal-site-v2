const data = {
  title: "Things I've Built",
  projects: [
    {
      title: 'TurboGames',
      sourceHref: 'https://github.com/LucasWinkler/TurboGames',
      liveHref: null,
      image: './images/projects/turbogames.gif',
      imageAlt: 'TurboGames Image',
      description:
        'Web application built using ASP.NET Core and Razor Pages. It uses entity Framework with MS SQL Server for the database. This project is a game store that allows accounts to be registered, games to be "purchased" and more.',
      technologies: [
        'ASP.NET Core',
        'Razor Pages',
        'Entity Framework',
        'Bootstrap',
        'xUnit',
        'Selenium'
      ]
    },
    {
      title: 'Personal Site V2',
      sourceHref: 'https://github.com/LucasWinkler/personal-site',
      liveHref: 'https://lucaswinkler.dev/',
      image: './images/screenshot.png',
      imageAlt: 'Personal Website Image',
      description:
        'My current personal website. It is the second iteration and is built using React.',
      technologies: ['React', 'HTML5', 'CSS3', 'SASS', 'JavaScript', 'ES6']
    }
  ]
};

export default data;
