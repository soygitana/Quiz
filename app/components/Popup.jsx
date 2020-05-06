import React from "react";

class Popup extends React.Component {
  state = {
    time: "start",
    title: "Welcome to my Quiz!",
    text:
      "This is a quiz application built with ReactJS. <br /><br /> Currently it's loaded with JS questions, but you can easily replace it with differnet questions. <br /><br /> It will dynamically load the question - answer pairs and upload them into the components.",
    buttonText: "Let's start!",
  };

  popupHandle = () => {
    let { time } = this.state;

    if (time === "start") {
      this.setState({
        time: "end",
        title: "Congratulations!",
        buttonText: "Restart",
      });
      this.props.startQuiz();
    } else {
      location.reload();
    }
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      text:
        "You have completed the quiz. <br /> You got: <strong>" +
        this.props.score +
        "</strong> out of <strong>" +
        this.props.total +
        "</strong> questions right.",
    });
  }

  createMarkup(text) {
    return { __html: text };
  }

  render() {
    let { title, text, buttonText } = this.state;
    let { style } = this.props;
    return (
      <div className="popup-container" style={style}>
        <div className="container">
          <div className="col-md-8 col-md-offset-2">
            <div className="popup">
              <h1>{title}</h1>
              <p dangerouslySetInnerHTML={this.createMarkup(text)} />
              <button className="start-btn" onClick={this.popupHandle}>
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
