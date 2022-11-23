import React from "react";
import trash from "../../imgs/trash.svg";
import "../dashBoard/index.css";

export default function RenderCards(element, index, array, setArray) {
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
                            let arrClick = [...array];
                            arrClick.splice(index, 1);
                            setArray(arrClick);
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
                            let arrClick = [...array];
                            arrClick.splice(index, 1);
                            setArray(arrClick);
                        }}
                        src={trash}
                        alt=""
                    />
                </div>
            </li>
        );
    }
}
