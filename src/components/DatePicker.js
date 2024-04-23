import React from 'react'
import {Button, InputBase, Typography, makeStyles } from '@material-ui/core';
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { People } from '@material-ui/icons';
import {useNavigate} from "react-router-dom";



const selectionRanges = {
    starDate: new Date(2024,4,22),
    endDate: new Date(2024,3,22),
    key: "selection"
}


const DatePicker = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const handleSelect = () => {}

  return (
    <div className={classes.root}>
        <DateRangePicker ranges={[selectionRanges]} 
        onChange={handleSelect}
        />
        <div className={classes.inputSection}>
        <Typography variant="h5">
        Numero de Huespedes    
        </Typography>
        <div className={classes.people}>
            <InputBase placeholder="2pax"
            inputProps={{className: classes.input}}
            
            />
            <People></People> 
        </div>
        <Button onClick={()=> navigate("/search")}>Buscar Habitaciones</Button>
    </div>
    </div>

  )
}


const useStyles = makeStyles((theme) => ({
    root: {
     position: "absolute",
     top: "13vh",
     left: "30vw",
     zIndex: "50",
     [theme.breakpoints.down("sm")]:{
        top: "16vh",
        left: 0
     }
    },
    inputSection: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        "& h5": {
            textAlign: "center"
        },
        "& button:hover": {
            backgroundColor: "rgba(255,103,31,0.4)",
            color: "#fff"
            
        }
    },
    people: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width:"7vw",
        border: "1px solid #ccc",
        margin: theme.spacing(0,2,0,2),
        padding: theme.spacing(1) 
    }
  }));
export default DatePicker