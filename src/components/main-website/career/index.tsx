
import { Link } from "react-router-dom";
import "./career.css"
import CurrentOpening from "./CurrentOpening";
import Gallery from "./Gallery";
import Heading from "./Heading";
import JoinUs from "./JoinUs";


const Career = () => {
  return (
    <div>
      <Gallery/>
      <Heading />
      <JoinUs/>
      <CurrentOpening/>
      <Link to={'/UniversityLandingPage'}>
      <button className="bg-slate-500">landing page</button>
      </Link>
    </div>
  );

};

export default Career;
