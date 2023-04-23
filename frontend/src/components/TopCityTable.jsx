import React, { useState } from "react";
import styles from "./table.module.css";
import TopCityTableRow from "./TopCityTableRow";

const TopCityTable = ({ cities }) => {

    return (
        <table className={styles.table}>
            <caption>"5. Show the data of top 10 cities which have the highest number of users and their average income."</caption>
            <thead>
                <tr>
                    <th>S. N.</th>
                    <th>City</th>
                    <th>Users Count</th>
                    <th>Average Income</th>
                </tr>
            </thead>
            <tbody>
                {cities?.map((city, idx) => {
                    return <TopCityTableRow key={city._id} sn={idx + 1} city={city} />
                })}
            </tbody>
        </table>
    );
};

export default TopCityTable;
