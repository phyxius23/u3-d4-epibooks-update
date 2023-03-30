import {Card, Badge} from 'react-bootstrap';

const SingleBookFn = (props) => (
  <Card className='h-100'>
    <Card.Img variant="top" src={props.book.img} />
    <Card.Body className='mt-auto'>
      <Card.Title>{props.book.title}</Card.Title>
      <Card.Text>
        <Badge>{props.book.category}</Badge>
      </Card.Text>
      <Card.Text className='text-end'>€ {props.book.price}</Card.Text>
    </Card.Body>
  </Card>
)

export default SingleBookFn;