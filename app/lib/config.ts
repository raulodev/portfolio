import { Projects, PersonalInfo } from "@/interfaces";

export const personalInfo: PersonalInfo = {
  name: "Raúl Cobiellas",
  summary: `Full stack developer with experience in a wide range of languages and
  frameworks. Able to quickly adapt to new technologies and
  working environments, solving complex problems and providing
  innovative solutions. Focused on the quality, efficiency and scalability of
  projects.`,
  email: "raulodev@gmail.com",
};

export const projects: Projects[] = [
  {
    name: "Consumo Claro",
    description: `"Consumo Claro" is an Android application designed to help 
    households in Cuba control and monitor their electricity consumption. 
    The application allows users to record and track energy usage. With an 
    intuitive interface and key functionalities, 
    "Consumo Claro" helps users reduce costs and promote sustainable practices.`,
    link: "https://github.com/raulodev/consumo-claro",
    tech: [
      {
        name: "react",
        color: "blue",
      },
      {
        name: "react native",
        color: "green",
      },
      {
        name: "expo",
        color: "red",
      },
      {
        name: "typescript",
        color: "blue",
      },
    ],
  },
  {
    name: "nauta",
    description: `"nauta" is a command line tool developed to facilitate access 
    and management of the Nauta internet service in Cuba. This application allows 
    users to interact with their Nauta account directly from the terminal, offering 
    functionalities to access and manage the connection efficiently. With "nauta", 
    users simplify the administration of their accounts without the need for a 
    graphical interface.`,
    link: "https://github.com/raulodev/nauta",
    tech: [
      {
        name: "python",
        color: "blue",
      },
      {
        name: "pipx",
        color: "green",
      },
      {
        name: "scraping",
        color: "red",
      },
    ],
  },
  {
    name: "PageCraft",
    description: `"PageCraft" is a powerful and easy-to-use package that simplifies
     creating pagination in your applications. This tool allows developers to handle
      large data sets efficiently by providing a clear and consistent interface for
       navigating paginated data.`,
    link: "https://github.com/raulodev/pagecraft",
    tech: [
      {
        name: "python",
        color: "blue",
      },
      {
        name: "pip",
        color: "green",
      },
      {
        name: "sqlalchemy",
        color: "red",
      },
    ],
  },
  {
    name: "Task Queue Checker",
    description: `"Task Queue Checker" is a tool designed to simplify 
    task queue management and monitoring in Python environments. 
    This application makes it easy for developers to monitor task queues, 
    ensuring that they are processed efficiently and resolving any 
    potential issues in a timely manner. With "Task Queue Checker", 
    task management in Python projects becomes easier and more effective.`,
    link: "https://github.com/raulodev/task-queue-checker",
    tech: [
      {
        name: "python",
        color: "blue",
      },
      {
        name: "pip",
        color: "green",
      },
      {
        name: "sqlite",
        color: "red",
      },
      {
        name: "mysql",
        color: "blue",
      },
      {
        name: "postgresql",
        color: "green",
      },
    ],
  },
];
