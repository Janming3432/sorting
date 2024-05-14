import React, {useState} from "react";
import "./input.css";

// class Input extends React.Component {
//   state = { input: "", errorMessage: "", inputReceived: false };

//   onFormSubmit = (event) => {
//     event.preventDefault();
//     if (parseInt(this.state.input) > 20 || parseInt(this.state.input) === 0)
//       this.setState({ errorMessage: "Enter a number between 1 and 20" });
//     else if (this.state.input.length === 0 || isNaN(parseInt(this.state.input)))
//       this.setState({ errorMessage: "Invalid Number" });
//     else {
//       this.setState({ input: "", errorMessage: "", inputReceived: true });
//       this.props.onSubmit(parseInt(this.state.input));
//     }
//   };

//   render() {
//     return (
//       <form onSubmit={this.onFormSubmit}>
//         <input
//           className="numInput"
//           type="text"
//           value={this.state.input}
//           maxLength={2}
//           placeholder="Enter a no. from 1-20"
//           onChange={(e) => this.setState({ input: e.target.value })}
//           disabled={this.state.inputReceived}
//         />
//         <br />
//         <div className="err">{this.state.errorMessage}</div>
//       </form>
//     );
//   }
// }

const Input = ({onSubmit, inputdisabled}) => {
    const [input, setInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (parseInt(input) > 20 || parseInt(input) <= 0)
            setErrorMessage('Enter a number between 1 and 20');
        else if (input.length === 0 || isNaN(parseInt(input)))
            setErrorMessage('Invalid Number');
        else {
            setInput('');
            setErrorMessage('');
            onSubmit(parseInt(input));
        }
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                className="numInput"
                type="text"
                value={input}
                maxLength={2}
                placeholder="Enter a no. from 1-20"
                onChange={(e) => setInput(e.target.value)}
                disabled={inputdisabled}
            />
            <br />
            {errorMessage ? 
                <div className="err">{errorMessage}</div> : null
            }
        </form>
  );
};

export default Input;
