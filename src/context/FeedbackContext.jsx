import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is a test feedback",
      rating: 10,
    },
    {
      id: 2,
      text: "This is a test feedback",
      rating: 10,
    },
    {
      id: 3,
      text: "This is a test feedback",
      rating: 10,
    },
    {
      id: 4,
      text: "This is a test feedback",
      rating: 10,
    },
    {
      id: 5,
      text: "This is a test feedback",
      rating: 10,
    },
    {
      id: 6,
      text: "This is a test feedback",
      rating: 10,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

//to delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  //to add feedback 
  const addFeedback = (newFeedback) => {
    newFeedback.id = Math.floor(Math.random() * 10000) + 1;
    setFeedback([newFeedback, ...feedback]);
  };
//update feedback
const updateFeedback = (id, updItem) => {
  setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updItem} : item)))
}
  //set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  }
  


  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback, //or just feedback,
        feedbackEdit: feedbackEdit,
        deleteFeedback: deleteFeedback,
        addFeedback: addFeedback,
        editFeedback: editFeedback,
        updateFeedback: updateFeedback

      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
