import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Profile from "../../Components/Profile";
import SideBar from "../../Components/Sidebar";
import Coursecard from "../../Components/Coursecard";
import ContactsIcon from "@material-ui/icons/Contacts";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { makeStyles } from "@material-ui/styles";
import MyStyles from "../../assets/styles/MyStyles";
import Api from "../../lib/Api";

const mocks = [
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    title: "Como fazer o fluxo de caixa de seu estabelecimento",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    title: "Como fazer o fluxo de caixa de seu estabelecimento",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    title: "Como fazer o fluxo de caixa de seu estabelecimento",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    title: "Como fazer o fluxo de caixa de seu estabelecimento",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    title: "Como fazer o fluxo de caixa de seu estabelecimento",
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    title: "Como fazer o fluxo de caixa de seu estabelecimento",
  },
];

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
  },
  contentArea: {
    width: "-webkit-fill-available",
  },
  content: {
    marginLeft: "30px",
    marginTop: "-30px",
    overflowY: "auto",
    overflowX: "hidden",
  },
  bannerTitle: {
    fontWeight: "lighter",
    color: MyStyles.colors.darks[50],
  },
  courseCardContainer: {
    display: "flex",
    flexDirection: "row",
  },
  moreCourses: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    "& a": {
      width: "100%",
      textDecoration: "none",
      color: MyStyles.colors.primary,
    },
  },
  notificationContainer: {
    background: "white",
    borderRadius: "5px",
    width: "1040px",
    height: "120px",
    marginTop: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    "& svg": {
      display: "flex",
      alignItems: "center",
      color: MyStyles.colors.primary,
      marginRight: "30px",
      height: "40px",
      width: "40px",
    },
  },
  notification: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "200px",
    textAlign: "center",
    color: MyStyles.colors.darks[50],
  },
  counterContainer: {
    width: "1040px",
    marginTop: "15px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  visitsAndCouponsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    background: "white",
    borderRadius: "5px",
    height: "150px",
    width: "400px",
    textAlign: "center",
    color: MyStyles.colors.darks[50],
  },
  bestDayContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    background: "white",
    borderRadius: "5px",
    height: "150px",
    width: "590px",
    color: MyStyles.colors.primary,
  },
  btnsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  btns: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "12px",
    color: "white",
    borderRadius: "20px",
    width: "300px",
  },
});

const Dashboard = () => {
  const classes = useStyles();
  const [storeName, setStoreName] = React.useState("");
  const [clients, setClients] = React.useState(5);
  const [coupons, setCoupons] = React.useState(0);
  const [visits, setVisits] = React.useState(0);

  const getData = () => {
    Api.get("/store/2264e4f3-7a72-4c27-900d-41ce47fbc1ba").then((response) => {
      console.log(response);
      if (response.data.isOk) {
        setStoreName(response.data.name);
        setCoupons(response.data.applyDiscountsCount);
        setVisits(response.data.webCount);
      }
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className={classes.root}>
      <SideBar />
      <div className={classes.contentArea}>
        <Profile />
        <main className={classes.content}>
          <section style={{ marginTop: "15px" }}>
            <h2 className={classes.bannerTitle}>Novidades para</h2>
            <h1
              className={classes.bannerTitle}
              style={{ color: MyStyles.colors.primary }}
            >
              {storeName}
            </h1>
            <div className={classes.courseCardContainer}>
              {mocks.slice(0, 3).map((mock) => (
                <Coursecard imageSource={mock.imageSource} title={mock.title} />
              ))}
              <div className={classes.moreCourses}>
                <Link to="/dashboard/cursos">Ver mais</Link>
              </div>
            </div>
          </section>
          <section style={{ marginTop: "15px" }}>
            <h1 className={classes.bannerTitle}>Lembretes</h1>
            <div className={classes.notificationContainer}>
              <div className={classes.notification}>
                <ContactsIcon />
                <p><span style={{fontWeight: "bold", color: 'black'}}>{clients}</span>{clients === 1? ` cliente está`: ` clientes estão`} esperando sua resposta no chat</p>
              </div>
              <Divider orientation="vertical" flexItem />
              <div className={classes.notification}>
                <LocalOfferIcon />
                <p>
                  Sua loja tem
                  <div>
                    <span style={{ fontWeight: "bold", color: "black" }}>
                      {coupons}
                    </span>
                  </div>
                  {coupons === 1 ? ` cupom disponível` : ` cupons disponíveis`}
                </p>
              </div>
              <Divider orientation="vertical" flexItem />
              <div className={classes.btnsContainer}>
                <Button
                  variant="contained"
                  className={classes.btns}
                  style={{ backgroundColor: MyStyles.colors.secondary }}
                >
                  CRIAR UMA PROMOÇÃO
                </Button>
                <Button
                  variant="contained"
                  className={classes.btns}
                  style={{ backgroundColor: MyStyles.colors.primary }}
                >
                  ENVIAR UMA COBRANÇA
                </Button>
              </div>
            </div>
          </section>
          <section style={{ marginTop: "15px" }}>
            <h1 className={classes.bannerTitle}>Nos últimos 30 dias</h1>
            <div className={classes.counterContainer}>
              <div className={classes.visitsAndCouponsContainer}>
                <div>
                  <div style={{ fontSize: "24px" }}>{visits}</div>
                  <div style={{ color: MyStyles.colors.primary }}>
                    {visits === 1 ? `Visita` : `Visitas`} na sua página
                  </div>
                </div>
                <Divider orientation="vertical" flexItem />
                <div>
                  <div style={{ fontSize: "24px" }}>{coupons}</div>
                  <div style={{ color: MyStyles.colors.primary }}>
                    {coupons === 1 ? `Cupom usado` : `Cupons usados`}
                  </div>
                </div>
              </div>
              <div className={classes.bestDayContainer}>
                <p>O maior número de visitas em sua loja foi:</p>
                <p style={{ color: "black", fontWeight: "bold" }}>
                  Quarta-feira
                </p>
                <p>Que tal adicionar um cupom de desconto este dia?</p>
                <Button
                  variant="contained"
                  className={classes.btns}
                  style={{ backgroundColor: MyStyles.colors.secondary }}
                >
                  CRIAR UMA PROMOÇÃO
                </Button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
