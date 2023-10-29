import "./App.css";
import Dasboard from "./pages/Dashboard/Dasboard";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Inventory from "./pages/Inventory/Inventory";
import Report from "./pages/Report/Report";
import Login from "./pages/Login/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="login" element={<Login />} />

      <Route path="/" element={<Dasboard />}>
        <Route index element={<Inventory />} />
        <Route path="report" element={<Report />} />
      </Route>

      <Route path="*" element={<Dasboard />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
