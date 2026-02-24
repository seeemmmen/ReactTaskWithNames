import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext, AppProvider } from "./context/AppContext";
import { SearchPerson } from "./companent/SearchPerson";
import { UserDetail } from "./companent/UserDetail";
import "./App.css";
import { useContext } from "react";




const ThemeWrapper = ({children}) =>{
  const {isDark} = useContext(AppContext); 

  return (
    <div className={`app-container ${isDark ? "dark" : "light"}`}>
      {children}
    </div>
  );
}
function App() {
  return (
    <AppProvider>
    <ThemeWrapper>
         <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPerson />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeWrapper>
    </AppProvider>
  );
}

export default App;