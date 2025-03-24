import { Container } from "react-bootstrap";
import Blob from "./Blob";
import Bubble from "./Bubble";
import heroImage from "../../assets/images/heroImage.jpg";
import EngineImg from "../../assets/images/Engine.png";
import Escalator from "../../assets/images/Escalator.avif";
{
  /* https://gb.mitsubishielectric.com/sites/gb_ssl/en/news/releases/global/2020/1207-a/images/img_201207-a.jpg */
}

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Container className="d-flex flex-column justify-content-center align-items-center position-relative">
        {/* Floating Bubble */}
        <Bubble
          imageUrl={EngineImg}
          size={120}
          style={{
            position: "absolute",
            top: "20%",
            left: "80%",
            animation: "float 3s ease-in-out infinite",
          }}
        />
        <Bubble
          imageUrl={EngineImg}
          size={150} // Bubble size in pixels
          style={{
            position: "absolute",
            top: "40%",
            right: "80%",
            animation: "float 3s ease-in-out infinite",
          }}
        />

        {/* Hero Image */}
        <img
          src={Escalator} //{heroImage}
          alt="Hero"
          className="img-fluid rounded"
          style={{ maxWidth: "100%", height: "650px" }}
        />
      </Container>
      <div style={{ position: "relative" }}>
        {/* First section (the one below) */}
        <div
          style={{
            height: "300px",
            background: "linear-gradient(to right, #4facfe,rgb(62, 125, 128))",
          }}
        >
          {/* Content of the first section */}
          <h2 className="text-center py-5">Background Section</h2>
        </div>

        {/* Curved section that overlaps */}
        <div
          style={{
            position: "relative",
            backgroundColor: "#f0f0f0",
            marginTop: "-100px", // This pulls it up over the previous section
            zIndex: 1, // Ensures it appears above
            paddingTop: "120px",
            paddingBottom: "40px",
          }}
        >
          {/* Curved top SVG */}
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "120px",
              transform: "translateY(-100%)", // Pulls the curve up completely
            }}
          >
            <path
              fill="#f0f0f0"
              d="M0,96C120,96,240,64,360,48C480,32,600,32,720,48C840,64,960,96,1080,96C1200,96,1320,64,1440,48L1440,120L0,120Z"
            />
          </svg>

          {/* Content */}
          <div className="container">
            <h2 className="text-center">Curved Section</h2>
            <p className="text-center">You can put any content here</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
