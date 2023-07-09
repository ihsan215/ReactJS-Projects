import React, { useState } from "react";
import AddUSer from "./components/Users/AddUser.js";
import UserList from "./components/Users/UsersList.js";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUsers) => {
      return [
        ...prevUsers,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUSer onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
