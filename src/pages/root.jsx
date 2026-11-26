import { Link, Outlet } from "react-router-dom"
import "./root.css";

function Main() {
  return (
    <table>
      <tr>
        <th colSpan={3}>
          <h1 className="converter-title">CONVERTER</h1>
        </th>
      </tr>
      <tr>
        <th><Link to="/PNG" className="button">convert to PNG.</Link></th>
        <th><Link to="/JPG" className="button">convert to JPG.</Link></th>
        <th><Link to="/WebP" className="button">convert to WebP.</Link></th>
      </tr>
      <tr>
        <th colSpan={3} id="card"><Outlet /></th>
      </tr>
      <tr>
        <th colSpan={3}>
          <p className="footer-credits">
            <a
              href="https://github.com/Bee831/web_app_React"
              target="_blank"
              rel="noopener noreferrer"
              className="credit-link"
            >
              by @bee832 &amp; @tabesum
            </a>
          </p>
        </th>
      </tr>
    </table>
  )
}

export default Main
