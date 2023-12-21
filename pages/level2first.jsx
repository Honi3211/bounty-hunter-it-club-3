import Bridge from "@/components/bridge";
import QuestionSec from "@/components/questionSec";
import { useContext } from "react";
import { MainContext } from "@/context";

export default function First2() {
  const { answer, setAnswer, CheckAnswer, isCorrect, level2First } =
    useContext(MainContext);

  return (
    <div className="h-screen px-[30px] font-roboto">
      <div className="w-full h-full flex flex-col justify-center items-center">
        {!isCorrect ? (
          <QuestionSec
            setAnswer={setAnswer}
            question={level2First.question}
            func={() => CheckAnswer(answer, level2First.correctAnswer)}
          />
        ) : (
          <Bridge text={level2First.bridge} />
        )}
      </div>
    </div>
  );
}
