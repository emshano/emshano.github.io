import React from "react";

const Card = ({lang, img, title, link, description}) => {
  return (
    <div className="">
          <a className="proj_link text-lg bg-yellow-300" href={link}>{`→ ${title}`}</a>
          <p className="text-gray-400 italic text-sm">{description}</p>
    </div>
  );


}
export default Card;