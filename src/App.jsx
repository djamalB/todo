import { useState } from "react";
import Users from "./Users";
import usersData from "./UserData";

function App() {
  return (
    <div>
      <Users initUsers={usersData} />
    </div>
  );
}

export default App;
