import Langs from "./Langs"


export function About(){

    const langcard = Langs.map((language) => {
        return(
         
                <div class="langcard">
                    <h>{language.lang}</h>
                            
                </div>

           
        )
    })

    return (
        <div className="master-container">
            <div className='about-container'>
                <div className="text-container">
                    <h1>
                        About Me
                    </h1>
                    
                    <p className="text-spacing">
                        Hey, I'm Giancarlo but you can say Gian. I am a 3rd year Computer Science student at TMU. I love playing playing volleyball
                        and working out. I especially love listening to music while I work out and when I do homework. I also love food and I always
                        search for new places in the GTA to try and review. I sometimes like playing video games as well, especially Lethal Company.
                    </p>

                    <p className="text-spacing">
                        On my spare time, I like creating programs like discord bots, websites, and small video games. I want to get into more
                        full-stack development as it incorporates alot of cool ideas together to form a nice website. Additionally, I am interested
                        in tweaking with AI programs. I want to create something that uses AI, as it has been the recent boom for many companies.
                        My current goal is to create a workout tracker that uses AI to allow for people to see their progress more easily by
                        using an AI to create queries that go into a database that stores their statistics and then using that query to visualize
                        their progress.
                    </p>

                    <div>
                        <a href="https://www.torontomu.ca/programs/undergraduate/computer-science/"><img className="about-tmu"src={ require ('./images/tmulogo.jpg')} alt=""/></a>
                        <a><img className="about-ai"src={ require ('./images/AI.png')} alt=""/></a>
                    </div>
                </div>
            </div>
            <div className='about-container-technical'>
                    <div className="about-left">
                        <h3>Technical Skills</h3>
                        <p>Python</p>
                        <p>Java</p>
                        <p>Javscript</p>
                        <p>React</p>
                        <p>SQL</p>
                        <p>C</p>
                        <p>C#</p>
                        <p>.NET</p>
                        <p>MongoDB</p>
                        <p>Node.js</p>
                        <p>Express</p>
                        <p>PowerBI</p>
                        <p>PowerApps</p>
                        <p>PowerAutomate</p>
                    </div>
                    <div className="about-right">
                        <h3>Relevant classes</h3>
                        <p>Algorithms</p>
                        <p>Data Structures</p>
                        <p>Intro to UNIX/C/C++</p>
                        <p>Intro to Software Engineering</p>
                        <p>Operating Systems I</p>
                        <p>Software Tools for Startups</p>
                    </div>
            </div>
        </div>

        
    
    )
}