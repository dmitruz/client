import Typed from "react-typed";

export default function Home() {
    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hello, it's me</h3>
                <h1>Dmytro Ruzhytskyi</h1>

                <h3>
                    And I'm a{" "}
                    <span>
                        <Typed
                            strings={[
                                "Data Analyst",
                                "Business Analyst",
                                "SQL & Python Specialist"
                            ]}
                            typeSpeed={80}
                            backSpeed={50}
                            loop
                        />
                    </span>
                </h3>

                <p>
                    Data Analyst with experience in SQL, Python, Pandas, data visualization,
                    and business insights. I work with real datasets, build dashboards,
                    and translate data into actionable decisions.
                </p>
            </div>

            <div className="home-img">
                <img src="/img/me.jpg" alt="profile" />
            </div>
        </section>
    );
}
