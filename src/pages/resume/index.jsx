import "./style.css"
import "./skillsrange"
import Resume from "./skillsrange"

export const ResumePage = () => {
  return (
    <div className="ss">
       {/* <div className="container"> */}
      <div className="content_block">
      <h2>My Resume</h2>
      <p className="ff" >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
      <h3>Skills</h3>
      < Resume />
      <h3>Expierience</h3>
      <p className="resume_expierience">09/2012 - Present time</p>
      <p>Economist</p>
      <h3>Education</h3>
      <p className="resume_education">2007 - 2012 ACADEMY OF PUBLIC ADMINISTRATION UNDER THE PRESIDENT OF THE KYRGYZ REPUBLIC</p>
      <p>Economist</p>
      <h3>Extra Education</h3>
      <p className="extra_education">2011 - 2012 Certified Accounting Practitioner (CAP)</p>
      </div>
      </div>

     //</div> 
  
  )
}