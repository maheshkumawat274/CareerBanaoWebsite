import AdmissionProcess from "src/components/main-website/admissions/landingpage/AdmissionProcess"
import CollegeAbout from "src/components/main-website/admissions/landingpage/CollegeAbout"
import CollegeLandingPage from "src/components/main-website/admissions/landingpage/CollegeLandingPage"
import CourseFees from "src/components/main-website/admissions/landingpage/CourseFees"
import Scholarship from "src/components/main-website/admissions/landingpage/Scholarship"
import Updates from "src/components/main-website/admissions/landingpage/Updates"

const LandingPages = () => {
  return (
    <>
     <div className="font-poppins">
     <CollegeLandingPage/>
     <CollegeAbout/>
     <Updates/>
     <CourseFees/>
     <AdmissionProcess/>
     <Scholarship/>
     </div>
    </>
  )
}

export default LandingPages