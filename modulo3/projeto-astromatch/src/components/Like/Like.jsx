import Fab from '@material-ui/core/Fab'
import React from 'react'
import * as S from './styled'



function Like() {
	return (
<S.Container>
	
<Fab size="medium">
  <S.CloseIcon/>
</Fab>

<Fab >
  <S.HeartIcon/>
</Fab>
</S.Container>
	)
}

export default Like