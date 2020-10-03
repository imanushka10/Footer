import React from "react";
import SignupRightForm from "./SignupRightForm";
import "./Signup.css";
function SignupRight() {
  return (
    <div style={{ width: "55%", backgroundColor: "#D3D3D3" }}>
      <div
        style={{
          textAlign: "right",
          marginTop: "50px",
        }}
      >
        <a href="#">
          Already a memeber? <b>Sign in</b>
        </a>
      </div>
      <SignupRightForm />
    </div>
  );
}
export default SignupRight;
