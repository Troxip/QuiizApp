import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswered = useRef();
  if (!shuffledAnswered.current) {
    shuffledAnswered.current = [...answers];
    shuffledAnswered.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswered.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) cssClass = "selected";

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        )
          cssClass = answerState;

        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelect(answer)} className={cssClass}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
