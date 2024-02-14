import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://i.postimg.cc/bNq75bkK/T-5433-1-2.jpg"
          alt=""
        />
        <p>
          Hello im Hemachandhar.N
          <br/>
        I am a dedicated and driven individual passionate about programming and designing. I bring a unique blend of skills and perspectives to every endeavor. My journey in (B.E/ECE) has been marked by a relentless pursuit of excellence and a commitment to continuous growth and learning. Whether I'm intrest in solving complex problems, creating innovative solutions, etc., I approach each challenge with enthusiasm and determination. Outside of my professional pursuits, I enjoy  gaming, research, reading, photography, etc., which helps to fuel my creativity and recharge my spirit. I am excited to embark on new opportunities and collaborations, and eager to make meaningful contributions and create lasting impact.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
