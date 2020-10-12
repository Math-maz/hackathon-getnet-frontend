import { Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import MyStyles from "../../assets/styles/MyStyles";
import Navbar from "../../Components/BaseNavbar";
import Api from "../../lib/Api";
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
    display: "flex",
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
  textField: { width: "70%" },
  billingContainer: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  billingButton: {
    width: "80%",
    padding: "12px 0",
    backgroundColor: MyStyles.colors.primary,
    color: MyStyles.colors.white,
    borderRadius: 25,
    border: "none",
    marginTop: "12px",
  },
});
const messageMock = [
  {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet interdum mattis. Sed molestie purus felis, vitae maximus enim pulvinar nec. Phasellus sit amet tempor tortor. Phasellus nec nisi iaculis, finibus est ut, luctus dolor. Aenean ac dignissim ipsum. Vivamus sit amet enim vel turpis interdum congue ut sit amet justo. Ut id cursus erat. Suspendisse purus quam, luctus id venenatis quis, semper quis mauris.",
    isMe: !!Math.round(Math.random()),
  },
  {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet interdum mattis. Sed molestie purus felis, vitae maximus enim pulvinar nec. Phasellus sit amet tempor tortor. Phasellus nec nisi iaculis, finibus est ut, luctus dolor. Aenean ac dignissim ipsum. Vivamus sit amet enim vel turpis interdum congue ut sit amet justo. Ut id cursus erat. Suspendisse purus quam, luctus id venenatis quis, semper quis mauris.",
    isMe: !!Math.round(Math.random()),
  },
  {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet interdum mattis. Sed molestie purus felis, vitae maximus enim pulvinar nec. Phasellus sit amet tempor tortor. Phasellus nec nisi iaculis, finibus est ut, luctus dolor. Aenean ac dignissim ipsum. Vivamus sit amet enim vel turpis interdum congue ut sit amet justo. Ut id cursus erat. Suspendisse purus quam, luctus id venenatis quis, semper quis mauris.",
    isMe: !!Math.round(Math.random()),
  },
  {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet interdum mattis. Sed molestie purus felis, vitae maximus enim pulvinar nec. Phasellus sit amet tempor tortor. Phasellus nec nisi iaculis, finibus est ut, luctus dolor. Aenean ac dignissim ipsum. Vivamus sit amet enim vel turpis interdum congue ut sit amet justo. Ut id cursus erat. Suspendisse purus quam, luctus id venenatis quis, semper quis mauris.",
    isMe: !!Math.round(Math.random()),
  },
  {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet interdum mattis. Sed molestie purus felis, vitae maximus enim pulvinar nec. Phasellus sit amet tempor tortor. Phasellus nec nisi iaculis, finibus est ut, luctus dolor. Aenean ac dignissim ipsum. Vivamus sit amet enim vel turpis interdum congue ut sit amet justo. Ut id cursus erat. Suspendisse purus quam, luctus id venenatis quis, semper quis mauris.",
    isMe: !!Math.round(Math.random()),
  },
  {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet interdum mattis. Sed molestie purus felis, vitae maximus enim pulvinar nec. Phasellus sit amet tempor tortor. Phasellus nec nisi iaculis, finibus est ut, luctus dolor. Aenean ac dignissim ipsum. Vivamus sit amet enim vel turpis interdum congue ut sit amet justo. Ut id cursus erat. Suspendisse purus quam, luctus id venenatis quis, semper quis mauris.",
    isMe: !!Math.round(Math.random()),
  },
  {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet interdum mattis. Sed molestie purus felis, vitae maximus enim pulvinar nec. Phasellus sit amet tempor tortor. Phasellus nec nisi iaculis, finibus est ut, luctus dolor. Aenean ac dignissim ipsum. Vivamus sit amet enim vel turpis interdum congue ut sit amet justo. Ut id cursus erat. Suspendisse purus quam, luctus id venenatis quis, semper quis mauris.",
    isMe: !!Math.round(Math.random()),
  },
];
export default function ClientChat() {
  const classes = useStyles();
  const [messages, setMessages] = React.useState([]);
  const [text, setText] = React.useState("");
  const [billing, setBilling] = React.useState("R$");
  React.useEffect(() => {
    setInterval(function () {
      Api.get("/conversation/1eeeaff9-d1fb-40cd-a059-a53799ee15ca").then(
        (res) => {
          console.log(res);
          if (res.data.isOk) {
            setMessages(res.data.messages);
          }
        }
      );
    }, 3000);
  }, []);
  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      console.log(e);
      Api.post("/conversation/1eeeaff9-d1fb-40cd-a059-a53799ee15ca", {
        isMe: false,
        text,
      }).then((res) => {
        if (res.data.isOk) {
          setMessages(res.data.messages);
          setText("");
        }
      });
    }
  };
  const handleBilling = () => {
    Api.post("/conversation/1eeeaff9-d1fb-40cd-a059-a53799ee15ca", {
      isMe: false,
      text: billing,
    }).then((res) => {
      if (res.data.isOk) {
        setMessages(res.data.messages);
        setBilling("R$");
      }
    });
  };
  const formatMessage = (message) => {
    if (message.text.includes("R$")) {
      return (
        <div
          className={!message.isMe ? classes.sended : classes.received}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: 24 }}>
            Cobrança de {message.text} enviada
          </div>
        </div>
      );
    }
    return (
      <div className={!message.isMe ? classes.sended : classes.received}>
        {message.text}
      </div>
    );
  };
  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <div className={classes.messageWindow}>
          {messages.length > 1 &&
            messages.map((message) => formatMessage(message))}
        </div>
        <Paper elevation={4} className={classes.chatWindow}>
          <TextField
            label="Digite uma mensagem..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={classes.textField}
            multiline={true}
            variant="filled"
            rows={4}
            onKeyDown={handleKeyDown}
          />
          <div className={classes.billingContainer}>
            <input
              style={{ fontSize: 48, width: "50%", border: "1px solid #CCC" }}
              value={billing}
              onChange={(e) => setBilling(e.target.value)}
            />
            <button onClick={handleBilling} className={classes.billingButton}>
              ENVIAR COBRANÇA
            </button>
          </div>
        </Paper>
      </div>
    </>
  );
}
