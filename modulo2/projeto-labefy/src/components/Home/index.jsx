import React from "react";
import AdicionarPlaylist from "../AdicionarPlaylist";
import ListaPlaylists from "../ListaPlaylists";

class Home extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <AdicionarPlaylist />
				{/* <ListaPlaylists/> */}
      </div>
    );
  }
}

export default Home;
