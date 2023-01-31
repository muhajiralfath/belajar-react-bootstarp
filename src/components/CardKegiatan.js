import Card from "react-bootstrap/Card";

export const CardKegiatan = (props) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Text>{props.deskripsi}</Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
};

export default CardKegiatan;
