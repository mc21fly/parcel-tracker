import "./Profile.scss";

export default function Profile() {
    return (
        <div className="profile">
            <div className="profile--left">
                <div className="profile__avatar">JK</div>
                <div className="profile__details">
                    <span className="profile__details--name">Jan Kowalski</span>
                    <span className="profile__details--company">Firma sp. z o.o.</span>
                </div>
            </div>
            <div className="profile--right"></div>
        </div>
    );
}
