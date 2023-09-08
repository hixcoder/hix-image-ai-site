import QuestionCard from "./QuestionCard";

export default function Questions() {
  const mainQuestions = [
    {
      question: "What is Midjourney AI?",
      answer:
        "Midjourney AI is a versatile text-to-image service that enables you to generate compelling images from textual descriptions. People utilize Midjourney AI to create AI artwork for various scenarios including logos, portraits, architecture, and more.",
    },
    {
      question: "How to use Midjourney AI?",
      answer:
        "Simply input your prompt into the input box on the right and wait for about a minute to receive your Midjourney AI image. Also, you own the rights to the AI artwork and can download the high-definition image for free. No need to use Discord, everything can be completed on midjourneyai.ai.",
    },
    {
      question: "How much is Midjourney AI?",
      answer:
        "All users can enjoy 20 free uses. You can get an additional 20 opportunities in the Midjourney app. Before any payment is required, you have ample opportunities to experience our services for free.",
    },
    {
      question: "Midjourney AI prompts",
      answer:
        "We have also pre-set a large number of excellent Midjourney prompts to help you generate high-quality AI artwork more easily.",
    },
  ];
  const otherQuestions = [
    {
      question: "How to use Midjourney for free?",
      answer:
        "The official Midjourney Discord channel is no longer free to use. However, you can use the Midjourney AI image generation service for free at midjourneyai.ai.",
    },
    {
      question: "How to use Midjourney on Discord?",
      answer:
        "First, register for Discord and Midjourney, accepting the invitation to Midjourney's Discord channel, and type /subscribe in the #newbies channel. Then, choose your Midjourney plan and start creating images back in Discord.",
    },
    {
      question: "How to use Midjourney privately?",
      answer:
        "You can effortlessly enable Midjourney's private mode by typing the /private command. However, please note that you must be a subscribed paying member to access this feature.",
    },
    {
      question: "How to write good Midjourney prompts?",
      answer:
        "You can refer to this universal formula for website prompts: Character Description + Main Character + Character Action + Art Form + Lighting Effects + Color Style + Perspective + Image Size",
    },
    {
      question: "How to access Midjourney?",
      answer: "Use for free at midjourneyai.ai.",
    },
    {
      question: "What is the copyright for using Midjourney generated images?",
      answer:
        "Midjourney offers its premium subscribers the freedom to use their generated images commercially for any business purpose, such as for marketing material and cover art.",
    },
  ];
  return (
    <>
      <div
        className="grid grid-cols-2 justify-center items-center gap-x-8 gap-y-8 
        bg-gradient-to-tr from-blue-500 to-blue-600 h-fit mb-20 px-8 py-24"
      >
        {mainQuestions.map((element) => (
          <QuestionCard
            question={element.question}
            answer={element.answer}
            isMain={true}
          />
        ))}
      </div>
      <h1 className="text-white text-4xl mx-8">Frequently asked questions</h1>
      <div
        className="grid grid-cols-2 justify-center items-center gap-x-8 gap-y-8 
       h-fit mb-20 px-8 py-16"
      >
        {otherQuestions.map((element) => (
          <QuestionCard
            question={element.question}
            answer={element.answer}
            isMain={false}
          />
        ))}
      </div>
    </>
  );
}
