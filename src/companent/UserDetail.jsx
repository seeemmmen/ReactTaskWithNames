import { useParams, Link } from "react-router-dom";

export const UserDetail = ({ users }) => {
  const { id } = useParams();

  if (!users || users.length === 0) {
    return <div style={{ color: "white", padding: "20px" }}>Загрузка данных...</div>;
  }
  const user = users.find((e) => String(e.id) === String(id));

  if (!user) {
    return (
      <div style={{ color: "white", padding: "20px" }}>
        <h2>Сотрудник не найден 🔍</h2>
        <Link to="/" style={{ color: "lightblue" }}>Вернуться к списку</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h2>Карточка сотрудника</h2>
      <div style={{ background: "#333", padding: "20px", borderRadius: "10px" }}>
        <p>ID пользователя: <span style={{ color: "gold" }}>{user.id}</span></p>
        <p>Имя пользователя: <span style={{ color: "gold" }}>{user.name}</span></p>
        <p>Возраст: <span style={{ color: "gold" }}>{user.age} лет</span></p>
      </div>
      
      <Link to="/" style={{ color: "lightblue", display: "block", marginTop: "20px" }}>
        ← Назад к списку
      </Link>
    </div>
  );
};