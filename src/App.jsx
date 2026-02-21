import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchPerson } from './companent/SearchPerson';
import { UserDetail } from './companent/UserDetail';
import './App.css';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Владислав", age: 25 },
    { id: 2, name: "Настя", age: 18 },
    { id: 3, name: "Карина", age: 20 },
    { id: 4, name: "Степа", age: 32 },
    { id: 5, name: "Вова", age: 34 },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <SearchPerson users={users} setUsers={setUsers} />
        } />
        
        <Route path="/user/:id" element={
          <UserDetail users={users} />
        } />
      </Routes>
    </BrowserRouter>
  );    
}

export default App;