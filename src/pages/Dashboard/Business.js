import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Profile from '../../Components/Profile';
import SideBar from '../../Components/Sidebar';
import Sale from '../../Components/Sale';
import { makeStyles } from "@material-ui/styles";
import MyStyles from '../../assets/styles/MyStyles';

const balance = 'R$1130,00'
const sales = [
  {
    cost: '+R$100,00',
    client: 'João Pedro da Silva',
    description: '2x camisas manga longa',
    coupon: '15%',
    data: '20.10.2020'
  },
  {
    cost: '+R$140,00',
    client: 'Neide Moraes',
    description: '1x vestido, 2x calças jeans',
    coupon: 'NÃO',
    data: '19.10.2020'
  },
  {
    cost: '+R$100,00',
    client: 'João Pedro da Silva',
    description: '2x camisas manga longa',
    coupon: '15%',
    data: '20.10.2020'
  },
  {
    cost: '+R$140,00',
    client: 'Neide Moraes',
    description: '1x vestido, 2x calças jeans',
    coupon: 'NÃO',
    data: '19.10.2020'
  },
  {
    cost: '+R$100,00',
    client: 'João Pedro da Silva',
    description: '2x camisas manga longa',
    coupon: '15%',
    data: '20.10.2020'
  },
  {
    cost: '+R$140,00',
    client: 'Neide Moraes',
    description: '1x vestido, 2x calças jeans',
    coupon: 'NÃO',
    data: '19.10.2020'
  },
];

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  contentArea: {
    width: '-webkit-fill-available',
  },
  content: {
    marginLeft: '30px',
    marginTop: '-30px'
  },
  balanceContainer: {
    display: 'flex',
    flexDirection: 'row',
    background: 'white',
    borderRadius: '5px',
    boxShadow: '0px 6px 6px #00000029',
    width: '1040px',
    height: '150px',
  },
  balance: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '400px',
    fontSize: '20px',
    color: MyStyles.colors.primary
  },
  salesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'white',
    borderRadius: '5px',
    marginTop: '10px',
    boxShadow: '0px 6px 6px #00000029',
    width: '1040px',
    height: '390px',
  },
  salesTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: 'white',
    width: '1000px',
    height: '40px',
    '& div': {
      marginLeft: '30px'
    }
  },
  btnsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '600px',
  }, 
  btns: {
    fontSize: '16px',
    width: '250px',
    height: '50px',
    borderRadius: '10px'
  },
  bannerTitle: {
    fontWeight: 'lighter',
    color: MyStyles.colors.darks[50]
  },
});

const Business = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SideBar />
      <div className={classes.contentArea}>
        <Profile />
        <main className={classes.content}>
          <section style={{marginTop: '58px'}}>
            <div className={classes.balanceContainer}>
              <div className={classes.balance}>
                <p>Meu saldo</p>
                <div style={{fontSize: '48px', fontWeight: 'bold', color: '#5D5D5D'}}>{balance}</div>
              </div>
              <Divider orientation="vertical" flexItem/>
              <div className={classes.btnsContainer}>
                <Button 
                  className={classes.btns} 
                  variant="contained" 
                  style={{color: 'white', backgroundColor: MyStyles.colors.primary}}
                >
                  RETIRAR
                </Button>
                <Button 
                  className={classes.btns} 
                  variant="outlined" 
                  style={{color: MyStyles.colors.primary, borderColor: MyStyles.colors.primary}}
                >
                  CRIAR COBRANÇA
                </Button>
              </div>
            </div>
          </section>
          <section style={{marginTop: '30px'}}>
            <h1 className={classes.bannerTitle}>Últimas vendas</h1>
            <div className={classes.salesContainer}>
              <div className={classes.salesTitle}>
                <div style={{width: '120px'}}>Valor</div>
                <div style={{width: '260px'}}>Cliente</div>
                <div style={{width: '260px'}}>Descrição</div>
                <div style={{width: '100px'}}>Cupom</div>
                <div style={{width: '120px'}}>Data</div>
              </div>
              {sales.map(sale => (
                <Sale
                  cost={sale.cost}
                  client={sale.client}
                  description={sale.description}
                  coupon={sale.coupon}
                  data={sale.data} 
                />
              ))}
            </div>
          </section>
        </main>
      </div>\

    </div>
  );
}

export default Business;