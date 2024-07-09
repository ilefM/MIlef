import profilepic from '../assets/profilepic.jpg';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function AboutMe() {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:justify-around sm:max-w-[900px] mt-20 mx-2 sm:mx-auto">
        <div className="order-1 m-auto sm:mx-0">
          <img
            className="w-[150px] sm:w-[250px] rounded-full"
            src={profilepic}
            alt="profile picture"
          />
        </div>
        <div className="order-2 text-center sm:text-left mt-8 mx-auto sm:mx-0 sm:my-auto max-w-[480px]">
          <div className="text-lg">Mohammed Ilef</div>
          <div className="text-6xl">Ikhelef</div>
          <div className="flex space-x-4 mx-auto justify-center sm:justify-start mt-6 sm:mt-4">
            <FaInstagram size={27} />
            <FaGithub size={27} />
            <CiLinkedin size={27} />
          </div>
          <p className="mt-8 text-justify">
            Sed aliquet nibh eget nisi vehicula, quis blandit erat rhoncus. Duis
            neque augue, varius non lobortis sed, suscipit ac erat. Nunc
            placerat risus eget orci accumsan, suscipit ultrices mauris
            molestie. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. In lacus purus, mattis id
            nunc eu, sagittis volutpat eros. Phasellus suscipit est eu enim
            scelerisque cursus.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
