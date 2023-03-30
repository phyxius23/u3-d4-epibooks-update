import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import books from '../data/books/fantasy.json'

const AllTheBooks = () => (
  <Container>
    <Row className='g-4'>
      {books.map((elem)=>(
        <Col xs={12} md={6} lg={4} xl={3} key={`elem-${elem.asin}`}>
          <Card className='h-100'>
            <Card.Img variant="top" src={elem.img} />
            <Card.Body className='mt-auto'>
              <Card.Title>{elem.title}</Card.Title>
              <Card.Text>
                <Badge>{elem.category}</Badge>
              </Card.Text>
              <Card.Text className='text-end'>€ {elem.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>      
      ))}
    </Row>
  </Container>
);

export default AllTheBooks;