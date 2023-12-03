import { CoursePart } from '../App';
import Part from './Part';

interface ContentProps {
  parts: CoursePart[];
}

const Content: React.FC<ContentProps> = ({ parts }) => {
  return (
    <section>
      {parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </section>
  );
};

export default Content;
