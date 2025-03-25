// import Blob from "./Blob";
// import Bubble from "./Bubble";
// import heroImage from "../../assets/images/heroImage.jpg";
{
  /* https://gb.mitsubishielectric.com/sites/gb_ssl/en/news/releases/global/2020/1207-a/images/img_201207-a.jpg */
}
import { Container, Row, Col } from "react-bootstrap";
import Blog2 from "../../assets/images/peopleHandOver.jpg";
import Escalator from "../../assets/images/Escalator.png";
import Blog1 from "../../assets/images/1523699544907.png";
import Blog3 from "../../assets/images/b3_part.jpg";

// Define the section data
const sections = [
  {
    title: "Our Mission",
    text: "Our mission is to deliver top-notch solutions to our clients ensuring the highest level of satisfaction.",
    image: Blog1,
    layout: "left-text",
    bgClass: "bg-light",
    imageStyle: "w-[75%] h-auto rounded-[25px] mx-auto d-block"
  },
  {
    title: "Our Vision",
    text: "We envision a future where technology empowers people and transforms industries.",
    image: Blog2,
    layout: "right-text",
    bgClass: "",
    imageStyle: "w-[70%] h-auto rounded-[50px] mx-auto d-block shadow-md",
  },
  {
    title: "Our Values",
    text: "Integrity, innovation, and commitment to excellence define our core values.",
    image: Blog3,
    layout: "left-text",
    bgClass: "bg-light",
    imageStyle: "w-[70%] h-[10px] object-cover rounded-[20px] mx-auto d-block shadow-md"
  },
];

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Container
        fluid
        className="my-5 text-white"
        style={{
          background: "linear-gradient(to right, #283048, #859398)",
          padding: "100px 0",
        }}
      >
        <Row className="align-items-center text-center">
          <Col md={6} className="p-5 text-md-start">
            <h1 className="display-4">Welcome to Our Platform</h1>
            <p className="lead">
              We provide high-quality services to help you achieve your goals.
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img
              src={Escalator}
              alt="Hero"
              className="img-fluid rounded w-[80%] h-auto"
            />
          </Col>
        </Row>
      </Container>

      {/* Dynamic Sections */}
      {sections.map((section, index) => (
        <Container
          key={index}
          fluid
          className={`my-5 py-5 ${section.bgClass} shadow-lg`}
        >
          <Row className="align-items-center text-center">
            {section.layout === "right-text" && (
              <Col md={6} className="d-flex justify-content-center">
                <img
                  src={section.image}
                  alt={section.title}
                  className={`img-fluid ${section.imageStyle}`}
                />
              </Col>
            )}
            <Col md={6} className="p-5 text-md-start">
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </Col>
            {section.layout === "left-text" && (
              <Col md={6} className="d-flex justify-content-center">
                <img
                  src={section.image}
                  alt={section.title}
                  className={`img-fluid ${section.imageStyle}`}
                />
              </Col>
            )}
          </Row>
        </Container>
      ))}
    </div>
  );
};

export default Home;

// const Home: React.FC = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       <Container className="d-flex flex-column justify-content-center align-items-center position-relative">
//         {/* Floating Bubble */}
//         <Bubble
//           imageUrl={EngineImg}
//           size={120}
//           style={{
//             position: "absolute",
//             top: "20%",
//             left: "80%",
//             animation: "float 3s ease-in-out infinite",
//           }}
//         />
//         <Bubble
//           imageUrl={EngineImg}
//           size={150} // Bubble size in pixels
//           style={{
//             position: "absolute",
//             top: "40%",
//             right: "80%",
//             animation: "float 3s ease-in-out infinite",
//           }}
//         />

//         {/* Hero Image */}
//         <img
//           src={Escalator} //{heroImage}
//           alt="Hero"
//           className="img-fluid rounded"
//           style={{ maxWidth: "100%", height: "650px" }}
//         />
//       </Container>
//       <div style={{ position: "relative" }}>
//         {/* First section (the one below) */}
//         <div
//           style={{
//             height: "300px",
//             background: "linear-gradient(to right, #4facfe,rgb(62, 125, 128))",
//           }}
//         >
//           {/* Content of the first section */}
//           <h2 className="text-center py-5">Background Section</h2>
//         </div>

//         {/* Curved section that overlaps */}
//         <div
//           style={{
//             position: "relative",
//             backgroundColor: "#f0f0f0",
//             marginTop: "-100px", // This pulls it up over the previous section
//             zIndex: 1, // Ensures it appears above
//             paddingTop: "120px",
//             paddingBottom: "40px",
//           }}
//         >
//           {/* Curved top SVG */}
//           <svg
//             viewBox="0 0 1440 120"
//             preserveAspectRatio="none"
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "120px",
//               transform: "translateY(-100%)", // Pulls the curve up completely
//             }}
//           >
//             <path
//               fill="#f0f0f0"
//               d="M0,96C120,96,240,64,360,48C480,32,600,32,720,48C840,64,960,96,1080,96C1200,96,1320,64,1440,48L1440,120L0,120Z"
//             />
//           </svg>

//           {/* Content */}
//           <div className="container">
//             <h2 className="text-center">Curved Section</h2>
//             <p className="text-center">You can put any content here</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
