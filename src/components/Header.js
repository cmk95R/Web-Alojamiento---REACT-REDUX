import React, { useEffect, useState } from "react";
import logo from "../img/logo cutt.svg";
import {ListItem,List,Drawer,IconButton,Avatar,AppBar, Toolbar, makeStyles,InputBase, Typography } from "@material-ui/core";
import SearchIcons from "@material-ui/icons/Search"
import MenuIcon from "@material-ui/icons/Menu"
import {Link} from "react-router-dom"
const Header = () => {
  const classes = useStyles();
  const [tablet, setTablet] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(()=>{
    const responsiveness = () => window.innerWidth < 900 ? setTablet(true) : setTablet(false)
    responsiveness();
    window.addEventListener("resize",()=> responsiveness())

  },[])






  const displayTablet = () => {


    const handlerDrawerOpen = () => {
        setDrawerOpen(true);
    }

    const handlerDrawerClose = () => {
        setDrawerOpen(false);
    }

    const headerData = ["Mi Cuenta","Lugares Turisticos","Ubicacion","Reseñas","Fotos","Log Out"]
    const getDrawnerChoices = () => {
        return headerData.map((data) =>{
            return(
                <List>
                    <ListItem>{data}</ListItem>
                </List>
            )
        })
    }


    return(
        <Toolbar className={classes.toolbar}>
          
        <IconButton {...{
            edge: "start", 
            color: "#ccc",
            "aria-label" : "menu",
            "aria-haspopup": "true",
            onClick: handlerDrawerOpen,
    }}>
        <MenuIcon fontSize="large"/>
        </IconButton>
        <Drawer 
        {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handlerDrawerClose,
        }}>
            <div>{getDrawnerChoices()}</div>

        </Drawer>
        <Link to="/">
        <img src={logo} alt="LogoHeader" className={classes.logo} />
        </Link>
        
        <div className={classes.rigth}>
            <Typography>
                Login
            </Typography>
            <Avatar className={classes.Avatar}/>
        </div>

    </Toolbar>
    )

  }







  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <Link to="/" >
        <img src={logo} alt="LogoHeader" className={classes.logo} />
        </Link>
        <div className={classes.center}>
        <InputBase fullWidth placeholder = "Search Here..." inputProps={{className: classes.input}}/>
        <SearchIcons/>    
        </div>
        <div className={classes.rigth}>
            <Typography>
                Login
            </Typography>
            <Avatar className={classes.Avatar}/>
        </div>
      </Toolbar>
    );
  };

  return <AppBar className={classes.root}>
    {
    tablet ? displayTablet() : displayDesktop()
    }
    </AppBar>;
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    backgroundColor : "#fff",
    zIndex: 99,
    width: "100vw",

  },  
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: "30px",
    margin: theme.spacing(1, 0, 0, 2),
    objectFit: "contain",
  },
  center: {
    display: "flex",
    alignItems: "center",
    border: "1px solid lightgray",
    borderRadius:"9px",
    minWidth: "300px",
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  },
  input: {
    fontSize: "1,2rem",
    padding: theme.spacing(1,5,1,5)
  },
  rigth: {
    color: "#333",
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(2)
  },
  Avatar: {
    marginLeft:theme.spacing(2)
  }
  
}));

export default Header;
