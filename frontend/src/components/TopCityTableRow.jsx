import React from 'react'

const TopCityTableRow = ({ sn, city }) => {
    return (
        <tr>
            <td>{sn}</td>
            <td>{city.city}</td>
            <td>{city.users_count}</td>
            <td>{city.average_income && city.average_income.toFixed(2)}</td>
        </tr>
    )
}

export default TopCityTableRow