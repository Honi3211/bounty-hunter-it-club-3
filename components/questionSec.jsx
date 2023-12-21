const QuestionSec = ({ question, setAnswer, func }) => {
  return (
    <div>
      <p className="text-center text-[18px] font-bold">{question}</p>

      <div className="mt-[20px]"></div>

      <div className="w-full h-[40px] flex items-center">
        <input
          type="text"
          className="border-2 border-black w-full h-full rounded-l-md px-[10px] lowercase"
          placeholder="Хариулт"
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        />
        <button
          className="border-2 border-black h-full rounded-r-md px-[10px]"
          onClick={func}
        >
          Хариулах
        </button>
      </div>
    </div>
  );
};

export default QuestionSec;
