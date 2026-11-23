import { Link, Outlet } from "react-router-dom"

function Main() {
  return (
    <>
      <h1>main page</h1>
      <table>
        <ul>
          <li><Link to="/PNG">convert to PNG.</Link></li>
          <li><Link to="/JPG">convert to JPG.</Link></li>
          <li><Link to="/WebP">convert to WebP.</Link></li>
        </ul>
      </table>
      <br />
      <Outlet />
    </>
  )
}

export default Main
