import styled from "styled-components";
import { darken } from 'polished';

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 espaçamentos de grid largura igual */
    grid-gap: 20px;
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 4px;
        padding: 20px;

        img {
            align-self: center;
            max-width: 250px;
        }

        > strong { /* sinal de maior serve para dizer que a estilização só funcione dentro da li */
            font-size: 16px;
            line-height: 20px;
            color: #333;
            margin-top: 5px;
        }

        > span {
            font-size: 21px;
            font-weight: bold;
            margin: 5px 0 20px;
        }

        button {
            background: #7159c1;
            color: #fff;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
            margin-top: auto; /* Joga o botão o mais pra baixo possível se o titulo for muito grande, nesse caso o strong */
            
            display: flex;
            align-items: center;
            transition: background 0.2s;

            &:hover{
                background: ${darken(0.1, '#7159c1')} /* Coisinha desnecessária para o hover do botão, serve para padronizar que cor queremos dar um hover ou escurecer */
            }

            div {
                display: flex;
                align-items: center;
                padding: 12px;
                background: rgba(0,0,0,0.1);

                svg {
                    margin-right: 5px;
                }
            }

            span {
                flex: 1; /* ocupe todo o tamnho possível */
                text-align: center;
                font-weight: bold;
            }
        }
    }
`;