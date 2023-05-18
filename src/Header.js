import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { pages } from "./Pages";
export default function Header() {
  return (
    <div className="header">
      <Link to={"/"}>
        <h2>break anchor design</h2>
      </Link>
      {pages.map((item, index) => (
        <Link to={item.path}>{item.title}</Link>
      ))}
    </div>
  );
}
