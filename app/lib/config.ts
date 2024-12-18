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
    description: `Android application designed to help 
    households in Cuba control and monitor their electricity consumption. 
    The application allows users to record and track energy usage. With an 
    intuitive interface and key functionalities, 
    "Consumo Claro" helps users reduce costs and promote sustainable practices.`,
    link: "https://github.com/raulodev/consumo-claro",
    tech: [
      {
        name: "react native",
      },
      {
        name: "expo",
      },
      {
        name: "typescript",
      },
    ],
  },
  {
    name: "nauta CLI",
    description: `Command line tool developed to facilitate access 
    and management of the Nauta internet service in Cuba. This application allows 
    users to interact with their Nauta account directly from the terminal, offering 
    functionalities to access and manage the connection efficiently. With "nauta", 
    users simplify the administration of their accounts without the need for a 
    graphical interface.`,
    link: "https://github.com/raulodev/nauta",
    tech: [
      {
        name: "python",
      },
      {
        name: "pipx",
      },
      {
        name: "scraping",
      },
    ],
  },
  {
    name: "PageCraft",
    description: `Powerful and easy-to-use package that simplifies
     creating pagination in your applications. This tool allows developers to handle
      large data sets efficiently by providing a clear and consistent interface for
       navigating paginated data.`,
    link: "https://github.com/raulodev/pagecraft",
    tech: [
      {
        name: "python",
      },
      {
        name: "pip",
      },
      {
        name: "sqlalchemy",
      },
    ],
  },
  {
    name: "Task Queue Checker",
    description: `Tool designed to simplify 
    task queue management and monitoring in Python environments. 
    This application makes it easy for developers to monitor task queues, 
    ensuring that they are processed efficiently and resolving any 
    potential issues in a timely manner. With "Task Queue Checker", 
    task management in Python projects becomes easier and more effective.`,
    link: "https://github.com/raulodev/task-queue-checker",
    tech: [
      {
        name: "python",
      },
      {
        name: "pip",
      },
      {
        name: "sqlite",
      },
      {
        name: "mysql",
      },
      {
        name: "postgresql",
      },
    ],
  },
  {
    name: "Kill Bill client",
    description: `Kill Bill is a library that allows developers to 
    easily interact with the Kill Bill API from Python applications. 
    Kill Bill is an open and flexible billing platform that offers 
    recurring billing and subscription management solutions. This 
    library provides intuitive and simplified methods for accessing 
    Kill Bill features, including creating and managing accounts, 
    subscriptions, invoices, payments, and more.`,
    link: "https://github.com/raulodev/python-killbill-client",
    tech: [
      {
        name: "python",
      },
      {
        name: "pip",
      },
      {
        name: "kill bill",
      },
    ],
  },
  {
    name: "Kill Bill XML Builder",
    description: `Kill Bill XML Builder is a library that facilitates 
    the creation and manipulation of XML files specific to the Kill 
    Bill billing platform. This library provides a structured 
    and efficient way to generate XML documents necessary to 
    interact with Kill Bill APIs, allowing developers to better 
    manage their integrations and customizations.`,
    link: "https://github.com/raulodev/killbill-xml-builder",
    tech: [
      {
        name: "python",
      },
      {
        name: "pip",
      },
      {
        name: "xml",
      },
      {
        name: "kill bill",
      },
    ],
  },
];
