import { React, useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const columns = [
  { id: "1", label: "ID", minWidth: 60 },
  { id: "name", label: "Name", minWidth: 100 },
  { id: "address", label: "ADDRESS", minWidth: 100 },
];

const ListStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/student/allStudents")
      .then((response) => response.json())
      .then((result) => {
        setStudents(result);
      })
      .catch(() => alert("There was a problem fetching the data!"));
  }, []);

  return (
    <div className="pg-container">
      <div className="secao">
        <section className="secao-students">
          <h1>List Students</h1>
          <Paper elevation={3} className="secao tabela">
            <TableContainer sx={{ maxHeight: 600 }}>
              <Table
                stickHeader
                aria-label="sticky table"
                sx={{
                  color: "#4A5926",
                  fontFamily: "Exo",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                }}
              >
                <TableHead sx={{ bg: "backgroud.extra" }}>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        sx={{
                          minWidth: column.minWidth,
                          fontFamily: "Exo",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          color: "#025",
                        }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody sx={{ maxHeight: 600, color: "#025" }}>
                  {students.map(({ id, name, address }) => {
                    return (
                      <TableRow key={id} hover role="checkbox" tabIndex={-1}>
                        <TableCell
                          style={{
                            color: "#025",
                            fontFamily: "Exo",
                            fontSize: "0.8rem",
                            fontWeight: "bold",
                          }}
                        >
                          {id}
                        </TableCell>
                        <TableCell
                          style={{
                            color: "#025",
                            fontFamily: "Exo",
                            fontSize: "0.8rem",
                            fontWeight: "bold",
                          }}
                        >
                          {name}
                        </TableCell>
                        <TableCell
                          style={{
                            color: "#025",
                            fontFamily: "Exo",
                            fontSize: "0.8rem",
                            fontWeight: "bold",
                          }}
                        >
                          {address}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </section>
      </div>
    </div>
  );
};

export default ListStudents;
