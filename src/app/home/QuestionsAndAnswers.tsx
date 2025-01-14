import { Link } from "components/documentation";

const QAS = [
  {
    question:
      "Q1. What is a resume Maker? Why resume Maker is better than resume template doc?",
    answer: (
      <>
        <p>
        Nowadays, there are two primary methods to create a resume. One approach involves using a resume template, such as those available in Office or Google Docs, which can be customized based on individual requirements. The other approach is to utilize a resume maker—an online tool that lets you input your details and automatically generates a professionally formatted resume.
        </p>
        <p>
        When using a resume template, manual adjustments like copying, pasting, and tweaking spacing are necessary, which can be both tedious and prone to errors. Formatting issues, such as inconsistent bullet points or mismatched fonts, often arise during this process. In contrast, a resume maker eliminates these problems by automatically formatting your resume. It also allows effortless customization, such as changing fonts or text sizes with just a click. In conclusion, compared to templates, resume makers are significantly more user-friendly and time-efficient.
        </p>
      </>
    ),
  },
  {
    question:
      "Q2. What Makes Resume Maker Different from Other Resume Builders and Templates?",
    answer: (
      <>
        <p>
        Besides Resume Maker, several excellent free resume builders are available, such as Reactive Resume and FlowCV. However, Resume Maker distinguishes itself with two unique features
        </p>{" "}
        <p>
          <span className="font-semibold">
            1. Specifically Designed for the U.S. Job Market and Best Practices.
          </span>
          <br />
          Unlike other tools that cater to a global audience and include extensive customization options, Resume Maker focuses exclusively on U.S. hiring standards. For example, it omits the option to include a profile picture to minimize potential bias or discrimination. The tool simplifies the resume structure by including only essential sections like profile, work experience, education, and skills, while leaving out non-critical ones such as references. Additionally, it adheres to a single-column, top-down format rather than a two-column layout, as the former performs better with ATS platforms. <br />{" "}
        </p>
        <p>
          <span className="font-semibold">
            2. Strong Emphasis on Privacy
          </span>{" "}
          <br />
          While many resume builders require email registration and store user data on their servers, Resume Maker ensures complete data privacy. All information entered is stored locally in the user’s browser, ensuring that only the user has access. No sign-up is needed to use the tool, making it highly secure and privacy-focused.
        </p>
      </>
    ),
  },
];

export const QuestionsAndAnswers = () => {
  return (
    <section className="mx-auto max-w-3xl divide-y divide-gray-300 lg:mt-4 lg:px-2">
      <h2 className="text-center text-3xl font-bold">Resume Maker Questions & Answers</h2>
      <div className="mt-6 divide-y divide-gray-300">
        {QAS.map(({ question, answer }) => (
          <div key={question} className="py-6">
            <h3 className="font-semibold leading-7">{question}</h3>
            <div className="mt-3 grid gap-2 leading-7 text-gray-600">
              {answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
