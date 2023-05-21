import { Container } from 'react-bootstrap';

export default function About() {
  return (
    <Container className="p-3">
      <h1 className="header" style={{ color: 'white' }}>
        About me
      </h1>
      <h5>
        My name's Chris. I'm the proud father of two adorable kids, and husband
        to an amazing woman. When I'm not hanging out with my family, I am
        either working around my off-grid homestead or squirreled away in my
        office working on a project or learning new skills.
      </h5>
      <br />
      <h5>
        I am creating this site to explore what's possible utilizing AI to do my
        day job, and experiment with other cool tech stuff!
      </h5>
    </Container>
  );
}
