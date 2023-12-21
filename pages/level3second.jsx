import Bridge from "@/components/bridge";
import QuestionSec from "@/components/questionSec";
import { useContext } from "react";
import { MainContext } from "@/context";

export default function Second3() {
  const { answer, setAnswer, CheckAnswer, isCorrect, level3Second } =
    useContext(MainContext);

  return (
    <div className="h-screen px-[30px] font-roboto">
      <div className="w-full h-full flex flex-col justify-center items-center">
        {!isCorrect ? (
          <QuestionSec
            setAnswer={setAnswer}
            question={level3Second.question}
            func={() => CheckAnswer(answer, level3Second.correctAnswer)}
          />
        ) : (
          <Bridge text={level3Second.bridge} />
        )}
      </div>
    </div>
  );
}
