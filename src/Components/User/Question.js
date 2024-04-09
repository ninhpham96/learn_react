const Question = (props) => {
  const { index, data, handleCheckbox } = props;

  const handleOnChange = (event, answerId, questionId) => {
    handleCheckbox(answerId, questionId);
  };
  return (
    <>
      {data.image && (
        <div className="quiz-image">
          <img
            className="image"
            src={`data:image/png;base64,${data.image}`}
            alt="anh cua toi"
          />
        </div>
      )}
      <div className="quiz-question">
        Question {index + 1}: {data.questionDescription}
      </div>
      {data.answers &&
        data.answers.length > 0 &&
        data.answers.map((answer, index) => {
          return (
            <div key={index} className="quiz-answer">
              <input
                className="form-check-input"
                type="checkbox"
                checked={answer.isChecked}
                onChange={(event) =>
                  handleOnChange(event, answer.id, data.questionId)
                }
              />
              <label className="form-check-label">{answer.description}</label>
            </div>
          );
        })}
    </>
  );
};
export default Question;
