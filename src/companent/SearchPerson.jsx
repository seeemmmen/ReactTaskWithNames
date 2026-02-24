import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export const SearchPerson = () => {
  const { users, setUsers, isDark, toggleTheme } = useContext(AppContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [userAdd, setUser] = useState("");
  const [ageAdd, setAge] = useState("");

  const deleteUser = async (id) => {
    try {
      await fetch(`http://localhost:3001/users/${id}`, { method: "DELETE" });
      setUsers(users.filter((u) => u.id !== id));
    } catch (e) { console.error(e); }
  };

  const addnewUser = async () => {
    if (!userAdd.trim() || !ageAdd) return;
    const newUser = { id: Date.now().toString(), name: userAdd, age: Number(ageAdd) };
    try {
      await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      setUsers([...users, newUser]);
    } catch (e) { console.error(e); }
    setUser(""); setAge("");
  };

  const filtered = users.filter(u => 
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    u.age.toString().includes(searchQuery)
  );

  return (
    <div style={{ 
      padding: "20px", 
      backgroundColor: isDark ? "#1a1a1a" : "#fff", 
      color: isDark ? "#fff" : "#000",
      minHeight: "100vh" 
    }}>
      <button onClick={toggleTheme} style={{ marginBottom: "20px" }}>
        {isDark ? "☀️ Светлая тема" : "🌙 Темная тема"}
      </button>

      <h2>Сотрудники ({users.length})</h2>
      <input 
        placeholder="Поиск..." 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
      />

      <div style={{ margin: "20px 0", border: "1px solid #444", padding: "10px" }}>
        <input placeholder="Имя" value={userAdd} onChange={(e) => setUser(e.target.value)} />
        <input placeholder="Возраст" type="number" value={ageAdd} onChange={(e) => setAge(e.target.value)} />
        <button onClick={addnewUser}>Добавить</button>
      </div>

      <ul>
        {filtered.map(u => (
          <li key={u.id} style={{ marginBottom: "10px" }}>
            <Link to={`/user/${u.id}`} style={{ color: "lightblue" }}>{u.name}</Link>
            <span> — {u.age} лет </span>
            <button onClick={() => deleteUser(u.id)} style={{ color: "red" }}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};