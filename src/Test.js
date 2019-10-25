export class Nuevo extends Component {
	state = { mail: '' };
	render() {
		return (
			<div>
				<input
					onChange={(e) => {
						this.setState({ email: e.target.value });
					}}
					placeholder="escribe tu mail"
				/>
				<Hijo email={this.state.mail} />
				{JSON.stringify(this.state.email)}
			</div>
		);
	}
}

export class Hijo extends Component {
	render() {
		return <div>tu email es : {this.props.email}</div>;
	}
}




export class Mostardatos extends Component {
	render() {
		return (
			<div id="mimodal" className="modal2-content">
				<h3>CLIENTE</h3>
				{/* {  console.log({JSON.stringify(this.props.c)})} */}

				<div className="container-fluid">
					<div>
						<input
							title="Nombre"
							className="form-control"
							placeholder="nombre"
							value={this.props.cliente.nombre}
						/>
						<input
							title="PrimerApellido"
							className="form-control"
							placeholder="PrimerApellido"
							value={this.props.cliente.primerApellido}
						/>
						<input
							title="PrimerApellido"
							className="form-control"
							placeholder="segundoApellido"
							value={this.props.cliente.segundoApellido}
						/>
						<input
							title="PrimerApellido"
							className="form-control"
							placeholder="segundoApellido"
							value={this.props.cliente.segundoApellido}
						/>
						<input
							title="telefono"
							className="form-control"
							placeholder="telefono"
							value={this.props.cliente.telefono}
						/>

						{console.log('this.props.cliente', this.props.cliente)}
					</div>
					<div />
				</div>
			</div>
		);
	}
}

import React, { Component } from 'react';

import React, { Component } from 'react';
import { PedidosDef } from '.';

class Pedido{
  constructor() {
    this.fecha = ''
    this.productos = []
    this.recibido = false
  }
}


import React, { Component } from 'react'

export default class Test2 extends Component {
  render() {
    return (
      <div>
                   <input
          type="checkbox"
          checked={this.state.pedido.recibido}
						placeholder=" "
						className="form-control"
						onChange={(e) => {
							console.log(e.target.value);
							// llevar al state el valor de este input
							this.setState({ pedido: {...this.state.pedido, recibido: ! this.state.pedido.recibido } });
						}}
          />

        
      </div>
    )
  }
}







export default class Input extends Component {
	render() {
    state ={
     cliente = { email: 'manuel@gmail.com' },
     pedido: new Pedido()

    }
	
		return (
			<div>
				<div>
          <input
          type="date"
          value={this.state.pedido.fecha}
						placeholder=" "
						className="form-control"
						onChange={(e) => {
							console.log(e.target.value);
							// llevar al state el valor de este input
              this.setState({ pedido: {...this.state.pedido, fecha: e.target.value } });
						}}
          />
           <input
          type="checkbox"
          checked={this.state.pedido.recibido}
						placeholder=" "
						className="form-control"
						onChange={(e) => {
							console.log(e.target.value);
							// llevar al state el valor de este input
							this.setState({ pedido: {...this.state.pedido, recibido: ! this.state.pedido.recibido } });
						}}
          />

					<input
						value={this.state.cliente.email}
						placeholder=" "
						className="form-control"
						onChange={(e) => {
							console.log(e.target.value);
							// llevar al state el valor de este input
							this.setState({ cliente: { email: e.target.value } });
						}}
					/>
					{JSON.stringify(this.state.email)}
				</div>
			</div>
		);
	}
}
