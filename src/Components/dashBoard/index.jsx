import "../../style/coisasUsuais.css";
import "../../style/globalStyle.css";
import "./index.css";
import { RemoveCard } from "../Cards";

import trash from "../../imgs/trash.svg";
import { useState } from "react";

let arrValues = [
  {
    description: "descrição",
    type: "entrada",
    value: "5",
  },
  {
    description: "descrição 2",
    type: "saida",
    value: "15",
  },
];

export function DashBoard({ callback }) {
  const [bank, setBank] = useState(arrValues);

  function RenderCards(element, index) {
    if (element.type === "entrada") {
      return (
        <li id={index} className="liGreen" key={index}>
          <div className="divLi1">
            <h3>{element.description}</h3>
            <span>{element.type}</span>
          </div>
          <div className="divLi2">
            <p>R${element.value},00</p>
            <img
              onClick={() => {
                return setBank(bank.splice(index, 1));
              }}
              src={trash}
              alt=""
            />
          </div>
        </li>
      );
    } else {
      return (
        <li id={index} className="liRed" key={index}>
          <div className="divLi1">
            <h3>{element.description}</h3>
            <span>{element.type}</span>
          </div>
          <div className="divLi2">
            <p>R${element.value},00</p>
            <img
              onClick={() => {
                return setBank(bank.splice(index, 1));
              }}
              src={trash}
              alt=""
            />
          </div>
        </li>
      );
    }
  }

  function TotalMoney(newValue, oldValue) {
    if (newValue.value > 0) {
      return <span>{oldValue + newValue.value}</span>;
    } else {
      return <span>{oldValue - newValue.value}</span>;
    }
  }

  return (
    <div className="containerDash">
      <header>
        <div>
          <h1>
            <span>Nu</span> Kenzie
          </h1>
          <button onClick={callback}>Inicio</button>
        </div>
      </header>
      <main className="containerMain">
        <div className="divMain">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const obj = {};

              obj[document.getElementById("description").id] =
                document.getElementById("description").value;
              obj[document.getElementById("value").id] =
                document.getElementById("value").value;
              obj[document.getElementById("type").id] =
                document.getElementById("type").value;

              //console.log(bank);
              return setBank([...bank, obj]);
            }}
          >
            <h3>Descrição</h3>
            <div className="div1 flex column">
              <input
                type="text"
                id="description"
                placeholder="Digite aqui sua descrição"
              />
              <label htmlFor="description">Ex: Compra de roupas</label>
            </div>
            <div className="div2">
              <div className="flex column">
                <label htmlFor="value">Valor</label>
                <input type="number" id="value" placeholder="$" />
              </div>
              <div className="flex column">
                <label htmlFor="type">Tipo de valor</label>
                <select id="type">
                  <option value="entrada">Entrada</option>
                  <option value="saida">Saida</option>
                </select>
              </div>
            </div>
            <button>Inserir valor</button>
          </form>
          <div className="divFooter">
            <div className="flex justifyBet">
              <p>Valor total:</p>
              <p>
                ${" "}
                {bank.reduce((oldValue, newValue) => {
                  return TotalMoney(newValue, oldValue);
                }, 0)}{" "}
                ,00
              </p>
            </div>
            <p>O valor se refere ao saldo</p>
          </div>
        </div>
        <div className="divMain2">
          <div className="divMain2Header flex justifyBet">
            <h2>Resumo financeiro</h2>
            <div className="divButtons flex gap12">
              <button>Todos</button>
              <button>Entradas</button>
              <button>Saídas</button>
            </div>
          </div>
          <ul>
            {bank.map((element, index) => {
              return RenderCards(element, index);
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
