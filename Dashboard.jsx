import React, { useState, useEffect } from "react";
import { Table, Form, Container } from "react-bootstrap";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // Dummy user data
  useEffect(() => {
    setUsers([
      { id: 1, name: "Alice Johnson", email: "alice@example.com" },
      { id: 2, name: "Bob Smith", email: "bob@example.com" },
      { id: 3, name: "Charlie Brown", email: "charlie@example.com" }
    ]);
  }, []);

  // Filter users based on search input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <h2 className="text-center">User Dashboard</h2>
      
      {/* Search Input */}
      <Form.Control
        type="text"
        placeholder="Search users..."
        className="mb-3"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* User Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;
