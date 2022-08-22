import react from "react";
import { AutoComplete } from "antd";

export default function UpperContainer() {
  return (
    <div className="headSection">
      <img src="/image/Rectangle 90.png"></img>
      <div className="upperSection">
        <h1>Laura Smith</h1>
        <h5>Frontend Developer</h5>
        <p>laurasmith.website</p>
        <button className="btnLink btn btn-light btn-lg">Email</button>
        <button className="btnLink btn btn-primary btn-lg">LinkedIn</button>
      </div>
    </div>
  );
}
