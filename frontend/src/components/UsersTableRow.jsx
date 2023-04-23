import React from 'react'

const UsersTableRow = ({ sn, user }) => {
    return (
        <tr>
            <td>{sn}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.car}</td>
            <td>{user.phone_price}</td>
            <td>{user.quote}</td>
            <td>{user.income}</td>
            <td>{user.city}</td>
        </tr>
    )
}

export default UsersTableRow