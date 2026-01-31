import { useState } from "react";
import axios from "axios";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/contact", form);
        alert("Message sent!");
    };

    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me</span></h2>

            <form onSubmit={handleSubmit}>
                <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
                <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
                <textarea placeholder="Message" onChange={e => setForm({ ...form, message: e.target.value })} />
                <button className="btn">Send</button>
            </form>
        </section>
    );
}
