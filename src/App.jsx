import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <h1>{`User management system UI :${users.length}`}</h1>
      {users.map((user) => (
        <p key={user.id}>
          {user.name} : {user.email} <br /> {user.paragraph}
        </p>
      ))}
    </>
  );
}

export default App;
