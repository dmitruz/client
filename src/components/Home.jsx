import { useTypedText } from "../hooks/useTypedText";

export default function Home() {
    const typedText = useTypedText([
        "Data Analyst",
        "Business Analyst",
        "SQL & Python Specialist"
    ]);

    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hello, it's me</h3>
                <h1>Dmytro Ruzhytskyi</h1>

                <h3>
                    And I'm a <span>{typedText}</span>
                </h3>
            </div>
        </section>
    );
}
