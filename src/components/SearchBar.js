import React, { Component } from 'react';
import styles from './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

export default class SearchBar extends Component {
  state = { term: '' }

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.SearchPokemon(this.state.term)
  };

  render() {
    return (
      <Form onSubmit={this.onFormSubmit}>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Pesquisa Pokemon:</Form.Label>
        <Form.Control 
          type="text" 
          value={this.state.term} 
          onChange={this.onInputChange} 
          placeholder="Procure pelo seu pokemon favorito aqui! Ex: Pikachu" 
        />
        </Form.Group>
      </Form>
    )
  }
}
