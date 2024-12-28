import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Welcome to my User management system</h1>
      <p>There are users numbers: {users.length} </p>
      {
        users.map(user =><p key={user.id}>{user.name}: {user.email}</p>)
      }
    </div>
  );
};

export default App;
