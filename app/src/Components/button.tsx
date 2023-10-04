import React from "react";
interface ButtonProps {
  name: string;
  onClick: () => void;
}
class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>{this.props.name}</button>
      </div>
    );
  }
}

export default Button;
