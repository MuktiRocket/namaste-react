import React from "react";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy User",
        location: "Default location",
        Company: "Dummy Company",
        avatar_url: "https://dummyuser.com",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    // const { name, location } = this.props;
    const { name, location, company, avatar_url } = this.state.userInfo;
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img className="rounded-lg" src={avatar_url} />
        <h2 className="font-bold py-5 text-lg">Name: {name}</h2>
        <h3 className="font-bold py-2 text-sm">Location: {location}</h3>
        <h4 className="font-bold py-2 text-sm">Company: {company}</h4>
      </div>
    );
  }
}
