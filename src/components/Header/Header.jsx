import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <a href="#" className={s.logo}>Banda-X</a>
            <nav className={s.nav}><a href="#" className={s.link}>Contacts</a><a href="#" className={s.link}>Work Together</a><a href="#" className={s.link}>Loyd Jefferson!</a></nav>
        </header>
    )
}

export default Header;