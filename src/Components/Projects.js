import ProjectList from "./ProjectList"
import Langs from "./Langs"


export function Projects(){
    const langcard = Langs.map((language) => {
        return(
         
                <div class="langcard">
                    <h>{language.lang}</h>
                            
                </div>

           
        )
    })

    const projcard = ProjectList.map((item) => {
        return(
         
                <div class="card">
                    <div class="first-content">
                        <span className="icon-margin">{item.name}</span>
                            <div>
                                {item.icons.map((icon, index) => (
                                    <a><img className="contacts-img"src={require(`./images/${icon}`)} alt=""/></a>
                                ))}
                            
                            </div>
                    </div>
                    <div class="second-content">
                        <span>{item.description}</span>
                    </div>
                </div>

           
        )
    })

    return (
        <div className="proj-container">

            <div className="projtitle">
                <h>Here are my current projects</h>
            </div>

            <div className="langcardholder">{langcard}</div>
            

            <div className="grid">{projcard}</div>
        </div>
      
        
       
    )
}