import "../../style/coisasUsuais.css";
import "../../style/globalStyle.css";
import "./index.css";
import { Filter } from "../Filter";

import React from "react";

import { useState } from "react";
import RenderCards from "../Cards";

let arrValues = [
    {
        description: "descrição",
        type: "entrada",
        value: 5,
    },
    {
        description: "descrição 2",
        type: "saida",
        value: 15,
    },
];

export function DashBoard({ callback }) {
    const [bank, setBank] = useState(arrValues);
    const [filter, setFilter] = useState("Todos");

    function TotalMoney() {
        let contador = 0;

        bank.forEach((element) => {
            element.type === "entrada"
                ? (contador += element.value)
                : (contador -= element.value);
        });

        return <span>{contador}</span>;
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
                            obj[document.getElementById("value").id] = Number(
                                document.getElementById("value").value
                            );
                            obj[document.getElementById("type").id] =
                                document.getElementById("type").value;

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
                            <label htmlFor="description">
                                Ex: Compra de roupas
                            </label>
                        </div>
                        <div className="div2">
                            <div className="flex column">
                                <label htmlFor="value">Valor</label>
                                <input
                                    type="number"
                                    id="value"
                                    placeholder="$"
                                />
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
                                $<TotalMoney /> ,00
                            </p>
                        </div>
                        <p>O valor se refere ao saldo</p>
                    </div>
                </div>
                <div className="divMain2">
                    <div className="divMain2Header flex justifyBet">
                        <h2>Resumo financeiro</h2>
                        <div className="divButtons flex gap12">
                            <button
                                onClick={(event) => {
                                    Filter(event, filter, setFilter);
                                }}
                            >
                                Todos
                            </button>
                            <button
                                onClick={(event) => {
                                    Filter(event, filter, setFilter);
                                }}
                            >
                                Entradas
                            </button>
                            <button
                                onClick={(event) => {
                                    Filter(event, filter, setFilter);
                                }}
                            >
                                Saídas
                            </button>
                        </div>
                    </div>
                    <ul>
                        {bank.map((element, index) => {
                            return RenderCards(
                                element,
                                index,
                                bank,
                                setBank,
                                filter
                            );
                        })}
                    </ul>
                </div>
            </main>
        </div>
    );
}
