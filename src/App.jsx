import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchPerson } from './companent/SearchPerson';
import { UserDetail } from './companent/UserDetail';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const API_URL = "http://localhost:3001/users";

  useEffect(() =>{
    const getUsers = async()=>{
      try{
        const response = await fetch(API_URL);
        const data = await response.json();
        setUsers(data)


      }
      catch(error){
          console.error("Проверь, запущен ли npx json-server!", error);
      }
    }
    getUsers();
  } , [])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <SearchPerson users={users} setUsers={setUsers} />
        } />
        {users.map((element)=>{
          console.log(element);
        })}
        <Route path="/user/:id" element={
          <UserDetail users={users} />
        } />
      </Routes>
    </BrowserRouter>
  );    
}

export default App;