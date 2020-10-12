import { Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import MyStyles from "../../assets/styles/MyStyles";
import Navbar from "../../Components/BaseNavbar";
import Api from "../../lib/Api";
import HomeContext from "../../lib/context/home/HomeContext";
import { Check } from "@material-ui/icons";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  messageWindow: {
    width: "80%",
    height: "65vh",
    maxHeight: "65vh",
    padding: "12px",
    overflow: "scroll",
    marginTop: "12px",
    overflowY: "auto",
    overflowX: "hidden",
  },
  chatWindow: {
    width: "80%",
    padding: "12px",
    marginBottom: "48px",
  },
  received: {
    backgroundColor: MyStyles.colors.white,
    marginTop: "12px",
    width: "50%",
    padding: "12px",
    color: MyStyles.colors.black,
    borderRadius: 12,
    border: "2px solid #ccc",
  },
  sended: {
    backgroundColor: MyStyles.colors.primary,
    marginTop: "12px",
    width: "50%",
    marginLeft: "auto",
    padding: "12px",
    color: MyStyles.colors.white,
    borderRadius: 12,
  },
  header: {
    fontSize: 18,
  },
});

export default function ClientChat() {
  const classes = useStyles();
  const [messages, setMessages] = React.useState([]);
  const [text, setText] = React.useState("");
  const [paymentDone, setPaymentDone] = React.useState(false);
  const { state, actions } = React.useContext(HomeContext);

  const getConversation = () => {
    Api.get("/conversation/1eeeaff9-d1fb-40cd-a059-a53799ee15ca").then(
      (res) => {
        console.log(res);
        if (res.data.isOk) {
          setMessages(res.data.messages);
        }
      }
    );
  }

  React.useEffect(() => {
    getConversation()
    setInterval(getConversation, 3000);
  }, []);

  const handleBilling = (amount) => {
    const formatedAmount = amount.slice(2);
    console.log(formatedAmount);
    Api.get(
      `/transaction/e7804097-1234-43cc-9df2-9688200b12ad/a1036fae-07b2-4d75-907b-51d74c7878a6/${formatedAmount}/transacao`
    ).then((res) => {
      if (res.data.isOk) {
        actions.setUser({ balance: res.data.total });
        setPaymentDone(true);
      }
      console.log(res);
    });
  };
  const formatMessage = (message) => {
    if (message.text.includes("R$")) {
      return (
        <div
          className={message.isMe ? classes.sended : classes.received}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: 24 }}>
            Cobrança de {message.text}
          </div>
          <button
            style={{
              width: "80%",
              marginTop: "4px",
              padding: "12px 0",
              backgroundColor: MyStyles.colors.primary,
              color: MyStyles.colors.white,
              borderRadius: 25,
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => handleBilling(message.text)}
          >
            {paymentDone ? (
              <Check style={{ color: MyStyles.colors.white, fontSize: 14 }} />
            ) : (
              "PAGAR"
            )}
          </button>
        </div>
      );
    }
    return (
      <div className={message.isMe ? classes.sended : classes.received}>
        {message.text}
      </div>
    );
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      console.log(e);
      Api.post("/conversation/1eeeaff9-d1fb-40cd-a059-a53799ee15ca", {
        isMe: true,
        text,
      }).then((res) => {
        if (res.data.isOk) {
          setMessages(res.data.messages);
          setText("");
        }
      });
    }
  };
  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <div className={classes.messageWindow}>
          <div className={classes.header}>
            Você está conversando com Ateliê Dona Bonita (Joana)
          </div>
          {messages.length > 1 &&
            messages.map((message) => formatMessage(message))}
        </div>
        <Paper elevation={4} className={classes.chatWindow}>
          <TextField
            label="Digite uma mensagem..."
            className={classes.textField}
            value={text}
            onChange={(e) => setText(e.target.value)}
            multiline={true}
            variant="filled"
            rows={4}
            fullWidth={true}
            onKeyDown={handleKeyDown}
          />
        </Paper>
      </div>
    </>
  );
}
