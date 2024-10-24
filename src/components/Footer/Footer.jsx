import s from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={s.footer}>
            <a href="#" className={s.link}>Banda-X</a>
            <p className={s.text}>Copyright 2024</p>
        </footer>
    )
}

export default Footer;