import Auth from "./pages/Login";
import { Routes, Route} from "react-router-dom";
import Index from "./pages/Index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="/" index element={<Index />} />
          <Route path="/login-register" element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
