import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isDark, setIsDark] = useState(true);

  const API_URL = "http://localhost:3001/users";


  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Ошибка API. Проверь json-server!", error);
      }
    };
    getUsers();
  }, []);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <AppContext.Provider value={{ users, setUsers, isDark, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};