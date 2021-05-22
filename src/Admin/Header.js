import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
const AdminHeader = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Tournaments
                    </Typography>
                    <FormControl variant="filled">
                        <InputLabel htmlFor="filled-age-native-simple">Round</InputLabel>
                        <Select
                            native
                            // value={role}
                            // onChange={(e)=>{setRole(e.target.value)}}
                            inputProps={{
                                name: 'age',
                                id: 'filled-age-native-simple',
                            }}
                        >
                            <option value="Round 1">Round 1</option>
                            <option value="Round 2">Round 2</option>
                        </Select>
                    </FormControl>
                    <Button color="inherit">Add Tournament</Button>
                </Toolbar>
            </AppBar>
        </div>

    )
}

export default AdminHeader;