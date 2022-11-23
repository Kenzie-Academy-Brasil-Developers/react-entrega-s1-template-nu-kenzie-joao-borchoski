import React from "react";

import "../../style/coisasUsuais.css";
import "../HomePage/style.css";
import imgHome from "../../imgs/illustration.svg";

export function Home({ callback }) {
    return (
        <div className="container">
            <div className="containerLeft">
                <h3>
                    <span>Nu</span> Kenzie
                </h3>
                <h1>Centralize o controle das suas finanças</h1>
                <span>de forma rápida e segura</span>
                <button onClick={callback}>Iniciar</button>
            </div>
            <div className="containerRight">
                <img src={imgHome} alt="imgSite" />
            </div>
        </div>
    );
}
