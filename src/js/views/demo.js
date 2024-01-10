import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8 text-center">
          <h1 className="display-3" id="title">
            todos
          </h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8 text-center">
          <ul className="list-group-items">
            <li key="li-1" className="list-group item">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  type="text"
                  className="input-group form-control"
                  placeholder="Que tareas deseas agregar?"
                  onKeyDown={(e) => actions.addList(e)}
                />
              </form>
            </li>
            {store.todoList.map((item, index) => {
              return (
                <li
                  key={`"li${index}"`}
                  className="list-group-item shadow text-left pl-5"
                >
                  {item.label}
                  <span
                    id={`"${index}"`}
                    onClick={() => actions.deleteTask(index)}
                    className="fas fa-trash"
                  ></span>
                </li>
              );
            })}
            <li className="list-group-item shadow list-group-item-light text-left pl-3 min-size">
              {store.todoList.length} item
              {store.todoList.length === 1 ? "" : "s"} left
            </li>
            {/* <li
              className="list-group-item shadow list-group-item-light m-auto p-1"
              style={{ width: "98%" }}
            ></li>
            <li
              className="list-group-item shadow list-group-item-light m-auto p-1"
              style={{ width: "96%" }}
            ></li> */}
          </ul>
          {
            <button
              className="btn shadow btn-danger"
              onClick={() => actions.deleteAll()}
            >
              Delete All
            </button>
          }
        </div>
      </div>
    </div>
  );
};
