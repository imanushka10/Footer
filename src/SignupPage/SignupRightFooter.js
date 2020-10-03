import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { FcGoogle } from "react-icons/fc";
import "./Signup.css";
function Checkboxes() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <Checkbox style={{ width: "10%" }} />
        <span style={{ width: "90%" }}>
          By registring on this website you agree to our Terms of services and
          privacy policy
        </span>
      </div>
      <Button
        style={{
          borderRadius: "0%",
          backgroundColor: "rgb(253, 38, 74)",
          margin: "20px",
          width: "150px",
        }}
      >
        <span style={{ color: "white" }}>Sign Up</span>
      </Button>
      {/* <div
        style={{
          borderLeft: "2px solid green",
          height: "5px",
          width: "200px",
        }}
      />
      hi
      <div
        style={{
          color: "grey",
          height: "5",
          width: "30%",
        }}
      /> */}
      <form
        style={{
          backgroundColor: "white",
          textAlign: "center",
          width: "80%",
          margin: "0 auto",
          height: "7vh",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "55px",
          marginTop: "20px",
        }}
      >
        <FcGoogle style={{ textAlign: "center", fontSize: "35px" }} />
        <span style={{ color: "#162641", marginLeft: "10px" }}>
          Sign up with Google
        </span>
      </form>
    </>
  );
}

export default Checkboxes;
