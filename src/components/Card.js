import React from "react";

const Card = ({lang, img, title, link, description, color}) => {
  return (
    <div className="m-4">
          <a className={`proj_link pr-2 ${color}`} href={link}>{`→ ${title}`}</a>
          <p className="text-gray-400 italic text-2xl">{description}</p>
    </div>
  );


}
export default Card;