import { STRAPI_UPLOADS } from "../../config";

const Header = ({ header }) => {
    const {title, subtitle, heroImg } = header.attributes;

    const img = heroImg.data.attributes.url;

    const styles = {
        backgroundImage: `url('${img}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
    }

    return <>
        <header className="header" style={styles}>
            <div className="header__content">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </header>
    </>
}

export default Header;