# React Project

## Requirements

- `React.js 18`
- `Node.js ^16.10`. Need to change your version?
  - [Windows](https://github.com/coreybutler/nvm-windows)
  - [Mac](https://github.com/tj/n)
- Firebase (database, auth, hosting, and storage).
- Next.JS

## Getting Started

We are using "yarn" instead of "npm" in this project.

1. Install yarn. `npm install -g yarn`
2. Install all node modules. `yarn install`
3. Boot up the server. `yarn start`

### Hosting

1. Go to the official Firebase website and set up a project.
2. Enable Firebase Hosting by going into the hosting section under Build dropdown.
3. Inside your repo run the following commands (one at a time):
4. `npm install -g firebase-tools`
5. `firebase login`
6. `firebase init`
7. `yarn build` (_remember to always build before deploying your code to production_).
8. `firebase deploy`
9. If you run into trouble take a look at: https://www.geeksforgeeks.org/how-to-deploy-react-project-on-firebase/

### Firebase (if you need authentication or a database in your project)

1. Go to the official Firebase website and set up a project.
2. Enable Firebase Firestore and Firestore Authentication.
3. Make sure to enable google authentication in the settings.
4. If you used `yarn` to install all dependencies, you shouldn't need to install anything else.
5. Change the name of the '.env.local.example' file to '.env.local' and write your api key and other information (can be found in the settings of your project on the firebase website).
6. You can import the 'Login' component on the page you want the user to log in. At the moment the logic is set up to support authorization with Google. If you want to add others (email, username and password, github) You will have to implement this on your own.
7. Clicking on the "Continue with Google" button should open a pop-up that logs you in. If this doesn't work, check your firebase keys and if you have google authentication enabled. Once you are logged in, it will automatically update the state in the 'authSlice' reducer with your information (display name, email and access token). If you need any of these, you can get them with a useSelector hook in the component where you need them.
8. You can check if the user is signed in by checking the state of the 'authSlice'. If user is false (empty), the user isn't signed in.
9. You are free to style the buttons or the login component as you see fit. You can (probably a good idea) move the log out button somewhere else. As long as you import all the necessary things and don't change the function/logic, it should work.

### Redux

The "redux" folder contains two example reducers with explanation on how they work and links to relevant documentation:

- Counter: Executes some simple sychronous logic.
- Users: Example of asynchronous reducers, it fetches dummy data about users and writes this data on the db (You need to have Firestore storage set up to make it work).

You can delete this examples if you wish to do so.

### Folder Structure And Advice

1. You can adjust the folder structure if you have other preferances.
2. You can use whichever CSS library you wish, or just plain CSS/SASS (preferably modules).
3. You may modify the boilerplate (e.g. delete dummy text in App.js, the counter, the the logo.svg, etc.)
4. V1 of this project is due in 4 weeks. Remeber to KISS (Keep It Simple, Stupid). You need to think of v1 as a conceptual boundary of constraints; anything _outside those boundaries must be saved for a future version_.

<!---
*** WHEN YOU ARE UP AND RUNNING, YOU MAY DELETE EVERYTHING ABOVE -EXCEPT- THE VERY TOP LINE. ***
-->

## Sprint Progress

Go to the [milestones tab](../../milestone/1) to track your progress, it is important that when you complete an issue you mark it as closed.

## Project Overview

Multi-sided marketplace (MSM) app (think Fiverr, Upwork, Uber, etc.) This app will serve two distinct users: customers who need web development services and the web developers who will get paid for doing the work

### Public URL

[Replace me with the link to your app's URL](https://www.google.com/)

## Team Members Roll Call

- [ ] Team member #X
