import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';

const BookList = (props) => (
  <Container>
    <Row className='g-4'>
      {props.libreria.map((elem, index)=>(
        <Col xs={12} md={6} lg={4} xl={3} key={`elem-${index}`}>
          <SingleBook book={elem}/>
        </Col>      
      ))}
    </Row>
  </Container>
);

export default BookList;