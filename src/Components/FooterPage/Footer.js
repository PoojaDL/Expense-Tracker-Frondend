const Footer = () => {
  return (
    <div
      style={{
        background: "#212529",
        position: "relative",
        width: "100%",
        bottom: "0px",
        marginBottom: "0px",
        height: "10rem",
        zIndex: "-1",
      }}
      align="center"
    >
      <h1 style={{ color: "white", marginBottom: "0px" }}>X-Pense</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          padding: "1rem",
          gap: "0.5rem",
        }}
      >
        <a href="https://www.google.com/">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1377/1377213.png"
            alt="linkedIn"
            width="40vh"
            height="40vh"
          />
        </a>
        <a href="https://www.google.com/">
          <img
            src="https://cdn-icons-png.flaticon.com/128/11104/11104255.png"
            alt="gitHub"
            width="40vh"
            height="40vh"
          />
        </a>
        <a href="https://www.google.com/">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3686/3686989.png"
            alt="mail"
            width="40vh"
            height="40vh"
          />
        </a>
        <a href="https://www.google.com/">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
            alt="instagram"
            width="40vh"
            height="40vh"
          />
        </a>
      </div>
      <p style={{ color: "white", margin: "0px" }}>
        Made-with-Love © 2024 Poojadl02
      </p>
    </div>
  );
};

export default Footer;
