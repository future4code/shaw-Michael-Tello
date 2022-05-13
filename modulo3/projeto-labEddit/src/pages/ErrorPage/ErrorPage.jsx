import { useNavigate } from 'react-router-dom'
import {DivError} from './styled'
import { goToLoginPage } from '../../routes/coordinator';


export default function ErrorPage(){

    const navigate = useNavigate();

    return(
        <DivError>
            <div>
                <h1>Página não Encontrada</h1>
                <button className="btn btn-primary" onClick={() => goToLoginPage(navigate)}>Retornar</button>
            </div>
        </DivError>
    )
}