import React, { useContext, useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "./User";
import { UserContext } from "./User";

function App() {
  return (
    <UserProvider>
      <Content />
    </UserProvider>
  );
}

function Content() {
  const { theme } = useContext(UserContext);

  return (
    <main className={theme}>
      <Header />
      <Profile />
    </main>
  );
}

export default App;
