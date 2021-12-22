import './Header.scss';

const Header = () => {
    const subscribeUser = () => {
        console.log('Thank you for subscribing!');

        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // add functionality later
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    };

    return (
        <header>
            <div className='logo'>
                <h1>Solution</h1>
            </div>

            <nav className='links'>
                <ul>
                    <li>
                        <a href=''>
                            Our mission
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            Who we help
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            Get involved
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

            <div className='nav-buttons'>
                <button
                    onClick={() => subscribeUser}
                >
                    Subscribe
                </button>
            </div>
        </header>
    );
};

export default Header;
