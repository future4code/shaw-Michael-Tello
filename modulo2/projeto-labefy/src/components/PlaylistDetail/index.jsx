import React from "react";
import styled from "styled-components";

const PlaylistDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TrackCreationForm = styled.form`
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
  }
`;

class PlaylistDetail extends React.Component {
  state = {
    tracks: [
      {
        id: "807d2b1b-d22b-4b33-a2b1-1c5d60fbc162",
        name: "still alive",
        artist: "ashley wallbridge feat evan henzi",
        url: "https://deezer.page.link/vLe67vM6STSMbDbL7",
      },
      {
        id: "ad9a39b9-a779-4197-a0f5-aaf7bfdf0e11",
        name: "kingdom united",
        artist: "gareth emery",
        url: "https://deezer.page.link/gSR5zUc6aDgbDgou6",
      },
    ],
  };

  render() {
    const tracks = this.state.tracks.map((track) => {
      // return <TrackCard/>
    });

    return (
      <PlaylistDetailContainer>
        <TrackCreationForm>
          <div>
            <label>Nome da música:</label>
            <input />
          </div>
          <div>
            <label>Artista:</label>
            <input />
          </div>
          <div>
            <label>URL da música:</label>
            <input />
          </div>
          <button type="submit">Adicionar música</button>
        </TrackCreationForm>
        {/* {tracks} */}
        <button onClick={() => this.props.changePage("playlists")}>
          Voltar para playlists
        </button>
      </PlaylistDetailContainer>
    );
  }
}

export default PlaylistDetail;
