import React from "react";
import { makeStyles } from "@material-ui/styles";
import MyStyles from "../../assets/styles/MyStyles";
const useStyles = makeStyles({
  root: {
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
  discount: {
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
    fontWeight: "bold",
    fontSize: 20,
  },
  discountValue: {
    fontSize: 14,
  },
});
export default function Storecard({
  imageSource,
  discountValue,
  storeName,
  width,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ minWidth: width }}>
      <img
        src={imageSource}
        style={{ width: width }}
        alt="Store card"
        className={classes.image}
      />
      {discountValue && (
        <div className={classes.discount}>
          <div className={classes.title}>{storeName}</div>
          <div className={classes.discountValue}>
            {discountValue}% de desconto
          </div>
        </div>
      )}
    </div>
  );
}
