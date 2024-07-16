import profilepic from '../assets/profilepic.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function AboutMe() {
  return (
    <div className="flex flex-col w-full md:flex-row md:justify-between">
      <div className="text-center md:text-left mt-4 mx-auto md:mx-0 md:mt-0 text-darkTurquoise dark:text-customGray">
        <div className="m-auto md:mx-0">
          <img
            className="w-[150px] shadow-md border border-gray-400 rounded-full transition-all duration-300 ease-in-out"
            src={profilepic}
            alt="profile picture"
          />
        </div>
        <p className="text-xl mt-4 md:text-2xl">Mohammed Ilef</p>
        <h1 className="text-6xl md:text-8xl font-dosisLight">Ikhelef</h1>
      </div>
      <div className="py-3 px-4 mt-20 rounded-xl backdrop-blur-xl bg-[#e5edf5] dark:bg-[#23323a] text-darkTurquoise dark:text-customGray">
        <p className="text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
          neque eget velit laoreet posuere quis sit amet augue. Phasellus eu
          volutpat eros. Quisque odio nibh, rhoncus nec dignissim sagittis,
          faucibus non ex. Nullam laoreet tristique ex.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Fusce vel neque eget velit laoreet
          posuere quis sit amet augue. Phasellus eu volutpat eros. Quisque odio
          nibh, rhoncus nec dignissim sagittis, faucibus non ex. Nullam laoreet
          tristique ex.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce vel neque eget velit laoreet posuere quis sit amet augue.
          Phasellus eu volutpat eros. Quisque odio nibh, rhoncus nec dignissim
          sagittis, faucibus non ex. Nullam laoreet tristique ex.
        </p>
      </div>
    </div>
  );
}

export function Socials() {
  return (
    <div className="flex space-x-4 mx-auto justify-center md:justify-start mt-6 md:mt-4">
      <a
        href="https://github.com/ilefM"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/mohammed-ilef-ikhelef-70935a1b2/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>

      <a
        href="https://www.instagram.com/ilef.m.i/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
    </div>
  );
}

export default AboutMe;
