import { useTypedText } from "../hooks/useTypedText";
import githubIcon from "../images/icons8-github-50.png";
import linkedinIcon from "../images/icons8-linkedin-50.png";
import mailIcon from "../images/icons8-mail-50.png";
import "../styles/main.css";

export default function Home() {
    const typedText = useTypedText([
        "Data Analyst",
    ]);

    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hello, it's me</h3>
                <h1>Dmytro Ruzhytskyi</h1>

                <h3>
                    And I'm a <span>{typedText}</span>
                </h3>
                <p className="home-paragraph">I specialise in analysing large datasets to uncover trends in customer behaviour, product performance, and business growth. In my current and previous roles, I have built interactive dashboards (Power BI, Tableau), automated reporting processes using SQL and Python, and applied analytical techniques such as cohort analysis, funnel analysis, and A/B testing to improve user engagement and business outcomes.</p>
                <div className="social-box">
                    <ul className="social-list">
                        <li className="social-item">
                            <a
                                href="https://github.com/dmitruz"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                            >
                                <img src={githubIcon} alt="github" />
                            </a>
                        </li>
                        <li className="social-item">
                            <a
                                href="https://www.linkedin.com/in/dmitruz/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                            >
                                <img src={linkedinIcon} alt="linkedin" />
                            </a>
                        </li>
                        <li className="social-item">
                            <a
                                href="mailto:dmitruz2@meta.ua"
                                aria-label="Send Email"
                            >
                                <img src={mailIcon} alt="mailicon" />
                            </a>
                        </li>
                    </ul>
                </div>
                <a href="#contact" className="btn">Contact Me</a>
            </div>
        </section>
    );
}
