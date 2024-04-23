import { Button,Typography,makeStyles } from '@material-ui/core'
import bg_image from "../img/hornocal.jpg"
import React from 'react'

const Banner = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <div className={classes.info}>
        <Typography variant="h2"> Busca tu Escapada...</Typography>
        <Button variant="contained">Mira los lugares</Button>
        </div>
        
    </div>
  )
}


const useStyles = makeStyles((theme)=> ({
    root:{
        height: "50vh",
        position: "relative",
        backgroundImage: `url(${bg_image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
    info:{
        backgroundColor: "#000",
        color:"#fff",
        width: "350px",
        padding: theme.spacing(2),
        "& h2":{
            fontWeight: "bold",
            marginBottom: theme.spacing(4)
        }

    }
}))
export default Banner