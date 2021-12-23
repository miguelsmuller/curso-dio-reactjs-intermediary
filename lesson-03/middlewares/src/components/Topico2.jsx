import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import styled from 'styled-components';

import fetchCientistas from './fetchCientistas';
import { getCientistasError, getCientistas, getCientistasPending } from './../redux/reducers/cientistas';

const TopicoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  border: 1px solid #cecece;
`;


class Topico2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      cientistas: [],
      pending: false
    }
  }

  componentDidMount() {
    const { fetchCientistas } = this.props;
    fetchCientistas();
  }

  render() {
    const { cientistas } = this.state;
    return (
      <TopicoBlock>
        <h1>Cientistas Brasileiras</h1>
        <ul>
          {cientistas.map((cientista, index) => (
            <Item key={index}>
              <div><b>nome:</b> {cientista.name}</div>
              <div><b>área:</b> {cientista.area}</div>
            </Item>
          ))}
        </ul>
      </TopicoBlock>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: getCientistasError(state),
    cientistas: getCientistas(state),
    pending: getCientistasPending(state)
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCientistas: fetchCientistas
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topico2);
