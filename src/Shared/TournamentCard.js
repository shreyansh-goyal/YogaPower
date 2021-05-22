import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';
import { ButtonBase } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    width:'100%',
    margin:'20px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ContestCard = ({tournamentName}) => {
    const classes = useStyles();
    return(
        <ButtonBase className="login-fields">
            <Card className={classes.root}>
                <CardContent>
                    {tournamentName}
                </CardContent>
                <CardActions>
                <Button size="small" color="primary">
                    View
                </Button>
                <Button size="small" color="primary">
                    Edit
                </Button>
            </CardActions>
            </Card>

        </ButtonBase>
    )
}
export default ContestCard;