import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./ServiceDetails.css";
const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [serviceDetailsInfo, setServiceDetailsInfo] = useState([]);
  const [singleService, setSingleService] = useState({});

  useEffect(() => {
    fetch("/serviceDetails.json")
      .then((res) => res.json())
      .then((data) => setServiceDetailsInfo(data.serviceDetails));
  }, []);

  useEffect(() => {
    const singleService = serviceDetailsInfo.find(
      (serviceInfo) => serviceInfo.id === serviceId
    );
    setSingleService(singleService);
  }, [serviceDetailsInfo]);

  return (
    <div>
      <div className="container my-5 details">
        <h3 className="my-2 pb-3 ">Know Details About Our Services</h3>

        <img src={singleService?.img} alt="single img" />

        <h2>{singleService?.name}</h2>

        <p>{singleService?.desc}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
