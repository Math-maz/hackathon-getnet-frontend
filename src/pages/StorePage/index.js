import React from "react";
import { makeStyles } from "@material-ui/styles";
import MyStyles from "../../assets/styles/MyStyles";
import Navbar from "../../Components/BaseNavbar";
import { Star, LocationOn, Phone } from "@material-ui/icons";
import { Avatar, Paper } from "@material-ui/core";
import HomeContext from "../../lib/context/home/HomeContext";
const useStyles = makeStyles({
  root: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  storeInfoContainer: {
    display: "flex",
    width: "80%",
  },
  storeImage: { width: "100%" },
  imageCarousel: {
    width: "100%",
    minHeight: "550px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  storeInfo: {
    marginLeft: "5%",
    paddingRight: "10%",
  },
  storeName: {
    color: MyStyles.colors.primary,
    fontSize: 24,
    fontWeight: "bold",
  },
  rating: {
    display: "flex",
    alignItems: "center",
  },
  address: { display: "flex", alignItems: "center" },
  icons: { color: MyStyles.colors.primary, fontSize: 16 },
  ownerInfo: {
    display: "flex",
    marginTop: "16px",
    borderBottom: "2px solid #ccc",
    paddingBottom: "16px",
  },
  ownerHistory: { fontSize: 16, marginLeft: "16px" },
  ownerPhoto: {
    width: "56px",
    height: "56px",
    border: "3px solid",
    borderColor: MyStyles.colors.primary,
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: "16px",
  },
  contactButton: {
    padding: "16px 0",
    borderRadius: 8,
    border: "1px solid",
    borderColor: MyStyles.colors.primary,
    color: MyStyles.colors.primary,
    fontWeight: "bold",
    cursor: "pointer",
  },
  couponButton: {
    padding: "16px 0",
    borderRadius: 8,
    marginTop: "8px",
    backgroundColor: MyStyles.colors.secondary,
    color: MyStyles.colors.white,
    cursor: "pointer",
  },
  storeDescription: {
    width: "80%",
    marginTop: "48px",
    padding: "12px 24px 48px 24px",
    marginBottom: "48px",
  },
  description: {
    marginTop: "8px",
  },
  photoStrip: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  miniPhoto: {
    width: "72px",
    cursor: "pointer",
  },
});
// const store = {
//   storeId: "2264e4f3-7a72-4c27-900d-41ce47fbc1ba",
//   name: "Ateliê Dona Bonita",
//   description:
//     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
//   type: "Vestuário",
//   rank: 4.98,
//   webCount: 189,
//   applyDiscountsCount: 43,
//   phoneNumber: "91989347171",
//   andress: "Avenida Romulo Maiorana, 1222",
//   profileImgUrl: "https://source.unsplash.com/random/77x77",
//   profileDescription:
//     "Joana, 24 anos, a dois anos entrou no mundo da moda com seu próprio ateliê, sonha um dia ver suas peças em grandes desfiles de moda no mundo inteiro.",
//   photoImgUrl: "https://source.unsplash.com/random/466x320",
//   productsImgs: [
//     "https://source.unsplash.com/random/450x450",
//     "https://source.unsplash.com/random/450x450",
//     "https://source.unsplash.com/random/450x450",
//   ],
// };
export default function StorePage() {
  const classes = useStyles();
  const { state, actions } = React.useContext(HomeContext);
  const [store, setStore] = React.useState(state.targetStore);
  const [photo, setPhoto] = React.useState(store.productsImgs[0]);

  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <div className={classes.storeInfoContainer}>
          <div className={classes.imageCarousel}>
            <img src={photo} alt="" className={classes.storeImage} />
            <div className={classes.photoStrip}>
              {store.productsImgs.map((photo) => (
                <img
                  src={photo}
                  alt="miniature"
                  className={classes.miniPhoto}
                  onClick={() => setPhoto(photo)}
                />
              ))}
            </div>
          </div>
          <div className={classes.storeInfo}>
            <div className={classes.storeCategory}>{store.type}</div>
            <div className={classes.storeName}>{store.name}</div>
            <div className={classes.rating}>
              <Star className={classes.icons} />
              {store.rank}
            </div>
            <div className={classes.andress}>
              <Phone className={classes.icons} /> {store.phoneNumber}
            </div>
            <div className={classes.andress}>
              <LocationOn className={classes.icons} /> {store.andress}
            </div>
            <div className={classes.ownerInfo}>
              <Avatar
                alt="Owner Info"
                src={store.profileImgUrl}
                className={classes.ownerPhoto}
              />
              <div className={classes.ownerHistory}>
                {store.profileDescription}
              </div>
            </div>
            <div className={classes.buttonContainer}>
              <button className={classes.contactButton}>QUERO COMPRAR</button>
              <button className={classes.couponButton}>
                GARANTIR 15% DE DESCONTO
              </button>
            </div>
          </div>
        </div>
        <Paper className={classes.storeDescription} elevation={4}>
          <h3>Descriçao do estabelecimento</h3>
          <div className={classes.description}>{store.description}</div>
        </Paper>
      </div>
    </>
  );
}
