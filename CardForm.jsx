import { useState, useEffect } from "react";

function CardForm({ onSave, initialData = {}, onClose }) {
  const [cardData, setCardData] = useState({
    question: "",
    answer: "",
    status: "Noted",
  });

  useEffect(() => {
    if (initialData.id) {
      setCardData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...cardData, lastModified: new Date().toISOString() });
  };

  return (
    <div className="card-form">
      <div className="card-header">
        <h2>{initialData.id ? "Edit Card" : "Create Card"}</h2>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">Question</label>
        <input
          id="question"
          name="question"
          value={cardData.question}
          onChange={handleChange}
          placeholder="Enter the question"
        />

        <label htmlFor="answer">Answer</label>
        <textarea
          id="answer"
          name="answer"
          value={cardData.answer}
          onChange={handleChange}
          placeholder="Enter the answer"
        />

        <label htmlFor="status">Status</label>
        <select name="status" value={cardData.status} onChange={handleChange}>
          <option value="Learned">Learned</option>
          <option value="Want to Learn">Want to Learn</option>
          <option value="Noted">Noted</option>
        </select>

        <button className="primary" type="submit">
          Save Card
        </button>
      </form>
    </div>
  );
}

export default CardForm;
