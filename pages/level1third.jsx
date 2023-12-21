import Bridge from "@/components/bridge";
import QuestionSec from "@/components/questionSec";
import { useContext } from "react";
import { MainContext } from "@/context";

export default function Third1() {
  const { answer, setAnswer, CheckAnswer, isCorrect, level1Third } =
    useContext(MainContext);

  return (
    <div className="h-screen px-[30px] font-roboto">
      <div className="w-full h-full flex flex-col justify-center items-center">
        {!isCorrect ? (
          <QuestionSec
            setAnswer={setAnswer}
            question={level1Third.question}
            func={() => CheckAnswer(answer, level1Third.correctAnswer)}
          />
        ) : (
          <Bridge text={level1Third.bridge} />
        )}
      </div>
    </div>
  );
}
