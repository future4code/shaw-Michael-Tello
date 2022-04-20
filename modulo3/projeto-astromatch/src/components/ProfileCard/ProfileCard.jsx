import React from 'react'
import styled from 'styled-components';

export const ProfileCardContainer = styled.div`
	margin: 16px;
	border-style: ridge;
	/* display: flex;
	flex-direction: column;
align-items: center; */
`;

export const ProfilePicture = styled.img`
	width: 100%;
	display: block;
	max-height: 350px;
`;

export const ProfileInfo = styled.div`
padding: 0 16px;
`;


function ProfileCard(props) {
	return (
		<ProfileCardContainer>

<ProfilePicture src={props.profile.photo} />
<ProfileInfo>
<p>{props.profile.name}, {props.profile.age}</p>
<p>{props.profile.bio}</p>


</ProfileInfo>
		</ProfileCardContainer>
		
	)
}

export default ProfileCard