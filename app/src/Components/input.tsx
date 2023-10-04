import { Component } from "react";

interface inputProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

class Input extends Component<inputProps> {
  render() {
    return (
      <div>
        <label>
          {this.props.name}
          <input
            name={this.props.name}
            type={this.props.type}
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
          />
        </label>
      </div>
    );
  }
}

export default Input;
