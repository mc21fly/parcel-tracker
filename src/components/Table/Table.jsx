import "./Table.scss";

const dictionary = {
    id: "ID",
    recipient: "Odbiorca",
    address: "Adres",
    city: "Miasto",
    postal_code: "Kod pocztowy",
    status: "Status",
    package_number: "Numer paczki",
    crate_id: "Numer skrzyni",
};

export default function Table({ values }) {
    return (
        <table className="table">
            <tbody>
                <tr className="table__row">
                    {Object.keys(values[0]).map((key, index) => {
                        return (
                            <th key={index} className="table__row__header">
                                {dictionary[key] ? dictionary[key] : "NULL"}
                            </th>
                        );
                    })}
                </tr>
                {values.map((value, index) => {
                    const keys = Object.keys(value);

                    return (
                        <tr key={index} className="table__row" onClick={() => console.log(value)}>
                            {keys.map((key, index) => {
                                return (
                                    <td key={index} className="table__row__cell">
                                        {value[key]}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
