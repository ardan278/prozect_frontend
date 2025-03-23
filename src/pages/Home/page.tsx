import { Container } from "react-bootstrap";
import Blob from "./Blob";
import Bubble from "./Bubble";
import heroImage from "../../assets/images/heroImage.jpg";

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
          imageUrl={
            "https://www.pngall.com/wp-content/uploads/2016/05/Engine-Free-PNG-Image.png"
          }
          style={{
            position: "absolute",
            top: "20%",
            left: "70%",
            animation: "float 3s ease-in-out infinite",
          }}
        />

        {/* Hero Image */}
        <img
          src={heroImage}
          alt="Hero"
          className="img-fluid rounded"
          style={{ maxWidth: "100%", height: "650px" }}
        />

        {/* Blob Below the Image */}
        <div className="mt-4">
          <Blob />
        </div>
      </Container>

      <div style={{ position: "relative", backgroundColor: "#f0f0f0" }}>
      {/* Curved Top using SVG */}
      <svg
        viewBox="0 0 1440 320"
        style={{
          position: "absolute",
          top: "-100px",
          left: "0",
          width: "100%",
          height: "100px", // Adjust height if needed
        }}
      >
        <path
          fill="#f0f0f0"
          d="M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,213.3C840,224,960,192,1080,160C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>

      {/* Content */}
      <div style={{ width: "100%", paddingTop: "120px" }}>
        <h2 className="text-center py-5">Curved Section</h2>
      </div>
    </div>
    </>
  );
};

export default Home;
