import { useField } from '../hooks/useField';

const Form = () => {
  //   const [name, setName] = useState('');
  //   const [born, setBorn] = useState('');
  //   const [height, setHeight] = useState('');
  const name = useField('text');
  const born = useField('date');
  const height = useField('number');

  return (
    <article>
      <form>
        name:
        {/* <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        /> */}
        {/* <input type={name.type} value={name.value} onChange={name.onChange} /> */}
        <input {...name} />
        <br />
        birthdate:
        {/* <input
          type="date"
          value={born}
          onChange={(event) => setBorn(event.target.value)}
        /> */}
        {/* <input type={born.type} value={born.value} onChange={born.onChange} /> */}
        <input {...born} />
        <br />
        height:
        {/* <input
          type="number"
          value={height}
          onChange={(event) => setHeight(event.target.value)}
        /> */}
        {/* <input
          type={height.type}
          value={height.value}
          onChange={height.onChange}
        /> */}
        <input {...height} />
      </form>
      <div>
        {name.value} {born.value} {height.value}
      </div>
    </article>
  );
};

export default Form;
