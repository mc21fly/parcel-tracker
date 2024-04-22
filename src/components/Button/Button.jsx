import "./Button.scss";

export default function Button({ name, icon, color }) {
    return <a className={`button button__icon--${icon} ${color ? `button--color-${color}` : ""}`}>{name}</a>;
}
