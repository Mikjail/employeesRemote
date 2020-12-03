# Demo: https://mikjail.github.io/employeesDemo/

# Getting Starter

### Run App:

- First install the dependencies:

```
npm install
```

- Run the app in a local server (localhost):

```
npm run start
```

- Open the browser and go to:

```
http://localhost:3000
```

### Run Unit Tests and check coverage:

```
npm run test -- --coverage --watchAll
```

# Comments

### External libraries used:

- Redux: I decided to use redux to manage a central state (employees) across the app.
- Moment: Used to format the dates on submition.
- Eslint: To prevent any syntax errors while programming.

### Styles:

- There is a wide aproach to add css in React (css components, css modules, plain css with naming conventions like BEM...), but to keep it simple I used Css Modules which come incorporated with react v17
- I used css variables to set the theme according to the wireframes.
- I created 1 common style to reuse styles on primary/secondary btns.

### Test:

- Jest/React Test Library: I followed TDD for this project.

#### Project Architecture:

I implemented a container based architecture

```
/Components
 | Headline
 | /List
   | ListItems
 | NavBar
 | NoContent
 | /UI
   | Button
   | Input
/Containers
 | EmployeeCreate                     // Create/Edit View
 | EmployeeList                       // List View
```

# To Dos to improve the code:

Since the priority of the test is to do something basic and functional with the wireframes shared, I didn't take the time
to add type checkers and E2E. I consider them very important but not crutial for this code exercise.
As an improvement I would:

- Use a type checker to avoid runtime errors (propType, Typescript or Flow).
- Add E2E testing (cypress).
- I would improve the css to file by changing them to a preprocessor (sass or less) to make the nesting styles more readable, or even include some reusable blocks of styles.
