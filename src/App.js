import React from "react";
import style from './style.css'
import { Projects } from "./Components/Projects";

import { Link, Route, Routes } from "react-router-dom"
import { About } from "./Components/About";
import { Experience } from "./Components/Experience";
import { Home } from "./Components/Home"
import  Resume  from "./Components/Resume";
import {Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer'

function App() {
  return (
    <body>
          <div>
            
            <div class="nav-container">
                  <ul class="nav">
                      <li class="nav-item"><Link to="/home">Home </Link></li>
                      <li class="nav-item"><Link to="/about">About </Link></li>
                      <li class="nav-item"><Link to="/experience">Experience </Link></li>
                      <li class="nav-item"><Link to="/projects">Projects</Link></li>
                  </ul>
            </div>
{/* 
            <div className="about-me">
              <h1>
                Hey, I'm Gian
              </h1>
              <p>
                An aspiring Software Developer
              </p>
                <div className="contacts">
                    <a href="mailto:giancarloe1203@gmail.com"><img className="contacts-img"src={ require ('./images/mailicon.png')} alt=""/></a>
                    <a href="https://github.com/Gianev"><img className="contacts-img"src={ require ('./images/githubicon.jpg')} alt=""/></a>
                    <a href="https://www.linkedin.com/in/giancarlo-evacula-892a95239"><img className="contacts-img"src={ require ('./images/linkedinicon.png')} alt=""/></a>
                </div>
            </div>
*/}


            
          </div>
          <Routes>
            <Route index element ={<Home />} />
            <Route path="/about" element ={<About />} />
            <Route path="/home" element ={<Home />} />
            <Route path="/projects" element ={<Projects />} />
            <Route path="/experience" element ={<Experience />} />
            <Route path="/experience/images/GiancarloEvaculaResume.pdf" element ={<Resume />} />
          </Routes>
    </body>
    
  );
}

export default App;
