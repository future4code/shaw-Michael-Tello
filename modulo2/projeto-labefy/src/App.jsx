import React from "react";
import Header from "./components/Header";
import {AppContainer} from '../styled'



import PlaylistCreationPage from "./components/PlaylistCreationPage";
import PlaylistManagerPage from "./components/PlaylistManagerPage";


class App extends React.Component {
  state = {
    currentPage: "playlistCreationPage"
    
  };

  // ANCHOR EVENTOS

  changePage= (currentPage) => {
    this.setState({currentPage: currentPage})
  }

  irParaListaPlaylists = () => {
    this.setState({ currentPage: "listaPlaylist",clickPlaylistUrl:'' });
  };


  irParaAdicionarPlaylist = () => {
    this.setState({ currentPage: "adicionarPlaylist" });
  };

  render() {
    const renderCurrrentPage = () => {
      switch (this.state.currentPage) {
        case "playlistCreationPage":
          return <PlaylistCreationPage  />;
          // irParaListaPlaylists={this.irParaListaPlaylists}
        case "playlistManagerPage":
          return <PlaylistManagerPage  />;
          // irParaAdicionarPlaylist={this.irParaAdicionarPlaylist}

          // case "detail":
          //   return (
          //     <DetalhePlaylist
          //     irParaListaPlaylists={this.irParaListaPlaylists}
          //       url={this.state.clickPlaylistUrl}
          //     />
          //   );
  
        default:
          return <PlaylistCreationPage/>;
      }
    };
    return (
      <AppContainer>
        <Header 
        changePage={this.changePage}
        />
        {renderCurrrentPage()}
      </AppContainer>
    );
  }
}

export default App;
