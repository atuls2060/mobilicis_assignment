import React, { useState } from "react";
import styles from "./table.module.css";
import TableRow from "./TableRow";

const Table = ({ users, captionIdx }) => {
    const [captionList, setCaptionList] = useState(["1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.",
        "2. Male Users which have phone price greater than 10,000.",
        "3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.",
        "4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.",
        "5. Show the data of top 10 cities which have the highest number of users and their average income."]);

    return (
        <table className={styles.table}>
            <caption>{captionList[captionIdx - 1]}</caption>
            <thead>
                <tr>
                    <th>S. N.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Car</th>
                    <th>Phone Price</th>
                    <th>Quote</th>
                    <th>Income</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {users?.map((user, idx) => {
                    return <TableRow key={user._id} sn={idx + 1} user={user} />
                })}
            </tbody>
        </table>
    );
};

export default Table;
