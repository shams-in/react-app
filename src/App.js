import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./components/HomeScreen";
import { NotFoundScreen } from "./components/NotFoundScreen";
import { PlacesList } from "./components/PlacesList";
import { ProfileScreen } from "./components/ProfileScreen";
import { Universities } from "./components/Universities";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <br />
          <Link to="/profile">Profile</Link>
          <br />
          <Link to="/places">Places</Link>
        </div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/places" element={<PlacesList />} />
          <Route path="/places/:country" element={<Universities />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
