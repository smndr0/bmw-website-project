import { navLinks } from '../constants';

const navbar = () => {
    return (
        <header>
            <nav>
                <img src="/bmw-logo-png.png" alt="BMW Logo" style={{ width: '70px', height: 'auto', display: 'flex', alignItems: 'center', gap: '12px' }} />

                <ul>
                    {navLinks.map(link => (
                        <li key={link.label}>
                            <a href={`/${link.label.toLowerCase().replace(' ', '-')}`}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <button>
                        <img src="/search.svg" alt="Search" />
                    </button>
                    <button>
                        <img src="/cart.svg" alt="Cart" />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default navbar