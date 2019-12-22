import React from 'react';
import { connect } from 'react-redux';
import { MdRemoveCircle, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, dispatch }) {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th></th>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title}></img>
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircle size={20} color="#7159c1"></MdRemoveCircle>
                  </button>
                  <input type="number" readOnly value={product.amount}></input>
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1"></MdAddCircleOutline>
                  </button>
                </div>
              </td>
              <td>
                <strong>R$258,80</strong>
              </td>
              <td>
                <button type="button" onClick={() =>
                  dispatch({ type: 'REMOVE_FROM_CART', id: product.id })}>
                  <MdDelete size={20} color="#7159c1"></MdDelete>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="buttons">Finalizar</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(Cart);