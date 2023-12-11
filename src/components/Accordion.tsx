import { useState } from "react";

interface AccordionProps {
  title: string;
}

const Accordion = ({ title }: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onClick = () => {
    setIsExpanded((state) => !state);
  };

  return (
    <section className="py-2">
      <button
        className="bg-gray-100 hover:bg-gray-200 font-bold py-2 px-4 rounded w-full text-left"
        onClick={onClick}
      >
        <span className="mr-2">&gt;</span>
        {title}
      </button>
      {isExpanded && <div className="mt-4">Details</div>}
    </section>
  );
};

export default Accordion;
