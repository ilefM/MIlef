import profilepic from '../assets/profilepic.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function AboutMe() {
  return (
    <div className="flex flex-col w-full md:flex-row md:justify-between">
      <div className="order-2 md:order-1 text-center md:text-left mt-8 mx-auto md:mx-0 md:mt-0">
        <div className="text-xl md:text-2xl">Mohammed Ilef</div>
        <div className="text-6xl md:text-8xl font-ralewayLight">Ikhelef</div>
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
        <p className="mt-8 md:mr-8 text-center w-3/4 mx-auto md:w-auto md:text-left md:max-w-[450px]">
          Sed aliquet nibh eget nisi vehicula, quis blandit erat rhoncus. Duis
          neque augue, varius non lobortis sed, suscipit ac erat. Nunc placerat
          risus eget orci accumsan, suscipit ultrices mauris molestie. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. In lacus purus, mattis id nunc eu, sagittis
          volutpat eros. Phasellus suscipit est eu enim scelerisque cursus.
        </p>
      </div>
      <div className="order-1 md:order-2 m-auto md:mx-0">
        <img
          className="w-[200px] md:w-[350px] lg:w-[400px] rounded-full"
          src={profilepic}
          alt="profile picture"
        />
      </div>
    </div>
  );
}

export default AboutMe;
