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
        'AssignmentHelp',
        'Resources',
        'OfficeHours',
        'faq',  
      ],
    },
    {
      type: 'category',
      label: 'Tools & Philosophy',
      items: [
        'javadebugger',
        'coding-philosophy',
      ],
    },
    {
      type: 'category',
      label: 'Jokes',
      items: [
        'Jokes',
       
      ],
    },
  ],
};

export default sidebars;
