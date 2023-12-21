import Bridge from "@/components/bridge";
import QuestionSec from "@/components/questionSec";
import { useContext } from "react";
import { MainContext } from "@/context";

export default function First1() {
  const { answer, setAnswer, CheckAnswer, isCorrect, level1First } =
    useContext(MainContext);

  return (
    <div className="h-screen px-[30px] font-roboto">
      <div className="w-full h-full flex flex-col justify-center items-center">
        {!isCorrect ? (
          <QuestionSec
            setAnswer={setAnswer}
            question={level1First.question}
            func={() => CheckAnswer(answer, level1First.correctAnswer)}
          />
        ) : (
          <Bridge text={level1First.bridge} />
        )}
      </div>
    </div>
  );
}
