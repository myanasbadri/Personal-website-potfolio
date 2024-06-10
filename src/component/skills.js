
import React from 'react';
 // Make sure to create and import your CSS file if not using Tailwind

const skills = [
  { name: 'CSS', level: 4 },
  { name: 'Tailwind', level: 0 },
  { name: 'Javascript', level: 4 },
  { name: 'Angular', level: 0 },
  { name: 'Laravel', level: 2 },
  { name: 'React', level: 4 },
  { name: 'Ruby/Rails', level: 2 },
  { name: 'Node.js', level: 4 },
];

const Skill = ({ name, level }) => (
  <div className="skill">
    <span>{name}</span>
    <div className="dots">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`dot ${i < level ? 'filled' : 'lowfilled'}`}></span>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <div className="skills-container" id='skills'>
    <h1>My skills</h1>
    <div className="skills">
      <div className="skills-left">
        {skills.slice(0, 4).map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </div>
      <div className="skills-right">
        {skills.slice(4).map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
