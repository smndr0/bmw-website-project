import { footerLinks } from "../constants/index.js";

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p>More ways to shop: Find an BMW Store or search websites. Or call 11111 2222 7777.</p>
                <img src="/bmw-logo-png.png" alt="BMW logo" style={{ width: '70px', height: 'auto', display: 'flex', alignItems: 'center', gap: '12px' }} />
            </div>

            <hr />

            <div className="links">
                <p>Copyright © 2026 BMW Inc. All rights reserved.</p>

                <ul>
                    {footerLinks.map(({ label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer
