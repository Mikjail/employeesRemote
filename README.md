# Getting Starter

### Run App:

- You can run it locally

```
npm run start
```

- You can visit the github page: https://mikjail.github.io/employeesDemo/

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

- I used Css Modules which comes incorporated with react v17
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
