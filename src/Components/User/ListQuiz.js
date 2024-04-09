import { useEffect, useState } from "react";
import { getQuizByUser } from "../../Services/apiServices";
import { useNavigate } from "react-router-dom";
import "./ListQuiz.scss";
const ListQuiz = (props) => {
  const [arrQuiz, setArrQuiz] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchAllQuiz();
  }, []);

  const fetchAllQuiz = async () => {
    const res = await getQuizByUser();
    if (res && res.EC === 0) setArrQuiz(res.DT);
  };
  return (
    <div className="list-quiz-container container">
      {arrQuiz &&
        arrQuiz.length > 0 &&
        arrQuiz.map((quiz, index) => {
          return (
            <div
              key={`${index}-quiz`}
              className="card"
              style={{ width: "18rem" }}
            >
              <img
                src={`data:image/png;base64,${quiz.image}`}
                alt="anh cua toi"
              />
              <div className="card-body">
                <h5 className="card-title">Quiz {index + 1}</h5>
                <p className="card-text"> {quiz.description}</p>
                <button
                  onClick={() =>
                    navigate(`/quiz/${quiz.id}`, {
                      state: { quiztitle: quiz.description, id: quiz.id },
                    })
                  }
                  className="btn btn-primary"
                >
                  Go somewhere
                </button>
              </div>
            </div>
          );
        })}

      {arrQuiz && arrQuiz.length === 0 && <p>Bạn chưa có bài test nào cả.</p>}
    </div>
  );
};
export default ListQuiz;
