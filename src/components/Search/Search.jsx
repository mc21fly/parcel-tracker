import "./Search.scss";

export default function Search() {
    return (
        <form className="search-bar">
            <label className="search-bar__icon"></label>
            <input className="search-bar__field" type="text" placeholder="Wyszukaj przesyłkę, odbiorcę, urządzenie lub skrzynię..." />
        </form>
    );
}
