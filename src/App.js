import './App.css';
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBModalBody
} from "mdb-react-ui-kit";
import SortBy from './components/SortBy.jsx';
import FilterBy from './components/FilterBy.jsx';
import Form from './components/Form.jsx';

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      fetchMoreData();
    }
  };

  const fetchMoreData = () => {
    console.log("Fetching more data...");
    loadUserData();
  };

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    return await axios
      .get(`http://localhost:5000/users`)
      .then((response) => {
        setData((prevUsers) => [...prevUsers, ...response.data]);
      })
      .catch((err) => console.log(err));
  }

  const handleReset = async (e) => {
    setData([]);
    setValue("");
    setSortValue("");
    loadUserData();
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const filterredData = [...data].filter(item =>
      item.name?.toString().toLowerCase().includes(value.toLowerCase())
    );
    setData(filterredData);
  };

  const updateSortValue = async (e) => {
    handleReset();
    let key = e.target.value;
    setSortValue(key);
    const sortedData = [...data].sort((a, b) => a[key].localeCompare(b[key]));
    setData(sortedData);
  };

  const handleFilter = async (value) => {
    handleReset();
    const filterredData = [...data].filter(item =>
      item.status?.toString().includes(value)
    );
    setData(filterredData);
  };

  return (
    <MDBContainer>
      <Form handleSearch={handleSearch} setValue={setValue} handleReset={handleReset} value={value}></Form>
      <div style={{ marginTop: "10px" }}>
        <h2 className='text-center'>search, filter, sort and pagination using JSON fake rest API</h2>
        <MDBContainer className="scroll-container"
          ref={containerRef}
          onScroll={handleScroll}>
          <MDBRow>
            <MDBCol size="12px">
              <MDBTable>
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
                {data.length === 0 ? (
                  <MDBModalBody className='align-center mb-0'>
                    <tr>
                      <td colSpan={8} className='text center mb-0'> No data Found!! </td>
                    </tr>
                  </MDBModalBody>
                ) : (
                  data.map((item, index) =>
                  (
                    <MDBTableBody key={index}>
                      <tr>
                        <th scope='row'>{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.address}</td>
                        <td>{item.id}</td>
                        <td>{item.status}</td>
                      </tr>
                    </MDBTableBody>
                  ))
                )}
              </MDBTable>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBRow>
        <SortBy sortVal={sortValue} sortFunction={updateSortValue}></SortBy>
        <FilterBy filterFunction={handleFilter}></FilterBy>
      </MDBRow>
    </MDBContainer>
  )
}

export default App;
