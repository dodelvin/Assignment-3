import './index.css'
function FlashCard({ card, onEdit, onDelete }) {
  return (
    <div className="flashcard-container">
    <div className="flashcard">
      <div className="flashcard-front">
        <p>{card.question}</p>
      </div>
      <div className="flashcard-back">
        <p>{card.answer}</p>
      </div>
    </div>
    <div className="card-actions">
      <button className="secondary" onClick={() => onEdit(card)}>Edit</button>
      <button className="danger" onClick={() => onDelete(card.id)}>Delete</button>
    </div>
    <div className="last-modified">
      Last Modified: {new Date(card.lastModified).toLocaleString()}
    </div>
    <div className="status">Status: {card.status}</div>
  </div>
  );
}

export default FlashCard;
