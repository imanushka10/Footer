import React from "react";
import Checkboxes from "./SignupRightFooter";
import "./Signup.css";

export default function SignupRightForm() {
  return (
    <>
      <form>
        <div>
          <h3>Name</h3>
          <input />
        </div>
        <div>
          <h3>User Name</h3>
          <input />
        </div>
      </form>
      <form>
        <div>
          <h3>Phone No.</h3>
          <input />
        </div>
        <div>
          <h3>Email Id</h3>
          <input />
        </div>
      </form>
      <form>
        <div>
          <h3>Password</h3>
          <input />
        </div>
        <div>
          <h3>Confirm Password</h3>
          <input />
        </div>
      </form>
      <Checkboxes />
    </>
  );
}
