import "./Sidebar.css";
import pdf from "../resume.pdf";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-nav-links-top">
        <li><a href={pdf} download="sathi_resume.pdf">Download Resume</a></li>
      </ul>
      <ul className="sidebar-nav-links-bottom">
        <li><a href="https://www.linkedin.com/in/sathi-r-24951a98/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
    </div>
  );
}

export {Sidebar};
