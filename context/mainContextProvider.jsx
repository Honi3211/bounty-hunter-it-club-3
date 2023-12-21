import { Questions } from "@/public/questionsContent";
const { createContext, useState } = require("react");

export const MainContext = createContext(null);

export const MainContextProvider = ({ children }) => {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const level1First = Questions[0].level1.firstTeam;
  const level2First = Questions[0].level2.firstTeam;
  const level3First = Questions[0].level3.firstTeam;
  const level1Second = Questions[0].level1.secondTeam;
  const level2Second = Questions[0].level2.secondTeam;
  const level3Second = Questions[0].level3.secondTeam;
  const level1Third = Questions[0].level1.thirdTeam;
  const level2Third = Questions[0].level2.thirdTeam;
  const level3Third = Questions[0].level3.thirdTeam;

  const CheckAnswer = (answer, correctAnswer) => {
    if (answer == correctAnswer) {
      alert("Зөв хариуллаа, баяр хүргэе!");
      setIsCorrect(true);
    } else {
      alert("Хариулт буруу байна.");
    }
  };

  return (
    <MainContext.Provider
      value={{
        answer,
        setAnswer,
        isCorrect,
        setIsCorrect,
        CheckAnswer,
        level1First,
        level2First,
        level3First,
        level1Second,
        level2Second,
        level3Second,
        level1Third,
        level2Third,
        level3Third,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
