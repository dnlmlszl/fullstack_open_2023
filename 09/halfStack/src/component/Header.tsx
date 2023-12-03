interface HeaderProps {
  courseName: string;
}

const Header: React.FC<HeaderProps> = ({ courseName }) => {
  return (
    <section>
      <h1>{courseName}</h1>
    </section>
  );
};

export default Header;
