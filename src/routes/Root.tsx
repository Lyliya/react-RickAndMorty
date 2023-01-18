import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";

export default function Root() {
  return (
    <div id="app">
      <TheNavbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
