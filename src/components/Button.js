import "./Button.css";

function Button({ name, extended, orange, clickButton }) {
    const classList = [
        "panel-button-box",
        extended ? "extended" : "",
        orange ? "orange" : "",
    ];
    return (
        <div className={classList.join(" ").trim()}>
            <button className="panel-button" name={name} onClick={clickButton}>
                {name}
            </button>
        </div>
    );
}

export default Button;
