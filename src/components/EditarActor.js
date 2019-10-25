// +-------------+----------------------+------+-----+---------------------+-------------------------------+
// | Field       | Type                 | Null | Key | Default             | Extra                         |
// +-------------+----------------------+------+-----+---------------------+-------------------------------+
// | actor_id    | smallint(5) unsigned | NO   | PRI | NULL                | auto_increment                |
// | first_name  | varchar(45)          | NO   |     | NULL                |                               |
// | last_name   | varchar(45)          | NO   | MUL | NULL                |                               |
// | last_update | timestamp            | NO   |     | current_timestamp() | on update current_timestamp() |
// +-------------+----------------------+------+-----+---------------------+-------------------------------+

import React, { Component } from "react";
import { Link } from "react-router-dom";

class ActorDef {
  constructor() {
    this.actor_id = 0;
    this.first_name = "";
    this.last_name = "";
  }
}

export class EditarActor extends Component {
  // este component tiene que traer un cliente de SQL y mostrarlo en los inputs
  // el PK de la fila lo recibe en la url

  state = {
    actor: new ActorDef()
  };

  componentDidMount() {
    //traersenla fila
    fetch(`http://localhost:3000/actor/${this.props.match.params.id}`)
      .then(stream => {
        return stream.json();
      })
      .then(json => {
        this.setState({ actor: json });
      });
  }
  render() {
    return (
      <div>
        <input
          type="hidden"
          value={this.state.actor.actor_id}
          onChange={e => {}}
        />
        <input
          value={this.state.actor.first_name}
          onChange={e =>
            this.setState({
              actor: { ...this.state.actor, first_name: e.target.value }
            })
          }
          className="form-control"
        />
        <input
          value={this.state.actor.last_name}
          onChange={e =>
            this.setState({
              actor: { ...this.state.actor, last_name: e.target.value }
            })
          }
          className="form-control"
        />
        <button
          className="btn btn-default"
          onClick={e => {
            this.actualizar();
            this.setState({ actor: new ActorDef() });
          }}
        >
          Actualiza
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          className="btn btn-default"
          onClick={e => {
            this.grabarNuevo();
            this.setState({ actor: new ActorDef() });
        
          }}
        >
          Nuevo
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.borrar} className="btn btn-default">
          Borrar
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/">listado</Link>
      </div>
    );
  }
  borrar = e => {
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    fetch("http://localhost:3000/actor", {
      method: "DELETE",
      headers: headers,
      body: JSON.stringify(this.state.actor)
    });
  };

  actualizar = e => {
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    fetch("http://localhost:3000/actor", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(this.state.actor)
    });
  };

  grabarNuevo = e => {
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    fetch("http://localhost:3000/actor", {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(this.state.actor)
    });
  };
}
