import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="header">
        <div>
          <img
            className="header-img"
            src="https://static.vecteezy.com/system/resources/previews/003/067/861/original/cartoon-happy-smile-face-emoticon-icon-in-flat-style-free-vector.jpg"
            alt=""
          />
        </div>
        <div className="header-details">
          <h1>nathan-vieira</h1>
          <ul className="header-icons">
            <a href="https://github.com/Nathan-Vieira/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                alt=""
              />
            </a>
            <a href="https://www.linkedin.com/in/nathan-vieira/">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
                alt=""
              />
            </a>
            <a href="mailto:c-nathan-c@hotmail.com">
              <img
                src="https://cdn-icons-png.flaticon.com/512/666/666162.png"
                alt=""
              />
            </a>
            {/* <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4922/4922073.png"
                alt=""
              />
            </a> */}
          </ul>
        </div>
      </div>
      <div className="body">
        <div className="body-header">
          <h2>Junior Gamedev / Frontend Developer & Designer</h2>
          <hr style={{ width: "50%" }} />
          <h3>Graduate IT Innovation and Design - Conestoga College</h3>
        </div>
        <div className="body-list">
          <ul>
            <li>Fullstack web development</li>
            <li>Ux Design</li>
            <li>3d Game Development, modelling and animation</li>
            <li>Video editing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Home;
