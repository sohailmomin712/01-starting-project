import React from "react";

export const userData = {
  firstName: "Sohail", // feel free to replace the name value
  lastName: "Momin", // feel free to replace the name value
  title: "Instructor", // feel free to replace the title value
};

// Edit the User component code to output the userData data
export function User() {
  return (
    <div id="user" data-testid="user">
      <h2>{userData.firstName}</h2>
      <p>{userData.lastName}</p>
    </div>
  );
}

// DON'T edit the App component code
// function App() {
//   return (
//     <div id="app">
//       <h1>Time to Practice</h1>
//       <p>Welcome on board of this course! You got this 💪</p>
//       {/* <User /> */}
//     </div>
//   );
// }

// export default App;
export default User;
