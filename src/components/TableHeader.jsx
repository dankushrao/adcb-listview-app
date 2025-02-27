import {
    MDBTableHead
} from "mdb-react-ui-kit";

export default function TableHeader() {
    return (

        <MDBTableHead dark>
            <tr>
                <th>no</th>
                <th>name</th>
                <th>email</th>
                <th>phone</th>
                <th>address</th>
                <th>id</th>
                <th>status</th>
            </tr>
        </MDBTableHead>
    );
}