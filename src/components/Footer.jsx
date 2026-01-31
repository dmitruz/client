export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-text">
                <p>
                    Copyright &copy; {new Date().getFullYear()} by Dmytro Ruzhytskyi | All
                    Rights Reserved.
                </p>
            </div>

            <div className="footer-iconTop">
                <a href="#home">
                    <i className="bx bx-up-arrow-alt"></i>
                </a>
            </div>
        </footer>
    );
}
