import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getNoteById } from '../utils/requests';

const SingleNote = () => {
  const { id } = useParams();

  const { data: note, isLoading } = useQuery({
    queryKey: ['note', id],
    queryFn: () => getNoteById(id),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>{note.content}</h3>
      <p>{note.user}</p>
      <p>{note.important ? 'Important' : 'Not Important'}</p>
      <Link to={'/notes'}>Back</Link>
    </div>
  );
};

export default SingleNote;
