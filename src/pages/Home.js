import React from "react";
import { Link } from "react-router-dom";

const containerStyle = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  fontFamily: "Arial, sans-serif",
};

const articleStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  margin: "10px 0",
  backgroundColor: "#f9f9f9",
};

const footerStyle = {
  borderTop: "1px solid #ccc",
  padding: "20px 0",
  backgroundColor: "#f4f4f4",
};

function Home() {
  return (
    <div className="articles" style={containerStyle}>
      <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
        Latest articles
      </h3>

      <div style={articleStyle}>
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <h4>Article Title 1</h4>
          <p>Article content goes here...</p>
        </Link>
      </div>

      <div style={articleStyle}>
        <h4>Article Title 2</h4>
        <p>Article content goes here...</p>
      </div>

      <footer style={{ ...footerStyle, marginTop: "auto", textAlign: "center" }}>
        <div className="contact-info">
          <h4>Contact Information</h4>
          <p>Email: haidara200403@example.com</p>
          <p>Phone Number: 053599488</p>
          <p>WhatsApp: +242053599488</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;