import PropTypes from "prop-types";

function Header({...props}){
    const paragraph = <p id="username">{props.userInfos.firstName}</p>
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
Header.propTypes={
    userInfos: PropTypes.object,
    firstName: PropTypes.string,
}
export default Header