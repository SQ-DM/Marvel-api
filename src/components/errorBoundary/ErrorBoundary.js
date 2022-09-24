import { Component } from "react";

//предохранитель
class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error: true,
    });
  }
  render() {
    if (this.state.error) {
      return (
        <div>
          <p className="text-danger text-center">
            <small>`Error...Something broken ;(` </small>
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
