import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper } from "@mui/material";
import Button from '@mui/material/Button';
import PersonAddAlt from "@mui/icons-material/PersonAddAlt";
import Swal from 'sweetalert2';
import { useNavigate} from 'react-router-dom';

export default function Student() {
    const navigate = useNavigate();

    const paperStyle= {
        padding: '50px 20px', width: 600, margin: '20px auto'
    }
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const handleClick=(e)=>{
        e.preventDefault();

        const student = {name,address}

        fetch('http://localhost:8080/student/add', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(student)
        }).then (()=>{
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Student register with success!',
                showConfirmButton: false,
                timer: 1500
              })
              navigate('/students');
        })
        .catch(() => {
            alert(
              'An error occurred while registering the student! Contact your system administrator.'
            );
          });
    }

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{color: 'blue'}}>Add Student</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Student Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Student Address"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            variant="outlined"
            fullWidth
          />
           <Button variant="contained" endIcon={<PersonAddAlt />} onClick={handleClick}>
        Register Student
      </Button>
        </Box>
      </Paper>
    </Container>
  );
}
