import './homepage.css';


const Home = () => {
  return (
    <div className="homepage-container">
      <div className="sidebar">
        <img src="src/assets/gamt.png" alt="Gamt" className="logo" />
      </div>
      <div className="main-content">
        <div className="courses-container">
          <div className="curso">
            <p>CURSO 1</p>
          </div>
          <div className="curso">
            <p>CURSO 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;