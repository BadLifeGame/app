let currentId = 0;

export default [
  {
    type: "page",
    page: "start-a-new-life",
    text: "New Life",
    id: "builtin" + currentId++
  },
  {
    type: "page",
    page: "achievements",
    text: "Achievements",
    id: "builtin" + currentId++
  },
  {
    type: "page",
    page: "credits",
    text: "Credits",
    id: "builtin" + currentId++
  },
  {
    type: "page",
    page: "faq",
    text: "FAQ",
    id: "builtin" + currentId++
  }
]