import css from "./Feedback.module.css";

function Feedback(props) {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        <li>Good: {props.feedback.good}</li>
        <li>Neutral: {props.feedback.neutral}</li>
        <li>Bad: {props.feedback.bad}</li>
      </ul>
      <p className={css.desc}>Total: {props.totalFeedback}</p>
      <p className={css.desc}>Positive: {props.positiveFeedback || 0}%</p>
    </div>
  );
}

export default Feedback
