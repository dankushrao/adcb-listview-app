import {
    MDBTableBody
} from "mdb-react-ui-kit";

export default function TableRows({ rowItem, rowIndex }) {
    return (

        <MDBTableBody key={rowIndex}>
            <tr style={{ backgroundColor: rowIndex % 2 === 0 ? "#f2f2f2" : "#ffffff" }}>
                <th scope='row'>{rowIndex + 1}</th>
                <td>{rowItem.name}</td>
                <td>{rowItem.email}</td>
                <td>{rowItem.phone}</td>
                <td>{rowItem.address}</td>
                <td>{rowItem.id}</td>
                <td>{rowItem.status}</td>
            </tr>
        </MDBTableBody>
    );
}