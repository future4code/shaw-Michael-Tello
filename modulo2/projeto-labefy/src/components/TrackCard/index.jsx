import React from 'react';
import styled from 'styled-components';

const TrackCardContainer = styled.div`
    margin: 20px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        display: flex;
        align-items: center;
    }
`

const TrackContainer = styled.h4`
    margin: 10px;
`

const ArtistContainer = styled.p`
    margin-right: 10px;
`

const DeleteButton = styled.p`
    color: red;
`


class TrackCard extends React.Component {
    

    render() {
        return (
					<TrackCardContainer>
							<div>
									<TrackContainer>{this.props.trackName} - </TrackContainer>
									<ArtistContainer>{this.props.artist}</ArtistContainer>
									<DeleteButton>X</DeleteButton>
							</div>
							<audio controlsList='controls'> 
									<source src={this.props.url} type="audio/ogg" />
							</audio>
					</TrackCardContainer>
			)
}
}
export default TrackCard;

// 1:21:40