import { Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import MyStyles from "../../assets/styles/MyStyles";
import Navbar from "../../Components/BaseNavbar";
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
  const handleKeyDown = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      console.log(e);
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
          {messageMock.map((message) => (
            <div className={message.isMe ? classes.sended : classes.received}>
              {message.message}
            </div>
          ))}
        </div>
        <Paper elevation={4} className={classes.chatWindow}>
          <TextField
            label="Digite uma mensagem..."
            className={classes.textField}
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
