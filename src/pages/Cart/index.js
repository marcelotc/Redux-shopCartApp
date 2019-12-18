import React from 'react';
import { MdRemoveCircle, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
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
          <tr>
            <td>
              <img src="https://static.netshoes.com.br/produtos/tenis-olympikus-quest-unissex/06/D22-2777-006/D22-2777-006_detalhe1.jpg?resize=280:280" alt="Tênis"></img>
            </td>
            <td>
              <strong>Tênis muito massa</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircle size={20} color="#7159c1"></MdRemoveCircle>
                </button>
                <input type="number" readOnly value={2}></input>
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1"></MdAddCircleOutline>
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,80</strong>
            </td>
            <td>
              <button type="button"><MdDelete size={20} colo="#7159c1"></MdDelete></button>
            </td>
          </tr>
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
