import User from "./User"
import usersData from "./UserData";
import React, { useState } from "react";

function Users() {
  const [users, setUsers] = useState(usersData);

  function changeField(id, field, value) {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, [field]: value } : user
      )
    );
  }

  const rows = users.map((user) => (
    <User key={user.id} user={user} changeField={changeField} />
  ));

  return (
    <div>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default Users