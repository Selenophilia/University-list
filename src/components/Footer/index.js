import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Typography } from "@material-ui/core";
import CopyrightIcon from "@material-ui/icons/Copyright";
const useStyles = makeStyles(() => ({
  footer: {
    height: 350,
    backgroundColor: "#6596F3",
    padding: 100,
    position: "relative"
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold"
  },
  input: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    width: 300,
    border: "none",
    "&::before": {
      borderBottom: "none"
    },
    "& .MuiFilledInput-underline:after": {
      outline: "none",
      borderBottom: "none"
    }
  },
  submit: {
    backgroundColor: "#3CB371",
    color: "#FFFFFF",
    width: 90,
    height: 57,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    position: "relative",
    top: 20,
    left: -90,
    "&:hover": {
      backgroundColor: "#38a167"
    },
    boxShadow: "none"
  },
  line: {
    marginTop: 30
  },
  copyright: {
    marginLeft: 10
  },
  footerText: {
    color: "#ffff",
    display: "flex",
    width: 400
  }
}));
const Footer = () => {
  const classes = useStyles();
  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("subscribe");
  };
  return (
    <div className={classes.footer}>
      <footer>
        <Typography className={classes.title} variant="p">
          Subscribe to our news letter
        </Typography>
        <div className={classes.subsribe}>
          <TextField
            id="outlined-basic"
            label="Suscribe"
            variant="filled"
            className={classes.input}
          />
          <Button
            variant="contained"
            className={classes.submit}
            onClick={handleSubscribe}
          >
            {"Submit"}
          </Button>
        </div>
        <hr className={classes.line} />
        <div className={classes.footerText}>
          <CopyrightIcon />
          <Typography className={classes.copyright} variant="p">
            copyright university listings 2021
          </Typography>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
