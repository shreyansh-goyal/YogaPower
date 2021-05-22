import React from 'react';
import AdminHeader from './Header';
import { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
const AddContest = ({ history }) => {
    const [teams, setTeams] = useState(["teamA", "teamB", "teamC", "teamD"]);
    const [rounds, setRounds] = useState([{ id: 1, participant: 1 }, { id: 2, participant: 2 }, { id: 3, participant: 3 }, { id: 4, participant: 4 }]);
    const [role, setRole] = useState("Instructor");
    return (
        <div>
            <AdminHeader />
            <div>
            <FormControl variant="filled">
                <InputLabel htmlFor="filled-age-native-simple">Team A</InputLabel>
                <Select 
                // value={role}
                // onChange={(e)=>{setRole(e.target.value)}}
                inputProps={{
                    name: 'age',
                    id: 'filled-age-native-simple',
                }}
                >
                <option aria-label="None" value="" />
                <option value="Instructor">Instructor</option>
                <option value="Admin">Admin</option>
                </Select>
            </FormControl>
            <FormControl variant="filled">
                <InputLabel htmlFor="filled-age-native-simple">Team B</InputLabel>
                <Select 
                // value={role}
                // onChange={(e)=>{setRole(e.target.value)}}
                inputProps={{
                    name: 'age',
                    id: 'filled-age-native-simple',
                }}
                >
                <option aria-label="None" value="" />
                </Select>
            </FormControl> 
            </div>
        </div>
    )
}

export default AddContest;