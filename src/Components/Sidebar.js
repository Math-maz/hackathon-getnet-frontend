import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/styles/images/logo1.png";
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import ContactsIcon from "@material-ui/icons/Contacts";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import StarIcon from "@material-ui/icons/Star";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import SettingsIcon from "@material-ui/icons/Settings";
import MyStyles from "../assets/styles/MyStyles.js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "400px",
    height: "100vh",
    backgroundColor: "white",
    boxShadow: "6px 4px 6px #00000029",
    opacity: "1",
  },
  logo: {
    width: "150px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "88px",
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Montserrat",
    fontSize: "20px",
    marginLeft: "19px",
    width: "227px",
    height: "350px",
  },
  homeButton: {
    marginTop: "10px",
    "& a": {
      width: "100%",
      textDecoration: "none",
      color: MyStyles.colors.secondary,
      "& svg": {
        verticalAlign: "-3px",
        marginRight: "10px",
      },
    },
  },
  buttons: {
    marginTop: "10px",
    "& a": {
      width: "100%",
      textDecoration: "none",
      color: MyStyles.colors.primary,
      "& svg": {
        verticalAlign: "-3px",
        marginRight: "10px",
      },
    },
  },
  singOut: {
    fontFamily: "Montserrat",
    fontSize: "20px",
    marginLeft: "19px",
    marginBottom: "19px",
    "& a": {
      width: "100%",
      textDecoration: "none",
      color: MyStyles.colors.primary,
    },
  },
});

const SideBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <div className={classes.logoContainer}>
          <img
            src={Logo}
            className={classes.logo}
            alt="Duas mãos formando um círculo"
          />
        </div>
        <Divider variant="middle" />
        <div className={classes.menu}>
          <div className={classes.homeButton}>
            <Link to="/dashboard/">
              <HomeIcon />
              Início
            </Link>
          </div>
          <div className={classes.buttons}>
            <Link>
              <ContactsIcon />
              Conversas
            </Link>
          </div>
          <div className={classes.buttons}>
            <Link to="/dashboard/cursos">
              <CastForEducationIcon />
              Cursos
            </Link>
          </div>
          <div className={classes.buttons}>
            <Link>
              <StarIcon />
              Assinatura
            </Link>
          </div>
          <div className={classes.buttons}>
            <Link>
              <ShowChartIcon />
              Seu negócio
            </Link>
          </div>
          <div className={classes.buttons}>
            <Link>
              <SettingsIcon />
              Configurações
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.singOut}>
        <Link>Sair</Link>
      </div>
    </div>
  );
};

export default SideBar;
