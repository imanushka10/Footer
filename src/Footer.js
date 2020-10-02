import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FooterComponent from "./Footercomponent";
import "./Footer.css";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography
          component="div"
          style={{
            backgroundColor: "rgb(230, 225, 225)",
            height: "60vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <FooterComponent />
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            backgroundColor: "rgb(253, 38, 74)",
            width: "95%",
            height: "10vh",
            justifyContent: "space-around",
            alignItems: "center",
            position: "fixed",
          }}
        >
          <a href="#" style={{ color: "white" }}>
            Term & condition
          </a>
          <a href="#" style={{ color: "white" }}>
            Privacy and policy
          </a>
          <a href="#" style={{ color: "white" }}>
            @copyright Reserve
          </a>
        </div>
      </Container>
    </React.Fragment>
  );
}
