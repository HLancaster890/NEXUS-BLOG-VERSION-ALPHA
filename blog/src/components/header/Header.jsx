import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://i.postimg.cc/3xxHkpwg/gradient-7258997-1920.png"
        alt=""
      />
    </div>
  );
}
