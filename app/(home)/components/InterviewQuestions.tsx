"use client"

import Lottie from "lottie-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"

import jobInterviewAnimation from "../../../public/assets/lottie-files/job-interview.json"

const interviewQuestions = [
  {
    question: "Tell me about Yourself",
    answer: `I’m Tom and I belong to California. I’ve completed my Master of Financial Engineering Program from the University of California. I am energetic & a great communicator. My previous experience in the same position helped me build confidence and develop advanced skills for this position. I am trustworthy and punctual, and I can always be depended on to finish what I start. I also consider myself hardworking, reliable, dependable, helpful, outgoing, organized, honest, and cooperative.`,
  },
  {
    question: "How Did You Hear About This Position?",
    answer: `I learned about this position through a job posting on your company’s careers page and was immediately drawn to the opportunity to contribute my skills and experience to such an esteemed organization.`,
  },
  {
    question: "Why do you consider yourself suitable for this job?",
    answer: `I believe my strong background in financial engineering, combined with my practical experience and passion for the industry, makes me a strong candidate for this position. I have a proven track record of delivering results and am always eager to learn and grow in my career.`,
  },
  {
    question: "Why should we hire you?",
    answer: `You should hire me because I bring a unique combination of skills and a positive attitude. I am committed to excellence and have the ability to work collaboratively with others while also taking initiative when needed. My previous experience has prepared me to tackle the challenges of this role effectively.`,
  },
  {
    question: "What are your strengths?",
    answer: `My key strengths include strong analytical skills, attention to detail, and the ability to communicate complex ideas clearly. I am also highly adaptable and able to thrive in fast-paced environments. Additionally, my interpersonal skills allow me to build positive relationships with colleagues and clients alike.`,
  },
]

const InterviewQuestions: React.FC = () => {
  return (
    <section className="pb-6 md:pb-10 -mt-0.5">
      <MaxWidthWrapper>
        <h2 className="text-xl md:text-3xl font-bold text-left mb-2">
          Common Interview Questions
        </h2>
        <p className="text-xs font-thin text-left mb-6">
          Stand Out in Your Next Job Interview!
        </p>
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-5">
            <Lottie animationData={jobInterviewAnimation} loop={true} />
          </div>
          <div className="col-span-12 md:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {interviewQuestions.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-sm text-left md:text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-left md:text-sm">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default InterviewQuestions
