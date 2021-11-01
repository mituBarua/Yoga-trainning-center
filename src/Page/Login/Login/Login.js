import React from "react";
import useAuth from "../../../hooks/useAuth";
import ModalPopup from "./ModalPopup";

const Login = () => {
  const { user } = useAuth();

  return (
    <div>
      {!user.email ? <ModalPopup show={true} /> : <ModalPopup show={false} />}
    </div>
  );
};

export default Login;
