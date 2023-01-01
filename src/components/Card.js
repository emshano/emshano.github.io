import React from "react";
import Button from "./Button"

const Card = ({lang, img, title, link, description}) => {
  return (
    <div className="projjy mt-12 justify-self-center mb-12 max-w-xs md:max-w-xl">
      <img className="w-14 h-14 md:w-20 md:h-20 -mt-6 -ml-6 md:-mt-10 md:-ml-10 absolute inline-block lang " src={lang} alt="Language or framework logo" />
      <div className="bg-accent2 flex flex-row md:flex-row rounded-2xl shadow-lg w-full">
        <img className="w-2/5 md:w-1/4 object-cover rounded-l-2xl" src={img} alt="Screenshot of project" />
        <div className="px-4 py-3 w-full">
          <div className="flex flex-row self-center justify-between mb-2">
            <h1 className="text-gray-200 text-lg md:text-2xl">{title}</h1>
            <div className="ml-2 self-center">
              <a href={link}><Button /></a>
            </div>
          </div>
          <p className="text-gray-400 italic text-sm">{description}</p>
        </div>
      </div>
    </div>
  );


}
export default Card;