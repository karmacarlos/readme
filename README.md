# Readme App

Mod 3 Project

## Table of Contents

- [Abstract](#Abstract)
- [Technologies](#Technologies)
- [Code Architecture](#Code-Architecture)
- [Install and Set Up](#Install-and-Set-Up)
- [Illustrations](#Illustrations)
- [Wins](#Wins)
- [Challenges](#Challenges)
- [Contributors](#Contributors)
- [Project Specs](#Project-Specs)

## Abstract

Web application that helps the user choose the next book to read based on a book the user likes.
The goal of this project was to implement at least one self taught technology by creating an interactive web application, in this case the user can log in, search a book by title, see recommendations and create a reading list.

## Technologies

- Javascript
- HTML
- CSS
- React
- React Router
- ContextAPI
- Hooks
- Cypress
- Express.js

## Install and Set Up

To run the application:

You can see this application on the following link:

[Readme](https://readme-2107.herokuapp.com/)

To run Cypress tests:

1. Clone down the Readme repo
2. Cd into `readme`
3. Run `npm install`
4. Run `npm start`
5. Your browser will open the website.
6. In a separate terminal, run `npx cypress open`
7. Cypress browser will load, choose a test and see the results


## Code Architecture

The React architecture is based on 18 functional components, we used 2 context to manage state globally using local storage and reducer functions to make these more readable and to pass just two values as props to any of our child components.

If you're interested on seeing the planning and execution of this project you can take a look to the wire frame, architecture diagram and project board:

- [Wire Frame](https://www.figma.com/file/PA6tXIvkU2iHS5Jbz7LhV9/Readme-wire-frame?node-id=0%3A1)
- [Project Board](https://github.com/karmacarlos/readme/projects/1)
- [Architecture Diagram](https://www.figma.com/file/bS3aV4QoMXVFq5SjVcsA4W/Readme-Jam-Board?node-id=0%3A1)

## Illustrations
![readme_desktop](https://user-images.githubusercontent.com/81398850/142963194-0baa9f1b-ea66-4260-8a1f-82e0d507ebb9.gif)

![readme_mobile](https://user-images.githubusercontent.com/81398850/142963201-27cfccec-7f78-43ab-90bb-0a976d8005e2.gif)

![Screen Shot 2021-11-22 at 7 34 25 PM](https://user-images.githubusercontent.com/81398850/142963291-d93ab153-d8c7-4bd4-89fe-4e5a33fcd06f.png)

## Wins

- Great team collaboration
- Implementation of contextAPI
- Implementation of React hooks 
- Implementation of reducer functions to manage the interaction of our context with the rest of the components
- We were able to meet the deadlines that we set for ourselves

## Challenges

- We had challenges cleaning the data
- We had challenges making our state persist after refreshing the browser
- We had challenges implementing a patch request to add and remove books from the reading list in our server

## Future Features

- Improve the recommendation algorithm 

## Contributors

- [Carlos Gomez](https://github.com/karmacarlos)
- [Bei Zhang](https://github.com/beizy)
- [Phil Than](https://github.com/pthan1)

## Project Specs

- The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/stretch.html)
