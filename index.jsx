import { useEffect, useState } from "react";
import "./index.css";
import image from "../../assets/proj-images/image-1.jpeg";
function HomePage() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await fetch("http://localhost:3000/projects")
        .then((data) => data.json())
        .then((data) => setProjects(data));
    }
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="about">
        <h1>Hello I am Elvin Aliyev</h1>
        <p>
          Below you can see my projects:
        </p>
      </div>
      <h2>My Projects:</h2>
      <div className="cards">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <div className="card-image">
              <img src={image} alt="proj-image" />
            </div>
            <div className="card-content">
              <a href={project.name} target="_blank" rel="noreferrer">{project.name}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
