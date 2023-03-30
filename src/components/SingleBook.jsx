import { Component } from 'react';
import {Card, Badge} from 'react-bootstrap';

class SingleBook extends Component {

  state = {
    selected: false
  };
  
  render() {
    return (
      <Card className='h-100'>
        <Card.Img variant="top" 
          src={this.props.book.img} 
          onClick={() => { this.setState({selected: !this.state.selected})}}
          style={{ border: this.state.selected ? '3px solid green' : 'unset' }}
        />

        <Card.Body className='mt-auto'>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>
            <Badge>{this.props.book.category}</Badge>
          </Card.Text>
          <Card.Text className='text-end'>€ {this.props.book.price}</Card.Text>
        </Card.Body>
      </Card>  
    )
  }
}

export default SingleBook;

/* <Card.Img variant="top" src={this.props.book.img} onClick={() => {this.state.selected ? this.setState({selected: false}) : this.setState({selected: true})}} /> */
/* <Card.Img variant="top" src={this.props.book.img} onClick={() => this.setState({this.state.selected ? false : true})} /> */
