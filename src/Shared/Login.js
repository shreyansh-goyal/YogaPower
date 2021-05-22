import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import {useState} from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const Login = ({history}) => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [role,setRole]=useState("Instructor");

    const submit=()=>{
        if(role==='Instructor'){
            history.push("/instructor");
            // axios.post("some_url")
            // .then(res=>{
                
            // })
            // .catch(err=>{

            // })
        }
        else{
            // axios.post("some_url")
            // .then(res=>{

            // })
            // .catch(err=>{

            // })
        }
    }
    return(
        <div className="login-card">
            <Container fixed>
                    <TextField className="login-fields" value={username} id="username" onChange={(e)=>{setUsername(e.target.value)}} label="username" variant="filled" />
                    <TextField className="login-fields" type="password" value={password} id="password"  onChange={(e)=>{setPassword(e.target.value)}} label="password" variant="filled" />   
                    <FormControl className="login-fields" variant="filled">
                        <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
                        <Select
                        native
                        value={role}
                        onChange={(e)=>{setRole(e.target.value)}}
                        inputProps={{
                            name: 'age',
                            id: 'filled-age-native-simple',
                        }}
                        >
                        <option value="Instructor">Instructor</option>
                        <option value="Admin">Admin</option>
                        </Select>
                    </FormControl> 
                    <Button onClick={submit} variant="contained" color="primary">
                            Submit
                    </Button>          
            </Container>
        </div>
    )
}
export default Login;