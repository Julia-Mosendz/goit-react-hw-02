import css from "./Options.module.css";

function Options(props) {
  return (
    <ul className={css.list}>
      <li>
        <button
          className={css.button}
          type="button"
          onClick={() => {
            props.updateFeedback("good");
          }}
        >
          Good
        </button>
      </li>

      <li>
        <button
          className={css.button}
          type="button"
          onClick={() => {
            props.updateFeedback("neutral");
          }}
        >
          Neutral
        </button>
      </li>

      <li>
        <button
          className={css.button}
          type="button"
          onClick={() => {
            props.updateFeedback("bad");
          }}
        >
          Bad
        </button>
      </li>

      <li>
        <button
          className={css.button}
          type="button"
          onClick={() => {
            props.resetFeedback();
          }}
        >
          Reset
        </button>
      </li>
    </ul>
  );
}

export default Options
