import { useTypedText } from "../hooks/useTypedText";

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

                <a href="#contact" className="btn">Contact Me</a>
            </div>
        </section>
    );
}
