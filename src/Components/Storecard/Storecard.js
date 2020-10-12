import React from "react";
import { makeStyles } from "@material-ui/styles";
import MyStyles from "../../assets/styles/MyStyles";
import { Star } from "@material-ui/icons";
const useStyles = makeStyles({
  root: {
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
    marginRight: "25px",
    WebkitBoxShadow: "2px 2px 5px 0px rgba(0,0,0,0.75)",
    cursor: "pointer",
    marginBottom: "5px",
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
  secondaryBottomBar: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: MyStyles.colors.white,
    padding: "4px 8px",
  },
  category: {
    color: MyStyles.colors.primary,
    fontSize: 14,
    fontWeight: "bold",
  },
  bottomRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "4px",
  },
  rating: { fontSize: 14, display: "flex", alignItems: "center" },
});
export default function Storecard({
  imageSource,
  discountValue,
  storeName,
  storeCategory,
  width,
  height,
  type,
}) {
  const classes = useStyles();
  const getBottomTab = () => {
    if (type === "primary") {
      return (
        discountValue && (
          <div className={classes.discount}>
            <div className={classes.title}>{storeName}</div>

            <div className={classes.discountValue}>
              {discountValue}% de desconto
            </div>
          </div>
        )
      );
    } else {
      return (
        <div className={classes.secondaryBottomBar}>
          <div className={classes.title}>{storeName}</div>
          <div className={classes.category}>{storeCategory}</div>
          <div className={classes.bottomRow}>
            <div className={classes.rating}>
              <Star
                style={{
                  fontSize: 14,
                  color: MyStyles.colors.primary,
                  marginRight: "4px",
                }}
              />
              4.98
            </div>
            {discountValue ? (
              <div
                className={classes.discountValue}
                style={{ color: MyStyles.colors.secondary, fontWeight: "bold" }}
              >
                {discountValue}% de desconto
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <div className={classes.root} style={{ minWidth: width }}>
      <img
        src={imageSource}
        style={{ width: width }}
        alt="Store card"
        className={classes.image}
      />
      {getBottomTab()}
    </div>
  );
}
