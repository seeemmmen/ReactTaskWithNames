import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const UserDetail = () => {
  const { id } = useParams();
  const { users, isDark } = useContext(AppContext); 

  const user = users.find((u) => String(u.id) === String(id));

  if (!user) return <div style={{ color: isDark ? "white" : "black" }}>Загрузка или не найден...</div>;

  return (
    <div style={{ 
      padding: "20px", 
      backgroundColor: isDark ? "#1a1a1a" : "#fff", 
      color: isDark ? "white" : "black",
      minHeight: "100vh" 
    }}>
      <h2>Карточка: {user.name}</h2>
      <p>Возраст: {user.age}</p>
      <Link to="/" style={{ color: "lightblue" }}>← Назад</Link>
    </div>
  );
};