# ToDo List

### Hi there! 👋 <br/>

Thanks for viewing my repository! <br/>
This app is the first application that I built with the [Next.js](https://nextjs.org/) framework and the first where I used [Typescript](https://www.typescriptlang.org/). This is the simply toDo list app which allows you to add, mark as completed, and remove tasks from the list.

## 🔴 Live

Feel free to try the app live [here](https://next-todo-list-two.vercel.app)

## 📎 Features

- Creating _new tasks_;
- Input validation;
- Task management:
  - _marking tasks as completed_;
  - _deleting tasks_;
  - _saving data in localStorage_;

## 🔧 Built with

![JavaScript](https://img.shields.io/badge/-JavaScript-0A1A2F?style=for-the-badge&logo=JavaScript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/-React-0A1A2F?style=for-the-badge&logo=React&logoColor=61DAFB)
![NextJS](https://img.shields.io/badge/-Next.js-0A1A2F?style=for-the-badge&logo=Next.js&logoColor=000000)
![Typescript](https://img.shields.io/badge/typescript-0A1A2F?style=for-the-badge&logo=typescript&logoColor=3178C6)
![HTML5](https://img.shields.io/badge/-HTML5-0A1A2F?style=for-the-badge&logo=HTML5&logoColor=E34F26) <br/>
![CSS3](https://img.shields.io/badge/-CSS3-0A1A2F?style=for-the-badge&logo=CSS3&logoColor=1572B6)
![Tailwind](https://img.shields.io/badge/-tailwind_css-0A1A2F?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4)
![Create Next App](https://img.shields.io/badge/-create_next_app-0A1A2F?style=for-the-badge&logo=createreactapp&logoColor=09D3AC)
![Node.js](https://img.shields.io/badge/Node.JS-0A1A2F?style=for-the-badge&logo=Node.js&logoColor=339933)
![NPM](https://img.shields.io/badge/NPM-0A1A2F?style=for-the-badge&logo=npm&logoColor=CB3837)

## ⚙️ Installation

The project uses [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). To run the app on your machine you should install all dependencies. Then create a localhost port and run your web explorer.

Let's start with installing all dependencies. Move to the app main workspace and run:

    npm i

To create a localhost port you should type:

    npm run dev

Your ToDo List is ready at port 3000.

    http://localhost:3000/

## 🤔 Solutions provided in the project

- The app uses Next.js features like **App routing**, **Client and Server Side Rendering**, as well as modern React features such as **Hooks** and the **Context API**. Additionally, I use Typescript for static typing which helps me prevents errors related to incorrect data types and helps to keep the code clean.

- The app shares a common layout between the main page and the create task page. The main page displays all tasks saved in the app's state, while the create task page provides an input field for users to add new tasks.

- The `useReducer` hook is **utilized for task management**. Depending on the action, it can add a new task, mark a task as completed, delete a task, or retrieve tasks from local storage.

```js
const reducer = (state: Task[], action: ActionType) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { name: action.payload, isDone: false }];
    case "TOGGLE_TODO":
      return state.map((task, id) =>
        id === action.id ? { ...task, isDone: !task.isDone } : task,
      );
    case "DELETE_TASK":
      const newState = state.filter((item, index) => index !== action.id);
      return newState;
    case "SET_TASKS":
      return action.data;
    default:
      return state;
  }
};
```

- I use **localStorage** to store data. For this specific purpose, I've developed my own hook named `useStorage`, which facilitates working with localStorage for both data saving and retrieval. Data is fetched from localStorage during app initialization and is automatically saved when the browser tab is about to be closed. Additionally, the data is saved when performing actions on tasks, such as marking a task as completed or deleting it.

```js
const [saveToLS, getFromLS] = useStorage("tasks");
```

- The UI has been designed in a simple and minimalist way. The styles were added thanks to the CSS framework called [**Tailwind CSS**](https://tailwindcss.com/).

## 🙋‍♂️ Feel free to contact me

If you have any questions feel free to get in touch with me (contact in the [profile](https://github.com/mmcode9407)).
