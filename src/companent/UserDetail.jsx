import { useParams, Link } from "react-router-dom";

export const UserDetail = ({users}) => {
  const { id } = useParams();
  const index = Number(id);
  const user = users.find((e) => e.id === index);
  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h2>Карточка сотрудника</h2>
      <p>ID пользователя: <span style={{ color: "gold" }}>{id}</span></p>
      <p>Имя пользователя: <span style={{ color: "gold" }}>{user.name}</span></p>

      
      <Link to="/" style={{ color: "lightblue", display: "block", marginTop: "20px" }}>
        ← Вернуться к списку
      </Link>
    </div>
  );
};