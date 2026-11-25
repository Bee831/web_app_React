import { Link, Outlet } from "react-router-dom"
import "./root.css";

function Main() {
  return (
    <table>
      <tr>
        <th><Link to="/PNG" className="button">convert to PNG.</Link></th>
        <th><Link to="/JPG" className="button">convert to JPG.</Link></th>
        <th><Link to="/WebP" className="button">convert to WebP.</Link></th>
      </tr>
      <tr>
        <th colSpan={3} id="card"><Outlet /></th>
      </tr>
    </table>
  )
}

export default Main
