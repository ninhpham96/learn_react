import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getQuizById } from "../../Services/apiServices";
import _ from "lodash";
import "./DetailQuiz.scss";
import Question from "./Question";

const DetailQuiz = () => {
  const param = useParams();
  const quizId = param.id;
  const location = useLocation();
  const [quiz, setQuiz] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchQuizById = async () => {
      const res = await getQuizById(quizId);
      if (res && res.EC === 0) {
        let raw = res.DT;
        let data = _.chain(raw)
          .groupBy("id")
          .map((value, key) => {
            let answers = [];
            let questionDescription,
              image = null;
            value.forEach((item, index) => {
              if (index === 0) {
                questionDescription = item.description;
                image = item.image;
              }
              item.answers.isChecked = false;
              answers.push(item.answers);
            });
            return { questionId: key, answers, questionDescription, image };
          })
          .value();
        setQuiz(data);
      }
    };
    fetchQuizById();
  }, [quizId]);

  const handleNextClick = () => {
    if (index + 1 >= quiz.length) return;
    setIndex(index + 1);
  };
  const handlePreClick = () => {
    if (index - 1 < 0) return;
    setIndex(index - 1);
  };

  const handleCheckbox = (answerId, questionId) => {
    let clonequiz = _.cloneDeep(quiz);
    let question = clonequiz.find((item) => +item.questionId === +questionId);
    if (question && question.answers.length > 0) {
      let answer = question.answers.map((item) => {
        if (+item.id === +answerId) {
          item.isChecked = !item.isChecked;
        }
        return item;
      });
      question = { ...question, answers: answer };
    }
    let index = clonequiz.findIndex((item) => +item.questionId === +questionId);
    clonequiz[index] = question;
    setQuiz(clonequiz);
  };

  const handleFinishClick = () => {};
  return (
    <div className="detailquiz-container">
      <div className="left-content">
        <div className="quiz-title">
          Quiz {quizId}: {location.state.quiztitle}
        </div>
        <hr />
        <div className="quiz-content">
          <Question
            handleCheckbox={handleCheckbox}
            index={index}
            data={quiz && quiz.length > 0 ? quiz[index] : []}
          />
        </div>
        <div className="quiz-footer">
          <button onClick={handlePreClick} className="btn btn-primary">
            Previous
          </button>
          <button onClick={handleNextClick} className="btn btn-secondary">
            Next
          </button>
          <button onClick={handleFinishClick} className="btn btn-warning">
            Finish
          </button>
        </div>
      </div>
      <div className="right-content">Đây là countdown</div>
    </div>
  );
};
export default DetailQuiz;
