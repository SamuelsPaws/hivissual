import clsx from "clsx"
import TestimonialCard from "./TestimonialCard"
import { Testimonial } from "@/lib/types";

interface Props {
    testimonials: Testimonial[];
    translateStr: string;
}

const TestimonialTrack = ({ testimonials, translateStr }: Props) => {

  return (
    <div className={clsx(
        "h-120",
        "flex justify-start items-center gap-[64px]",
        "duration-400",
        translateStr
    )}>
        {testimonials.map(({ message, author, imageUrl }, index) =>
            <TestimonialCard
                key={index}
                message={message}
                author={author}
                imageUrl={imageUrl}
            />
        )}
    </div>
  )
}

export default TestimonialTrack