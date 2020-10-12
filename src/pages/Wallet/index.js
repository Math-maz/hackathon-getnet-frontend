import React from "react";
import { makeStyles } from "@material-ui/styles";
import Navbar from "../../Components/BaseNavbar";
import MyStyles from "../../assets/styles/MyStyles";

const useStyles = makeStyles({
  root: {
    paddingTop: "9px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginLeft: '60px',
    placeItems: 'flex-start',
  },
  textContainer: {
    marginTop: '15px',
    color: MyStyles.colors.primary,
  },
  formContainer: {
    marginTop: '15px'
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    width: '600px',
    height: '250px'
  },
  whiteContainer: {
    background: 'white',
    borderRadius: '10px',
    '& label': {
      fontSize: '12px',
    },
    '& input': {
      borderRadius: '10px',
      border: `1px solid ${MyStyles.colors.primary}`,
    }
  },
  greenContainer: {
    background: MyStyles.colors.primary,
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column'
  }
});

export default function Wallet () {
  const classes = useStyles();
  return(
    <>
      <Navbar />
      <div className={classes.root}>
        <h1 className={classes.textContainer}>Adicionar saldo a carteira digital</h1>
        <h3 className={classes.textContainer} style={{color: 'black'}}>Seu cartão</h3>
        <div className={classes.formContainer}>
          <form className={classes.form}>
            <div className={classes.whiteContainer}>
              <label for='creditCard'>Número do cartão</label>
              <input id='creditCard' placeholder='**** **** 9012 3456' type='text' />
              <label for='clientName'>Nome impresso no cartão</label>
              <input id='clinetName' placeholder='Matheus Marituba de Brito' type='text' />
              <label for='expirationDate'>Validade</label>
              <input id='expirationDate' placeholder='05/22' type='text' />
              <label for='verificationNumber'>CVV</label>
              <input id='verificationNumber' placeholder='***' type='text' />
            </div>
            <div className={classes.greenContainer}>
              <label for='increaseAmount'>Valor no cartão</label> 
              <input id='increaseAmount' placeholder='R$100,00' type='text' />

              <button type='submit'>Confirmar recarga</button> 
            </div>
          </form>
        </div>
        <h4 className={classes.textContainer}>Escolher ou cadastar cartão</h4>
      </div>
    </>
  );
}