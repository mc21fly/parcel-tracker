import { Route, Routes } from "react-router-dom";
import "./Main.scss";
import Search from "../Search/Search";
import Button from "../Button/Button";
import Box from "../Box/Box";
import Table from "../Table/Table";
import Detail from "../Detail/Detail";
import { useState } from "react";

const packages = [
    {
        id: 3467,
        recipient: "Jan Kowalski",
        address: "ul. Mickiewicza 12",
        city: "Kraków",
        postal_code: "31-122",
        status: 3,
        package_number: 8721630945,
        crate_id: 9325786109,
    },
    {
        id: 8721,
        recipient: "Alicja Nowak",
        address: "ul. Piłsudskiego 34",
        city: "Wrocław",
        postal_code: "50-015",
        status: 2,
        package_number: 5612380974,
        crate_id: 9712453890,
    },
    {
        id: 5412,
        recipient: "Michał Wiśniewski",
        address: "ul. Sienkiewicza 56",
        city: "Łódź",
        postal_code: "20-004",
        status: 4,
        package_number: 2498701536,
        crate_id: 9246710358,
    },
    {
        id: 1985,
        recipient: "Emilia Dąbrowska",
        address: "ul. Chopina 78",
        city: "Warszawa",
        postal_code: "03-984",
        status: 1,
        package_number: 7148592036,
        crate_id: 9932154078,
    },
    {
        id: 6324,
        recipient: "Dawid Lewandowski",
        address: "ul. Długa 90",
        city: "Poznań",
        postal_code: "61-249",
        status: 5,
        package_number: 6398740512,
        crate_id: 9856712043,
    },
    {
        id: 4079,
        recipient: "Sara Wójcik",
        address: "ul. Jagiellońska 123",
        city: "Kraków",
        postal_code: "33-100",
        status: 3,
        package_number: 5629478013,
        crate_id: 9786052134,
    },
    {
        id: 5738,
        recipient: "Jakub Kamiński",
        address: "ul. Kościuszki 45",
        city: "Gdańsk",
        postal_code: "54-321",
        status: 2,
        package_number: 9203748651,
        crate_id: 9876410235,
    },
    {
        id: 2496,
        recipient: "Karolina Jankowska",
        address: "ul. Wyszyńskiego 67",
        city: "Szczecin",
        postal_code: "02-345",
        status: 4,
        package_number: 4758139246,
        crate_id: 9346512780,
    },
    {
        id: 7183,
        recipient: "Andrzej Nowakowski",
        address: "ul. Sobieskiego 89",
        city: "Katowice",
        postal_code: "15-876",
        status: 1,
        package_number: 6280947135,
        crate_id: 9817230456,
    },
    {
        id: 9356,
        recipient: "Oliwia Woźniak",
        address: "ul. Leśna 101",
        city: "Łódź",
        postal_code: "40-999",
        status: 5,
        package_number: 3589124670,
        crate_id: 9327461085,
    },
];

export default function Main() {
    const [headers] = useState(["ID", "Odbiorca", "Adres", "Miasto", "Kod pocztowy", "Status", "Numer przesyłki", "Numer skrzyni"]);
    const [details, setDetails] = useState([]);

    return (
        <div className="main">
            <header className="main__header">
                <Search />
                <Button name="Dodaj przesyłkę" icon="plus" color="lightblue" />
            </header>
            <div className="main__wrapper">
                <Routes>
                    <Route
                        path="*"
                        element={
                            <Box header="Przesyłki">
                                <Table headers={headers} values={packages} />
                            </Box>
                        }
                    />
                </Routes>
                <div className="main__wrapper__details">
                    <Box header="Informacje o przesyłce">
                        {details.map((detail, index) => (
                            <Detail key={index} detail={detail} />
                        ))}
                    </Box>
                    <Box header="Informacje o odbiorcy">ted</Box>
                </div>
            </div>
        </div>
    );
}
