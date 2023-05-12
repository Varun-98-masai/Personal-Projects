import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(item) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.avatar} />
      <Card.Body>
        <Card.Title>{item.first_name} {item.last_name}</Card.Title>
        <Card.Text>
        {item.gender}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;