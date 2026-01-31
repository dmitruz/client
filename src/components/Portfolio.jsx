import { projects } from "../data/projects";

export default function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading">
                Data <span>Projects</span>
            </h2>

            <div className="portfolio-container">
                {projects.map((project, index) => (
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
