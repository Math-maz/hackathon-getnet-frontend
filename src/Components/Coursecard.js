import React from "react";
import { makeStyles } from "@material-ui/styles";
import MyStyles from "../assets/styles/MyStyles";

const useStyles = makeStyles({
  root: {
    width: '330px',
    height: '190px',
    marginTop: '15px',
    position: "relative",
    borderRadius: 20,
    overflow: "hidden",
    marginRight: "25px",
    WebkitBoxShadow: "2px 2px 5px 0px rgba(0,0,0,0.75)",
    cursor: "pointer",
  },
  image: {
    position: "relative",
    zIndex: 0,
    overflow: "hidden",
  },
  course: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    backgroundColor: MyStyles.colors.darks["40"],
    padding: "12px 0",
    color: MyStyles.colors.white,
    overflow: "hidden",
  },
  title: {
    fontSize: 20,
    margin: 'auto 20px'
  },
});
export default function Coursecard({
  imageSource,
  title,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        src={imageSource}
        style={{
          width: '330px',
          height: '190px',
        }}
        alt="Store card"
        className={classes.image}
      />
      <div className={classes.course}>
        <div className={classes.title}>{title}</div>
      </div>
    </div>
  );
}
