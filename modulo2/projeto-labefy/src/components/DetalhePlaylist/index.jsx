// import React from "react";
// import { getPlaylist, getMusica } from "../../services/requests";

// class DetalhePlaylist extends React.Component {
//   state = {
//     playlist: "",
//     musica: "",
//   };

//   componentDidMount() {
//     getPlaylist(this.props.url, this.savePlaylist);
//     getMusica(this.props.url, this.savePlaylist);
//   }

//   savePlaylist = (data) => {
//     this.setState({ playlist: data });
//   };

//   saveMusic = (data) => {
//     this.setState({ musica: data });
//   };

//   render() {
//     return (
//       <div>
//         {this.state.playlist.name && this.state.musica ? (
//           <div>
//             <p>Nome: {this.state.playlist.name}</p>
//             <p>Musica: {this.state.musica}</p>
//           </div>
//         ) : (
//           <p>Carregando... </p>
//         )}
//          <button onClick={this.props.irParaListaPlaylists}>Voltar para Lista</button>
//       </div>
//     );
//   }
// }

// export default DetalhePlaylist;
