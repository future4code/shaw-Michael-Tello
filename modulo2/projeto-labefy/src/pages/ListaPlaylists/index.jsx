// import axios from "axios";
// import React from "react";
// import { ContainerPlaylist,CardPlayslist,DeleteButton } from "./styles";
// import { getListaPlaylist } from "../../services/requests";


// class ListaPlaylists extends React.Component {
//   // ANCHOR STATE
//   state = {
//     listaPlaylist: [],

//   };

//   componentDidMount() {
//     getListaPlaylist(this.savePlaylist)
//   }

//   savePlaylist = (data) => {
//     this.setState({ listaPlaylist: data });
//   };

//   // ANCHOR GET
//   pegarPlaylists = async () => {
//     try {
//       const res = await axios.get(BASE_URL, headers);
//       this.setState({ nomePlaylists: res.data.result.list });
//     } catch (error) {
//       alert("Erro em pegar as playlists");
//     }
//   };



//   //   ANCHOR DELETE
//   deletarPlaylist = (playlistId) => {
//     window.confirm("Tem certeza que deseja deletar?")
//       ? axios.delete(`${BASE_URL}/${playlistId}`, headers).then((res) => {
//           alert("Usuário apagado com sucesso!");
//           this.pegarPlaylists();
//         })
//       : alert("Voce cancelou a operação");
//   };

 
 

//   render() {
//     const listaPlaylist = this.state.nomePlaylists.map((lista) => {
//       return (
//         <CardPlayslist
//           onClick={() => this.props.irParaDetalhePlaylist(lista.url)}
//           key={lista.id}
//         >
//           {lista.name}

//           <DeleteButton onClick={() => this.deletarPlaylist(lista.id)}>
//             X
//           </DeleteButton>
//         </CardPlayslist>
//       );
//     });

//     return (
//       <ContainerPlaylist>
//         <button onClick={this.props.irParaAdicionarPlaylist}>
//           TELA ADICIONAR PLAYLIST
//         </button>
//         <label>Lista da Playlist</label>
//         {listaPlaylist}
        
//       </ContainerPlaylist>
//     );
//   }
// }

// export default ListaPlaylists;
