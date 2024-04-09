import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuizById } from "../../Services/apiServices";
import _ from "lodash";

const DetailQuiz = () => {
  const param = useParams();
  const quizId = param.id;

  useEffect(() => {
    fetchQuizById();
  }, [quizId]);

  const fetchQuizById = async () => {
    const res = await getQuizById(quizId);
    if (res && res.EC === 0) {
      let raw = res.DT;
      let data = _.chain(raw)
        // Group the elements of Array based on `color` property
        .groupBy("id")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => ({ questionId: key, question: value }))
        .value();
      console.log(data);
    }
  };

  return <div>DetailQuiz</div>;
};
export default DetailQuiz;
