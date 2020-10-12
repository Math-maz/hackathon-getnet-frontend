import React, { useState } from "react";
import { Link } from 'react-router-dom';
// import Api from "../../lib/Api";
import Navbar from "../../Components/BaseNavbar";
import { makeStyles } from "@material-ui/styles";
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
    '& a': {
      width: '100%',
      textDecoration: 'none',
      color: MyStyles.colors.primary,
      textDecoration: 'none'
    }
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
    width: '350px',
    padding: '15px',
    boxShadow: '0px 3px 6px #00000029',
    '& label': {
      fontSize: '12px',
    },
    '& input': {
      borderRadius: '8px',
      height: '30px',
      border: `1px solid ${MyStyles.colors.primary}`,
      paddingLeft: '10px',
      marginTop: '5px'
    }
  },
  greenContainer: {
    background: MyStyles.colors.primary,
    color: 'white',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '15px',
    boxShadow: '0px 3px 6px #00000029',
    '& label': {
      fontSize: '12px',
    },
  },
  inputContainer: {
    display: 'flex', 
    flexDirection: 'column',
    marginBottom: '10px'
  },
  amountInput: {
    backgroundColor: 'inherit',
    border: 'none',
    color: 'white',
    outline: 'none',
    fontSize: '24px',
    fontWeight: 'bold',
    width: '150px',
    textAlign: 'center' 
  },
  btnSubmit: {
    width: '160px',
    height: '50px',
    fontSize: '18px',
    color: MyStyles.colors.primary,
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '10px',
  }
});

export default function Wallet () {
  const [creditCard, setCreditCard] = useState('**** **** 9012 3456');
  const [clientName, setClientName] = useState('Matheus Marituba de Brito');
  const [expirationDate, setExpirationDate] = useState('05/22');
  const [verificationNumber, setVerificationNumber] = useState('***');
  const [increaseAmount, setIncreaseAmount] = useState('R$100,00');

  function handleSubmit(e) {
    e.preventDefault();
  }

  const classes = useStyles();
  return(
    <>
      <Navbar />
      <div className={classes.root}>
        <h2 className={classes.textContainer}>Adicionar saldo a carteira digital</h2>
        <h3 className={classes.textContainer} style={{color: 'black'}}>Seu cartão</h3>
        <div className={classes.formContainer}>
          <form className={classes.form}>
            <div className={classes.whiteContainer}>
              <div className={classes.inputContainer}>
                <label htmlFor='creditCard'>Número do cartão</label>
                <input
                  style={{ width: '320px'}} 
                  id='creditCard'
                  value={creditCard} 
                  type='text'
                  disabled 
                />
              </div>
              <div className={classes.inputContainer}>
                <label htmlFor='clientName'>Nome impresso no cartão</label>
                <input
                  style={{ width: '320px'}}  
                  id='clientName' 
                  value={clientName} 
                  type='text'
                  disabled 
                />
              </div>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '240px'}}>
                <div className={classes.inputContainer}>
                  <label htmlFor='expirationDate'>Validade</label>
                  <input
                    style={{ width: '100px'}}  
                    id='expirationDate' 
                    value={expirationDate} 
                    type='text'
                    disabled 
                  />  
                </div>
                <div className={classes.inputContainer}>
                  <label htmlFor='verificationNumber'>CVV</label>
                  <input
                    style={{ width: '70px'}}  
                    id='verificationNumber' 
                    value={verificationNumber} 
                    type='text'
                    disabled 
                  />
                </div>
              </div>
            </div>
            <div className={classes.greenContainer}>
              <label htmlFor='increaseAmount'>Valor no cartão:</label> 
              <input 
                className={classes.amountInput}
                id='increaseAmount' 
                value={increaseAmount}
                onChange={e => setIncreaseAmount(e.target.vakue)} 
                type='text' 
              />
              <button className={classes.btnSubmit} type='submit'>Confirmar recarga</button> 
            </div>
          </form>
        </div>
          <p className={classes.textContainer}>
            <Link to='/carteira'>
              Escolher ou cadastar cartão
            </Link>
          </p>
      </div>
    </>
  );
}