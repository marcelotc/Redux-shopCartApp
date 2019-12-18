import React from 'react';
import { MdAddShoppingCart}  from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-olympikus-quest-unissex/06/D22-2777-006/D22-2777-006_detalhe1.jpg?resize=280:280" alt=""></img>
        <strong>Tenis legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} colo="#fff/"/>3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-olympikus-quest-unissex/06/D22-2777-006/D22-2777-006_detalhe1.jpg?resize=280:280" alt=""></img>
        <strong>Tenis legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} colo="#fff"/>3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-olympikus-quest-unissex/06/D22-2777-006/D22-2777-006_detalhe1.jpg?resize=280:280" alt=""></img>
        <strong>Tenis legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} colo="#fff"/>3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-olympikus-quest-unissex/06/D22-2777-006/D22-2777-006_detalhe1.jpg?resize=280:280" alt=""></img>
        <strong>Tenis legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} colo="#fff"/>3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-olympikus-quest-unissex/06/D22-2777-006/D22-2777-006_detalhe1.jpg?resize=280:280" alt=""></img>
        <strong>Tenis legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} colo="#fff"/>3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
