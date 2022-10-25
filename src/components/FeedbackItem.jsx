import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from 'react'
import FeedbackContext from "../context/FeedbackContext";


const FeedbackItem = ({ item }) => {
  const {feedback , deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card reverse={item.id % 2 ? true : false}>
      <div className="num-display"> {item.rating} </div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="hotpink" />
      </button>
      <button onClick={()=> editFeedback(item)} className="edit"><FaEdit color="hotpink" /></button>
      <div className="text-display"> {item.text} </div>
    </Card>
  );
};

export default FeedbackItem;
