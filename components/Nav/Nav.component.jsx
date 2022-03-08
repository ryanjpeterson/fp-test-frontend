const Nav = () => {
    return (<nav className="nav">
        <div className="nav__content nav__title">
            <a href="#" className="nav__brand">ABC Homes</a>
        </div>

        <div className="nav__content nav__links">
            <ul className="nav__items">
                <li className="nav__item">
                    <a href="#" className="nav__link">Link 1</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">Link 2</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">Link 2</a>
                </li>
            </ul>
        </div>
    </nav>)
}

export default Nav;