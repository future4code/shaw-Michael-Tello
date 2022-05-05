import React from 'react';

class Playlists extends React.Component {
   

    render() {
        return (
					<>
			<button onClick={()=> this.props.changePage('playlistDetail')}>Abrir Playlist</button>
					</>
				)
    }
}

export default Playlists;