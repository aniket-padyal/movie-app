import { useState } from "react";

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="card ">
      <h2>{title}</h2>

      <button
        className=" "
        onClick={() => {
          setHasLiked(!hasLiked);
        }}
      >
        {hasLiked ? "Liked" : "Like"}
      </button>
    </div>
  );
};

export default Card;
