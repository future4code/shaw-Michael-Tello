import { Button, Checkbox, TextField, Typography } from '@mui/material'
import * as S from './styled'

export  function RegisterPage() {
	return (
		<S.Container>

			<S.FormContainer>
<Typography variant="h2">Olá,boa vindas ao LabEddit ;)</Typography>

<TextField label="Nome de usuário" variant="outlined" />
<TextField label="Email" variant="outlined" />
<TextField label="Senha" variant="outlined" />



<p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</p>

   <p>
	 <Checkbox/>
		 Eu concordo em receber emails sobre coisas legais no Labeddit</p>

		 <Button variant="contained">Cadastrar</Button>

		 </S.FormContainer>
		</S.Container>
	)
}
