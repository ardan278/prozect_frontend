import React from "react";

const About: React.FC = () => {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light px-4 py-5">
        <div className="container text-center">
          <h1 className="mb-4 fw-bold">About VTS Tech</h1>
          <p className="text-muted lead">
            VTS Tech is a leading provider of high-quality escalator spare
            parts, offering reliable solutions for maintenance, repair, and
            upgrades.
          </p>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-4">
              <h3 className="fw-semibold">Our Mission</h3>
              <p>
                At VTS Tech, our mission is to deliver premium escalator spare
                parts that ensure safety, efficiency, and durability for our
                clients worldwide.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-start mb-4">
              <h3 className="fw-semibold">Our Vision</h3>
              <p>
                We aim to be the global leader in escalator spare parts,
                offering innovative and cost-effective solutions for modern
                urban mobility.
              </p>
            </div>
          </div>
        </div>
        <div className="container text-center mt-auto py-4 w-100 bg-white shadow-lg rounded">
          <h3 className="fw-bold">Contact Us</h3>
          <p>Email: support@vtstech.com | Phone: +1 234 567 8900</p>
        </div>
      </div>
      <br />
    </>
  );
};

export default About;
