import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <UserClass
          name={"Jaydeep Sarkar (Class)"}
          location={"Dehradun Class"}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>

//       <UserClass name={"Jaydeep Sarkar (Class)"} location={"Dehradun Class"} />
//     </div>
//   );
// };

export default About;
