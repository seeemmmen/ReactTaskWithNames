import { useState , useEffect} from "react";
import { Link } from "react-router-dom";

export const SearchPerson = ({ users, setUsers }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [userAdd, setUser] = useState("");
  const [ageAdd, setAge] = useState("");



  useEffect(() => {
    console.log("Started");
  });
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const addnewUser = () => {
    if (!userAdd.trim() || !ageAdd) return; 
    const people = {
        id: Date.now(), 
        name: userAdd,
        age: Number(ageAdd)
    };
    setUsers([...users, people]); 
    setUser(""); 
    setAge("");
  };

  const filterUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.age.toString().includes(searchQuery)
  );

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h2>Поиск сотрудников</h2>
      <input
        type="text"
        placeholder="Поиск по имени или возрасту..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: "8px", width: "250px", marginBottom: "20px" }}
      />

      <div style={{ marginBottom: "30px", padding: "15px", border: "1px solid #444" }}>
        <h4>Добавить нового сотрудника</h4>
        <input
          type="text"
          placeholder="Имя"
          value={userAdd}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="number"
          placeholder="Возраст"
          value={ageAdd}
          onChange={(e) => setAge(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
        <button onClick={addnewUser} style={{ color: "green", marginLeft: "10px", cursor: "pointer" }}>
          Добавить
        </button>
      </div>

      <ul>
        {filterUsers.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px", display: "flex", gap: "15px", alignItems: "center" }}>
            <Link to={`/user/${user.id}`} style={{ color: "lightblue", fontWeight: "bold", textDecoration: "none" }}>
              {user.name}
            </Link>
            <span>— {user.age} лет</span>
            <button onClick={() => deleteUser(user.id)} style={{ color: "red", cursor: "pointer" }}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};