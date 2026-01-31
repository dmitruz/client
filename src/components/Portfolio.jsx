import { powerBiProjects } from "../data/powerBiProjects";
import { pythonProjects } from "../data/pythonProjects";
import { sqlProjects } from "../data/sqlProjects";


export default function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading">
                Python <span>Projects</span>
            </h2>

            <div className="portfolio-container">
                {pythonProjects.map((project, index) => (
                    <div className="portfolio-box" key={index}>
                        <img src={project.image} alt={project.title} />
                        <div className="portfolio-layer">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank">
                                <i className="bx bx-link-external"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="heading">
                SQL <span>Projects</span>
            </h2>

            <div className="portfolio-container">
                {sqlProjects.map((project, index) => (
                    <div className="portfolio-box" key={index}>
                        <img src={project.image} alt={project.title} />
                        <div className="portfolio-layer">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank">
                                <i className="bx bx-link-external"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="heading">
                PowerBI <span>Projects</span>
            </h2>

            <div className="portfolio-container">
                {powerBiProjects.map((project, index) => (
                    <div className="portfolio-box" key={index}>
                        <img src={project.image} alt={project.title} />
                        <div className="portfolio-layer">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank">
                                <i className="bx bx-link-external"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
