import clsx from "clsx"
import TestimonialCard from "./TestimonialCard"
import { Testimonial } from "@/lib/types";

interface Props {
    testimonials: Testimonial[];
    currIndex: number;
}

const TestimonialTrack = ({ testimonials, currIndex }: Props) => {

  return (
    <div className={clsx(
        "h-120",
        "flex justify-start items-center gap-[64px]",
        "transition-transform duration-400 ease-[var(--ease-premium)]"
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
