import "./ButtonPanel.css";
import Button from "./Button";

function Panel() {
    return (
        <section className="panel">
            <article>
                <Button name="AC" />
                <Button name="+/-" />
                <Button name="%" />
                <Button name="÷" orange />
            </article>
            <article>
                <Button name="7" />
                <Button name="8" />
                <Button name="9" />
                <Button name="x" orange />
            </article>
            <article>
                <Button name="4" />
                <Button name="5" />
                <Button name="6" />
                <Button name="-" orange />
            </article>
            <article>
                <Button name="1" />
                <Button name="2" />
                <Button name="3" />
                <Button name="+" orange />
            </article>
            <article>
                <Button name="0" extended />
                <Button name="." />
                <Button name="=" orange />
            </article>
        </section>
    );
}

export default Panel;
