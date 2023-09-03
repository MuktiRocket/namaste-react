import { Component } from "react";
import UserClass from "./UserClass";
import { userContext } from "../utils/userContext";

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        LoggedIn User:
        <userContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </userContext.Consumer>
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
