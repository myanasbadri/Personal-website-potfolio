
import React from 'react';
import { FaPython, FaUbuntu, FaGitAlt, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiFlutter, SiMongodb, SiErpnext } from 'react-icons/si';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


const skills = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'Flutter', icon: <SiFlutter /> },
  { name: 'Ubuntu', icon: <FaUbuntu /> },
  { name: 'Git Source Control', icon: <FaGitAlt /> },
  { name: 'ERPNext', icon: <SiErpnext /> },
  { name: 'Mongodb', icon: <SiMongodb /> },
  { name: 'Html & CSS', icon: <><FaHtml5 /> <FaCss3Alt /></> },
  { name: 'JavaScript', icon: <FaJs /> },
];
/*sscroll
const boxs = document.querySelectorAll('.as');
const option ={
  root:null;
  rootMargin:'100px';
}
const observer =new IntersectionObserver((entries) =>{
  el.taget.classList.toggle({data-aos="fade-right"},el.Intersecting)
},option)
/*end  */ 


const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className='anas' id='skills'>
    <div className="container text-center my-5 ">
      <div className='container-skills-tete'> <h1 className="mb-4 skills-tete " data-aos="fade-up">-My Skills-</h1></div>
      <div className="row">
        {skills.map((skill, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-4 mb-4 ">
            <div className="cards skill-card" data-aos="fade-right">
              <div className="cards-body ">
                <div className="icon">{skill.icon}</div>
                <p className="cards-text ">{skill.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Skills;
