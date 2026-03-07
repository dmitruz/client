import { useState } from "react";
import axios from "axios";
import "../styles/main.css";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:5000/api/contact", form);

            alert("Message sent!");

            // clear form
            setForm({
                name: "",
                email: "",
                message: ""
            });

        } catch (error) {
            console.error(error);
            alert("Error sending message");
        }
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me</span></h2>

            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>

                <textarea
                    name="message"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                />

                <button type="submit" className="btn">Send</button>
            </form>
        </section>
    );
}