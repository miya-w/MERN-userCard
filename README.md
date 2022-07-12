# MERN project - A user list
![UserList]( https://github.com/miya-w/MERN-userCard/blob/main/images/User-UI.png)
[](https://github.com/miya-w/MERN-userCard/blob/main/images/mern.png)

## Goal
- Building client side with React.
- Setting up Node environment with Express and project dependencies
- Setting up a server with GET and POST routes. (An HTTP POST request sends data to the project's - Endpoint, where it is stored and can be accessed through a GET request.
- Accessing a GET route on the server side from a function called on the client side
- Build up the MongoDB database
- Using MongoDB compass to manipulate date.

## Dependencies

- Node.js Official Guides for [https://nodejs.org/en/docs/][PlDb]
- Express framework
    -  Example of an Express server
    - Routing for Express
- Node.js packages:
    - cors
    - body-parser
    - nodemon
- React
    - Axios
---
 
###### 1. Getting Start -  SERVER

    1. npm init -y
        this creates package.json file
        
    2. npm install express mongoose cors nodemon
        this installs these packages
        
    3. Create index.js file, this will contain all connection information
    
    4. Create user.js in models folder this will create or fetch user
    
    5. User thunderclient a visual studio extension for verifying connection right from visual studio
    
    6.Start your server -> node index.js

  
###### 2. Getting Start -  CLIENT
```
//- React install
    1. npx create-react-app .
        Just like regular react project use this to create default react files
    node index.js
// - Axios
    2. npm install axios
[axios](https://www.npmjs.com/package/react-axios)

// - Start your new React app
    3. npm start
```


```
- nodemon
/ package.json -> restart the server whenever we change the code
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
```



#### mongoDB compass [mondoDB download](https://www.mongodb.com/try/download/compass)

- tell mongoDB compass which database connect
mongodb+srv://<userName>:<passWord>@cluster0.x5ctqyq.mongodb.net/<theDataNeme>?retryWrites=true&w=majority

- VS code extention : Thunder client
http://localhost:3001/getUsers
---

### What I learned?

- Axios
The more information -> [Axios in React: A Guide for Beginners](https://www.geeksforgeeks.org/axios-in-react-a-guide-for-beginners/)
```react
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

```


 
 [The source of this MERN toturial ](https://www.youtube.com/watch?v=I7EDAR2GRVo&t=1914s)

