import ResumeButton from "./ResumeButton"
import { useNavigate } from 'react-router-dom';
import Resume from './images/GiancarloEvaculaResume.pdf';
export function Experience(){
  
    const navigate = useNavigate();

    const handleViewResume = () => {
      
        const resumeRoute =  './images/GiancarloEvaculaResume.pdf';

    // Navigate to the resume route
    navigate(resumeRoute);
   
    }
    return (
        <div>
            <div className="job-container">
                <div className="projtitle">
                    <h>Experience</h>
                </div>
                <div className="job-card">
                    <a><img className="about-ai"src={ require ('./images/mtologo.jpg')} alt=""/></a>
                    <div className="card-length">
                        <h3>Jr Technical Analyst</h3>
                        <p>Ministry Transportation Ontario</p>
                        <p>Sept 2023 - Dec 2023</p>
                        
                    </div>
                    <div> <a href="https://www.linkedin.com/in/giancarlo-evacula-892a95239"><img className="contacts-img"src={ require ('./images/linkedinicon.png')} alt=""/></a> </div>
                    
                </div >

                <div className="job-card">
                    <a><img className="about-ai"src={ require ('./images/hydroonelogo.jpg')} alt=""/></a>
                    <div className="card-length">
                        <h3>Summer Student</h3>
                        <p>Hydro One</p>
                        <p>Sept 2023 - Dec 2023</p>
                    </div>
                    <div> <a href="https://www.linkedin.com/in/giancarlo-evacula-892a95239"><img className="contacts-img"src={ require ('./images/linkedinicon.png')} alt=""/></a> </div>
                </div>

                <div className="job-card">
                    <a><img className="about-ai"src={ require ('./images/h&mlogo.png')} alt=""/></a>
                    <div className="card-length">
                        <h3>Sales Advisor</h3>
                        <p>H&M</p>
                        <p>Sept 2023 - Dec 2023</p>
                    </div>
                    <div> <a href="https://www.linkedin.com/in/giancarlo-evacula-892a95239"><img className="contacts-img"src={ require ('./images/linkedinicon.png')} alt=""/></a> </div>
                </div>

                <div className="job-card">
                    <a><img className="about-ai"src={ require ('./images/freshlogo.jpg')} alt=""/></a>
                    <div className="card-length">
                        <h3>Cart Pusher</h3>
                        <p>FreshCo</p>
                        <p>Sept 2023 - Dec 2023</p>
                    </div>
                    <div> <a href="https://www.linkedin.com/in/giancarlo-evacula-892a95239"><img className="contacts-img"src={ require ('./images/linkedinicon.png')} alt=""/></a> </div>
                </div>

                <a className="view-resume" href={Resume} download="Resume">
                    View Resume
                </a>

                
            </div>
        </div>
    )
}