            
            import React from "react";
            import { Link, Route, Routes } from "react-router-dom"



            export function Home(){
            return(
              
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
            )
            }