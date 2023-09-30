const Footer = () => {
  const FooterStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16,
    textAlign: 'center',
    margin: '2rem 0',
    gridColumn: 'span 2',
  };
  return (
    <footer style={FooterStyle}>
      <br />{' '}
      <em>
        Phone book
        <br />
        Department of Silly Walks, Ministry of Sound,
        <br />
        U.K. 2023
      </em>
    </footer>
  );
};

export default Footer;
