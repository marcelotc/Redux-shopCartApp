import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../Cart/actions';

import { ProductList } from './styles';

class Home extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price)
      /* Fazendo chamada da função fora do render, para que a função não seja 
        chamada sempre que algo renderizar.
      */
    }));

    this.setState({ products: data });

  }

  handleAddProduct = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title}></img>
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button type="button" onClick={() => this.handleAddProduct(product)}>
              <div>
                <MdAddShoppingCart size={16} colo="#fff/" />3
            </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

//Converte pedaços do actions da aplicação em propriedades dentro do componente
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);