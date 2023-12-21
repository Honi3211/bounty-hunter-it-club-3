import Bridge from "@/components/bridge";
import QuestionSec from "@/components/questionSec";
import { useContext } from "react";
import { MainContext } from "@/context";

export default function First3() {
  const { answer, setAnswer, CheckAnswer, isCorrect, level3First } =
    useContext(MainContext);

  return (
    <div className="h-screen px-[30px] font-roboto">
      <div className="w-full h-full flex flex-col justify-center items-center">
        {!isCorrect ? (
          <QuestionSec
            setAnswer={setAnswer}
            question={level3First.question}
            func={() => CheckAnswer(answer, level3First.correctAnswer)}
          />
        ) : (
          <Bridge text={level3First.bridge} />
        )}
      </div>
    </div>
  );
}
