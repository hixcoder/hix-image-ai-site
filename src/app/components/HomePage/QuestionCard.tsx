export default function QuestionCard(props: {
  question: string;
  answer: string;
  isMain: boolean;
}) {
  const mainCard = () => {
    return props.isMain ? (
      <div className="flex flex-col h-fit bg-white p-8 rounded-xl shadow-md drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)]">
        <h1 className="text-xl font-medium">{props.question}</h1>
        <hr className=" my-5" />
        <p>{props.answer}</p>
      </div>
    ) : (
      <div className="flex flex-col h-fit text-white">
        <h1 className="text-lg font-bold">{props.question}</h1>
        <p className="text-[#ffffffa4] my-5 text-sm font-light">
          {props.answer}
        </p>
      </div>
    );
  };
  return mainCard();
}
