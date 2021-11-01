import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import notFoundImg from "../../images/404page.jpg";
import "./NotFound.css";

const NotFound = () => {
    let history = useHistory();

    function handleClick() {
      history.push("/home");
    }
  return (
    <div>
      <div className="notFound">
        <img src={notFoundImg} alt="notFound" />
      </div>
      <div>
      <Button variant="danger" onClick={handleClick}>Go Back</Button>
      </div>
    </div>
  );
};

export default NotFound;
