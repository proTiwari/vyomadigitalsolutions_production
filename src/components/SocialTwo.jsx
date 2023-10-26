import React from "react";

const socialList = [
  {
    name: "In.",
    link: "https://www.instagram.com/vyomadigitalsolutions",
  },
  {
    name: "Fb.",
    link: "https://www.facebook.com/profile.php?id=61552662693806",
  },
  {
    name: "Dc.",
    link: "https://discord.com/invite/AGrmdZHt",
  },
  {
    name: "Tw.",
    link: "https://twitter.com/atultiw92250758",
  },
];

const SocialTwo = () => {
  return (
    <ul>
      {socialList.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <span className="first">{val.name}</span>
            <span className="second">{val.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialTwo;
