import React from "react";

interface BubbleProps {
  imageUrl: string;
  style?: React.CSSProperties;
}

const Bubble: React.FC<BubbleProps> = ({ imageUrl, style }) => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "3px solid white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        backgroundColor: "white",
        ...style, // Allow custom styles
      }}
    >
      <img
        src={imageUrl}
        alt="Bubble"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default Bubble;
