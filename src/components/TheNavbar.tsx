import { Link } from "react-router-dom";

export default function TheNavbar() {
  return (
    <div className="flex gap-4 w-full justify-center">
      <Link to={"/characters"}>Characters</Link>
      <Link to={"/episodes"}>Episodes</Link>
    </div>
  );
}
