import { useEffect, useState } from "react";
import "../src/app.css";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { email, name };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h1>Welcome to my website</h1>
      <p>There are users here for: {users.length}</p>

      <form onSubmit={handleAddUser}>
        <input type="name" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" value="Add new User" />
      </form>
      <br />
      {users.map((user) => (
        <p key={user.id}>
          {user.name}: {user.email}
        </p>
      ))}
    </div>
  );
};

export default App;
