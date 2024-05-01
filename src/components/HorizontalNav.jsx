function HorizontalNav(){
    return (
    <nav className="horizontal">
        <ul className="nav-list">
            <li className="nav-list-items">
                <div className="logo-nav">
                    <img src="/logo.svg" alt="logo sportsee" />
                </div>
            </li>
            <li className="nav-list-items">
                <div className="title-nav">
                    <h3>Accueil</h3>
                </div>
            </li>
            <li className="nav-list-items">
                <div className="title-nav">
                    <h3>Profil</h3>
                </div>
            </li>
            <li className="nav-list-items">
                <div className="title-nav">
                    <h3>Réglages</h3>
                </div>
            </li>
            <li className="nav-list-items">
                <div className="title-nav">
                    <h3>Communauté</h3>
                </div>
            </li>
        </ul>
    </nav>
    )
}

export default HorizontalNav