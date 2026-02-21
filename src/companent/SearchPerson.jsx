"use client";
import { useState } from "react";

export const SearchPerson = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Владислав", age: 25 },
    { id: 2, name: "Настя", age: 18 },
    { id: 3, name: "Карина", age: 20 },
    { id: 4, name: "Степа", age: 32 },
    { id: 5, name: "Вова", age: 34 },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [userAdd, setUser] = useState("");
  const [ageAdd, setAge] = useState("");



  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id!=id))
  };


  const addnewUser = (userAdd , ageAdd) =>{
    const people = {
        id : Date.now(),
        name: userAdd,
        age:Number(ageAdd)
    }
    setUsers([...users ,people ]);
  }
  const filterUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.age.toString().includes(searchQuery)
  );

  return (
    <div style={{ padding: "20px" }}>
      <p>Поиск и управление сотрудниками</p>
      <input
        type="text"
        placeholder="Поиск..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <p>Добавить нового пользователя</p>
      <input
        type="text"
        placeholder="Поиск..."
        value={userAdd}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="text"
        placeholder="Поиск..."
        value={ageAdd}
        onChange={(e) => setAge(e.target.value)}
      />
     <button 
                onClick={() => addnewUser(userAdd , ageAdd)}
                style={{ cursor: "pointer", color: "green" }}
              >
                Добавить
              </button>
      <ul>
        {filterUsers.length > 0 ? (
          filterUsers.map((user) => (
            <li key={user.id} style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
              <span>{user.name} — {user.age} лет</span>
              
              {/* Кнопка удаления */}
              <button 
                onClick={() => deleteUser(user.id)}
                style={{ cursor: "pointer", color: "red" }}
              >
                Удалить
              </button>
            </li>
          ))
        ) : (
          <li style={{ color: "gray" }}>Список пуст или ничего не найдено</li>
        )}
      </ul>
    </div>
  );
};