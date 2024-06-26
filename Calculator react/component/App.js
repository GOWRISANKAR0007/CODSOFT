import React, {
  Component
} from "react";
import Buttons from './buttons';
import Result from './result';
import "./calc.css";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: "0",
    }
    this.handleclicks = this.handleclicks.bind(this);
  }

  handleclicks = (value) => {
    switch (value) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
      case '+':
      case '-':
      case '/':
      case '*':
        if (this.state.result === "0") {
          this.setState({
            result: value
          });

        } else {
          this.setState({
            result: this.state.result + value
          });
        }
        break;
      case '=':
        console.log(this.state.result);
        this.setState({
          result: eval(this.state.result)
        })
        break;
      case 'c':
        this.setState({
          result: ''
        })
        break;
      case '+/-':
        this.setState({
          result: parseInt(this.state.result, 10) * -1
        });
        break;
      case '%':
        this.setState({
          result: parseFloat(this.state.result, 10) / 100
        });
        break;
      default:
        break;
    }

  }

  render() {
    return ( <
      div className = "myCalculator" >
      <
      Result result = {
        this.state.result
      }
      /> <
      Buttons Buttonclicked = {
        this.handleclicks
      }
      />
    </div>
    );
  }
}

export default App;