import { useState, useEffect } from "react";
import { supabase } from "./client";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
    window.addEventListener("hashchange", () => {
      checkUser();
    });
  }, []);

  async function checkUser() {
    const user = supabase.auth.user();
    console.log(user);
    setUser(user);
  }

  async function signInWithGithub() {
    await supabase.auth.signIn({
      provider: "github",
    });
  }

  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
  }

  if (user) {
    return (
      <div className="App">
        <h1>Hello, {user.user_metadata.full_name}</h1>
        <img
          height="200px"
          width="200px"
          border="2px"
          src={user.user_metadata.avatar_url}
          alt=""
        />
        <button onClick={signOut}>Sign Out</button>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hello, please sign in!</h1>
      <button onClick={signInWithGithub}>Sign In with Github</button>
    </div>
  );
}

export default App;
