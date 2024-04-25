import { Component } from "react";
import instance from "./RestClient";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    try {
      await instance({
        url: "login/",
        method: "POST",
      }).then((res) => {
        console.log(res);
      });
    } catch (e) {
      console.error(e);
    }
  }
}
