import { CoursePart } from '../App';

interface PartProps {
  part: CoursePart;
}

const Part: React.FC<PartProps> = ({ part }) => {
  switch (part.kind) {
    case 'basic':
      return (
        <div>
          <h3>{part.name}</h3>
          <p>Exercise count: {part.exerciseCount}</p>
          <p>Description: {part.description}</p>
        </div>
      );
    case 'group':
      return (
        <div>
          <h3>{part.name}</h3>
          <p>Exercise count: {part.exerciseCount}</p>
          <p>Group project count: {part.groupProjectCount}</p>
        </div>
      );
    case 'background':
      return (
        <div>
          <h3>{part.name}</h3>
          <p>Exercise count: {part.exerciseCount}</p>
          <p>Description: {part.description}</p>
          <p>Background material: {part.backgroundMaterial}</p>
        </div>
      );
    case 'special':
      return (
        <div>
          <h3>{part.name}</h3>
          <p>Exercise count: {part.exerciseCount}</p>
          <p>Description: {part.description}</p>
          <p>
            Required skills:
            {part.requirements.map((req, index) => (
              <span key={index}>
                <br />
                {req},
              </span>
            ))}
          </p>
          {part.backgroundMaterial && (
            <p>Background material: {part.backgroundMaterial}</p>
          )}
          {part.groupProjectCount && (
            <p>Group project count: {part.groupProjectCount}</p>
          )}
        </div>
      );
    default:
      return null;
  }
};

export default Part;
