import React from "react";
import Answers from "Answers";
import Popup from "Popup";
import Header from "Header";
import Footer from "Footer";
import data from "../data/data";

class Main extends React.Component {
  state = {
    nr: 0,
    total: data.length,
    showButton: false,
    questionAnswered: false,
    score: 0,
    displayPopup: "flex",
  };

  pushData(nr) {
    this.setState({
      question: data[nr].question,
      answers: [
        data[nr].answers[0],
        data[nr].answers[1],
        data[nr].answers[2],
        data[nr].answers[3],
      ],
      correct: data[nr].correct,
      nr: this.state.nr + 1,
    });
  }

  componentWillMount() {
    this.pushData(this.state.nr);
  }

  nextQuestion = () => {
    let { nr, total } = this.state;

    if (nr === total) {
      this.setState({
        displayPopup: "flex",
      });
    } else {
      this.pushData(nr);
      this.setState({
        showButton: false,
        questionAnswered: false,
      });
    }
  };

  handleShowButton = () => {
    this.setState({
      showButton: true,
      questionAnswered: true,
    });
  };

  handleStartQuiz = () => {
    this.setState({
      displayPopup: "none",
      nr: 1,
    });
  };

  handleIncreaseScore = () => {
    this.setState({
      score: this.state.score + 1,
    });
  };

  render() {
    let {
      nr,
      total,
      question,
      answers,
      correct,
      showButton,
      questionAnswered,
      displayPopup,
      score,
    } = this.state;

    return (
      <div>
        <Header />
        <Popup
          style={{ display: displayPopup }}
          score={score}
          total={total}
          startQuiz={this.handleStartQuiz}
        />
        <div className="app-container">
          <div className="app-box row">
            <div className="col-lg-10 col-lg-offset-1">
              <div id="question">
                <h4>
                  Question {nr} / {total}
                </h4>
                <p>{question}</p>
              </div>
              <Answers
                answers={answers}
                correct={correct}
                showButton={this.handleShowButton}
                isAnswered={questionAnswered}
                increaseScore={this.handleIncreaseScore}
              />
              <div id="submit">
                {showButton ? (
                  <button className="next-btn" onClick={this.nextQuestion}>
                    {nr === total ? "Finish quiz" : "Next question"}
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
