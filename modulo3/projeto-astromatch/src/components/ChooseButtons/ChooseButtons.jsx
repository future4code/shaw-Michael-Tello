import Fab from '@material-ui/core/Fab'
import React from 'react'
import * as S from './styled'

function ChooseButtons() {
	return (
<S.Container>
	
<Fab size="medium">
  <S.CloseIcon/>
</Fab>

<Fab size="medium">
  <S.HeartIcon/>
</Fab>
</S.Container>
	)
}

export default ChooseButtons