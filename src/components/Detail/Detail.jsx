import "./Detail.scss";

export default function Detail({ detail }) {
    return (
        <div className="detail">
            <div className="detail__name">{detail.name}</div>
            <div className="detail__value">{detail.value}</div>
        </div>
    );
}
