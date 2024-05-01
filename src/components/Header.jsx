function Header({...props}){
    const paragraph = <p id="username" firstname={props.userInfos.firstName}></p>
    return (
    <header>
        <div className="greeting-container" >
            <h1 className="greeting"><span><p>Bonjour</p>{ paragraph }</span></h1>
            <div id="congratulation" className="congratulation">
                <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
            </div>
        </div>
    </header>
    )
}

export default Header