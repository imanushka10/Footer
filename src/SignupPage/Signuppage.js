import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SignupLeft from "./SignupLeft";
import SignupRight from "./SignupRight";
export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100%">
        <Typography
          component="div"
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "red",
            height: "auto",
          }}
        >
          <SignupLeft />
          <SignupRight />
        </Typography>
      </Container>
    </React.Fragment>
  );
}
