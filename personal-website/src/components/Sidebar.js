import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-nav-links-top">
        <li><a href="link-to-resume.pdf" download>Download Resume</a></li>
      </ul>
      <ul className="sidebar-nav-links-bottom">
        <li><a href="https://www.linkedin.com/in/sathi-r-24951a98/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
    </div>
  );
}

export {Sidebar};
