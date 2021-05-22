import React from 'react';
import AdminHeader from './Header';
import { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
const AddContest = ({ history }) => {
    const [name,setName]=useState("");
    const submit=()=>{
        history.push("admin/main")
    }
    return (
        <div>
            <TextField id="filled-basic" onChange={(e)=>{setName(e.target.value)}} label="Name" variant="filled" />
            <Button onClick={()=>{submit}} variant="contained" color="primary">
                Submit
            </Button>
        </div>
    )
}

export default AddContest;