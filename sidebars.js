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
        'officehours',
        'faq',  
        'howtostudy',
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
        'jokes',
       
      ],
    },
  ],
};

export default sidebars;
