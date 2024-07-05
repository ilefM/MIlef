import profilepic from '../assets/profilepic.jpg';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function AboutMe() {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:max-w-[800px] mt-20 sm:mx-auto">
        <div className="order-1 mx-auto sm:mx-0">
          <img
            className="w-[150px] sm:w-[250px] rounded-full"
            src={profilepic}
            alt="profile picture"
          />
        </div>
        <div className="order-2 text-center sm:text-left mt-8 mx-auto sm:my-auto max-w-[380px]">
          <div className="text-lg">Mohammed Ilef</div>
          <div className="text-6xl">Ikhelef</div>
          <div className="flex space-x-4 mx-auto justify-center sm:justify-start mt-4 sm:mt-2">
            <FaInstagram size={22} />
            <FaGithub size={21} />
            <CiLinkedin size={22} />
          </div>
          <p className="mt-4 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>

      {/* <div className="border-2 max-w-[400px] text-center sm:text-left">
        
      </div> */}
    </>
  );
}

export default AboutMe;
