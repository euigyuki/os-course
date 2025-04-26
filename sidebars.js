// sidebars.js

const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro', // corresponds to intro.md
    },
    {
      type: 'category',
      label: 'Course Material',
      items: [
        'concepts',
        'assignmenthelp',
        'resources',
        'officeHours',
        'faq',  
        'howtostudy',
      ],
    },
    {
      type: 'category',
      label: 'Tools & Philosophy',
      items: [
        'JavaDebugger',
        'coding-philosophy',
      ],
    },
    {
      type: 'category',
      label: 'Jokes',
      items: [
        'jokes',
       
      ],
    },
  ],
};

export default sidebars;
