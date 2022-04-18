import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { ImHeart } from 'react-icons/im';

export const Container = styled.div`
display: flex;
justify-content: center;
gap: 5em;
`;


export const CloseIcon = styled(AiOutlineClose)`
	font-size:2em;
  border-radius: 10px 40px 40px 10px;
`;

export const HeartIcon = styled(ImHeart)`
	font-size:2em;
	border: 1px solid black;
`;