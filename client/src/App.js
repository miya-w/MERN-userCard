
import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {

  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [hobby, setHobby] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      hobby,
      username,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          hobby,
          username,
        },
      ]);
    });
  };

return (
  <div className="App">
   <div className='app-input'>
      <input type="text"
        placeholder="Name..."
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input type="text"
        placeholder="Hobby..."
        onChange={(event) => {
          setHobby(event.target.value);
        }}
      />
      <input type="text"
        placeholder="Username..."
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <button className='button' onClick={createUser}> Create User </button>
    </div>
    <div className="usersDisplay">
      {listOfUsers.map((user) => {
        return (
          <div className="usersDisplay-card">
            <h3>Name: {user.name}</h3>
            <h3>Hobby: {user.hobby}</h3>
            <h3>Username: {user.username}</h3>
          </div>
        );
      })}
    </div>
  </div>
);
      }

export default App;


