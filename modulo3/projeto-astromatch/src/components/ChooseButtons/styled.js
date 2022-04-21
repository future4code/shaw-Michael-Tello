import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillSuitHeartFill } from 'react-icons/bs';

export const ButtonsContainer = styled.div`
display: flex;
justify-content: center;
gap: 5em;
`;


export const CloseIcon = styled(AiOutlineClose)`
font-size:2em;
color: black;
`;

export const HeartIcon = styled(BsFillSuitHeartFill)`
font-size:2em;
color: red;
`;