import { useGlobalContext } from '../context/AnecdoteContext';
import { useNavigate } from 'react-router-dom';
import { useField } from '../hooks/useField';

const CreateNew = () => {
  const { addNew, loading } = useGlobalContext();
  const navigate = useNavigate();

  const { reset: resetContent, attributes: content } = useField('text');
  const { reset: resetAuthor, attributes: author } = useField('text');
  const { reset: resetInfo, attributes: info } = useField('text');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });

    resetContent();
    resetAuthor();
    resetInfo();

    navigate('/');
  };

  const handleClear = () => {
    resetContent();
    resetAuthor();
    resetInfo();
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          {/* <input
            name="content"
            type={content.type}
            value={content.value}
            onChange={content.onChange}
          /> */}
          <input {...content} />
        </div>
        <div>
          author
          {/* <input
            name="author"
            type={author.type}
            value={author.value}
            onChange={author.onChange}
          /> */}
          <input {...author} />
        </div>
        <div>
          url for more info
          {/* <input
            name="info"
            type={info.type}
            value={info.value}
            onChange={info.onChange}
          /> */}
          <input {...info} />
        </div>
        <button>create</button>
        <button type="button" onClick={handleClear}>
          reset
        </button>
      </form>
    </div>
  );
};

export default CreateNew;
