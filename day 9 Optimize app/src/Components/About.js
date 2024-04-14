import UserClass from "./UserClass";
import User from "./User";
//this is parent
const About = () => {
    return(
        <div>
           <h1>About</h1> 
           <h2>This is namaste react web series</h2>
           <UserClass name = {"deepak (class)"} location={"dhanbad class"}/>
           <UserClass name = {"ElonMusk (class)"} location={"USA (class)"}/>
        </div>
    );
};
export default About;