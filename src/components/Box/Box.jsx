import "./Box.scss";

export default function Box({ header, children }) {
    return (
        <div className="box">
            <div className="box__header">{header}</div>
            <div className="box__main">{children}</div>
        </div>
    );
}
