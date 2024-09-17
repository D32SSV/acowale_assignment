import React from "react";
import ArrowIco from "../Assets/trend.png";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div>
        <h1 style={{ color: "#cc0e0e" }}>
          ACO<span style={{ color: "gold" }}>N</span>EWS
        </h1>
        <p style={{ color: "whitesmoke" }}>
          News from the whole world
        </p>
        <button onClick={() => navigate("/news")}>
          READ NEWS
          <img src={ArrowIco} width={"30px"} height={"30px"} alt="icon" />
        </button>
      </div>
    </div>
  );
};

export default Home;
