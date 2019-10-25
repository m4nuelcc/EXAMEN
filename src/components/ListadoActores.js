import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { nbsp} from "../index";
export class ListarActores extends Component {
	state = {
		actores: []
	};

	componentDidMount = () => {
		fetch('http://localhost:3000/actor')
			.then((resp) => {
				return resp.json();
			})
			.then((data) => this.setState({ actores: data }));
	};

	render() {
		return (
		 <div className="modal2-content">
				{this.state.actores.map((cli, i) => {
					return (
						<div key={i} style={{ float: 'left', width: '25%'}}>
							{/* llamamos al componentes EditarClientes con la id */}
							<Link to={`/actor/${cli.actor_id}`}> {cli.first_name} </Link>
						   { nbsp(10)}
							{cli.last_name}
							{ nbsp(10)} 
						</div>
					);
				})}
				{/* <pre> {JSON.stringify(this.state, undefined, 2)} </pre> */}
			</div>

		);
	}
}


































// Test2 hace un select de la lista de los actores
export class Test2 extends Component {
	state = {
		actores: [],
		a: ''
	};


	componentDidMount = () => {
		fetch('http://localhost:3000/actor')
			.then((resp) => {
				return resp.json();
			})
			.then((data) => this.setState({ actores: data }));
	};

	grabarNuevo = e => {
		let headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
		fetch('http://localhost:3000/actor', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(this.state.a)
		})    
	} 

	render() {
		return (
			<div>
				<select
					type="number"
					placeholder="id"
					onChange={(e) => {
						this.setState({ a: this.state.actores[e.target.value] });
					}}
				>
					<option> id </option>
					{this.state.actores.map((cli, i) => (
						<option key={i} value={i}>
							{' '}
							{cli.actor_id} {cli.first_name} {cli.last_name}{' '}
						</option>
					))}
				</select>

				<input
					value={this.state.a.first_name}
					onChange={(e) =>
						this.setState({
							actor: { ...this.state.a.first_name, first_name: e.target.value }
						})}
					className="form-control"
				/>
				<input
					value={this.state.a.last_name}
					onChange={(e) =>
						this.setState({
							actor: { ...this.state.a.last_name, last_name: e.target.value }
						})}
					className="form-control"
				/>
				<button onClick={this.grabarNuevo}>GRABAR</button>
				<button onClick={this.borrarActor}>BORRAR</button>
				<button onClick={this.actualizarActor}>ACTUALIZAR</button>
			</div>
		);
	}

}

//   grabarNuevo = () => {
// 		let url = `http://localhost:3000/actor`;
// 		fetch(url, {
// 			method: 'PUT',
// 			headers: {
// 				'Accept': 'application/json',
//         'Content-Type': 'application/json'},
//         body: JSON.stringify(this.state)

// 		})

// 	};

// 	borrarActor = () => {
//     let url = `http://localhost:3000/actor`
//     fetch( url, {
//       method: 'DELETE',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json' },
// 			body: JSON.stringify(this.state)
// 		})
// 	}

// 	actualizarActor = () => {
// 		let url = `http://localhost:3000/actor`
// 		fetch(url, {
// 				method: 'POST',
// 				headers: {
// 						'Accept': 'application/json',
// 						'Content-Type': 'application/json'
// 				},

// 				body: JSON.stringify(this.state)
// 		})

// }

// 	render() {
// 		return (
// 			<div>
// 				<input onChange={(e) => this.setState({ first_name: e.target.value })} />
// 				<input onChange={(e) => this.setState({ last_name: e.target.value })} />
// 				<input onChange={(e) => this.setState({ actor_id: e.target.value })} />
// 				<button onClick={this.grabarNuevo}>GRABAR</button>
// 				<button onClick={this.borrarActor}>BORRAR</button>
// 				<button onClick={this.actualizarActor}>ACTUALIZAR</button>
// 				{/* {this.componentDidMount()} */}

// 				{this.state.actores.map( (cli, i) => {
// 					 return <div key={i}>
//         <Link to={`/actor/${cli.actor_id}`}>{cli.first_name}</Link>

//              {cli.last_name}, {cli.actor_id}
//        </div> })}
//         {/* <pre>{JSON.stringify(this.state, undefined, 2)},{console.log(this.state.actores)}</pre> */}
// 			</div>
// 		);
// 	}
// }

// 	grabarNuevo = () => {
// 		let url = `http://192.168.105.122:3000/insert?nombre=${this.state.nombre}&precio=${this.state.precio}`;
// 		fetch(url, {
// 			method: 'GET',
// 			headers: {
// 				Accept: 'application/json',
// 				'Content-Type': 'application/json'
// 			}
// 		})
// 			.then((resp) => {
// 				return resp.json();
// 			})
// 			.then(json => console.log(json));
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<input onChange={(e) => this.setState({ nombre: e.target.value })} />
// 				<input onChange={(e) => this.setState({ precio: e.target.value })} />
// 				<button onClick={this.grabarNuevo}>grabar</button>
// 			</div>
// 		);
// 	}
// }

// import React, { Component } from 'react'

// export default class Test1 extends Component {
//   state = {
//    propietarios: []
//   }
//   componentDidMount() {
//     fetch('http://localhost:3000/tabla/actor', {
//     method: 'GET',
//     headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json' }
//     })
//     .then( ( res ) => { return res.json()} )
//     .then ( aqui => this.setState({propietarios: aqui}))
//     }

//     render() {
//       return (
//         <div>
//         {this.state.propietarios.map((prod, i) => {
//             return (
//               <div clasnname="fichaProducto">
//                 {" "}
//                 {prod.first_name}   {prod.last_name}

//               </div>
//             );
//           })}
//           <form action="http://localhost:3000/insert" method="GET">

// <input type="text" name="nombre" placeholder="nombre"/>
// <input type="number" name="precio"/>
// <input type="submit"/>
// </form>
//       </div>
//     )
//   }
// }

// componentDidMount(){
//   // fetch('',{}).then()
//   fetch('http://192.168.105.122:3000/', {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'content-type': 'application/json'}
//   })
//   .then(respBuena => {
//     console.log(respBuena)
//     return respBuena.json()})

// }
