import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Profile from '../../Components/Profile';
import SideBar from '../../Components/Sidebar';
import Coursecard from '../../Components/Coursecard';
import ContactsIcon from '@material-ui/icons/Contacts';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { makeStyles } from "@material-ui/styles";
import MyStyles from '../../assets/styles/MyStyles';

const clients = 5;
const coupons = 15;
const visits = 2;

const mocks = [
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    title: "Como fazer o fluxo de caixa de seu estabelecimento"
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    title: "Como fazer o fluxo de caixa de seu estabelecimento"
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    title: "Como fazer o fluxo de caixa de seu estabelecimento"
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    title: "Como fazer o fluxo de caixa de seu estabelecimento"
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    title: "Como fazer o fluxo de caixa de seu estabelecimento"
  },
  {
    imageSource: "https://www.w3schools.com/css/paris.jpg",
    title: "Como fazer o fluxo de caixa de seu estabelecimento"
  }      
];

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  contentArea: {
    // display: 'flex',
    // flexDirection: 'column',
    width: '-webkit-fill-available',
  },
  content: {
    marginLeft: '30px',
    marginTop: '-30px'
  },
  bannerTitle: {
    fontWeight: 'lighter',
    color: MyStyles.colors.darks[50]
  },
  courseCardContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  moreCourses: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    '& a': {
      width: '100%',
      textDecoration: 'none',
      color: MyStyles.colors.primary,
    }
  },
  notificationContainer: {
    background: 'white',
    borderRadius: 10,
    width: '1040px',
    height: '120px',
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  notification: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    width: '150px',
  },
  counterContainer: {
    width: '1040px',
    marginTop: '15px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  visitsAndCouponsContainer: {
    background: 'white',
    borderRadius: 10,
    height: '150px',
  },
  bestDayContainer: {
    background: 'white',
    borderRadius: 10,
    height: '150px',
  },
  btnsContainer: {
    display: 'flex',
    flexDirection: 'column'
  }
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SideBar />
      <div className={classes.contentArea}>
        <Profile />
        <main className={classes.content}>
          <section style={{marginTop: '15px'}}>
            <h2 className={classes.bannerTitle}>Novidades para</h2>
            <h1 className={classes.bannerTitle} style={{color: MyStyles.colors.primary}}>Ateliê Dona Bonita</h1>
            <div className={classes.courseCardContainer}>
              {mocks.slice(0,3).map(mock => (
                <Coursecard 
                  imageSource={mock.imageSource}
                  title={mock.title}
                />
              ))}
              <div className={classes.moreCourses}>
                <Link to='/dashboard/cursos'>
                  Ver mais
                </Link>
              </div>
            </div>
          </section>
          <section style={{marginTop: '15px'}}>
            <h1 className={classes.bannerTitle}>Lembretes</h1>
            <div className={classes.notificationContainer}>
              <div className={classes.notification}>
                <ContactsIcon />
              <p>{clients === 1? `1 cliente está`: `${clients} clientes estão`} esperando sua resposta no chat</p>
                
              </div>
              <Divider orientation="vertical" flexItem/>
              <div className={classes.notification}>
                <LocalOfferIcon />
                Sua loja tem {coupons ===1 ? `1 cupom disponível`: `${coupons} cupons disponíveis`}
              </div>
              <Divider orientation="vertical" flexItem/>
              <div className={classes.btnsContainer}>
                <Button variant="contained" style={{backgroundColor: MyStyles.colors.secondary}}>CRIAR UMA PROMOÇÃO</Button>
                <Button variant="contained" style={{backgroundColor: MyStyles.colors.primary}}>ENVIAR UMA COBRANÇA</Button>
              </div>
            </div>
          </section>
          <section style={{marginTop: '15px'}}>
            <h1 className={classes.bannerTitle}>Nos últimos 30 dias</h1>
            <div className={classes.counterContainer}>
              <div className={classes.visitsAndCouponsContainer}>
                <div>
                  {visits === 1? `1 visita`: `${visits} visitas`} em sua loja
                </div>
                <Divider orientation="vertical" flexItem/>
                <div>
                  {coupons === 1? `1 cupom usado`: `${coupons} cupons usados`}
                </div>
              </div>
              <div className={classes.bestDayContainer}>
                Melhor dia da semana
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;