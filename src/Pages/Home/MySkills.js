import React from 'react';
import data from "../../data/index.json";
import { useTheme } from '../Home/ThemeContext';

export default function MySkills() {
  const { theme } = useTheme();

  return (
    <section className="skills--section" id="skillsSection" style={{ backgroundColor: theme.palette.background.default }}>
      <div className="skills--container">
        <p className="section--title" style={{ color: theme.palette.text.primary }}>Skills & Expertise</p>
        <h2 className="skills--section--heading" style={{ color: theme.palette.text.primary }}>What I Can Do</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((skill, index) => (
          <div 
            key={index} 
            className="skills--section--card" 
            style={{ 
              backgroundColor: theme.palette.mode === 'dark' ? '#1E1E1E' : theme.palette.background.paper, 
              borderColor: theme.palette.mode === 'dark' ? '#444' : '#ccc', 
              borderWidth: '1px', 
              borderStyle: 'solid'
            }}
          >
            <div 
              className="skills--section--img" 
              style={{ 
                backgroundColor: theme.palette.mode === 'dark' ? '#fff' : 'transparent', 
                borderRadius: '50%',
                padding: '10px'
              }}
            >
              <img src={skill.src} alt={skill.title} style={{ width: '50px', height: '50px' }} />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title" style={{ color: theme.palette.text.primary }}>{skill.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
