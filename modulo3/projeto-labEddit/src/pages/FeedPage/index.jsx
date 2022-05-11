
import React from 'react'
import { FeedItem } from '../../components/FeedItem'
import SendComment from '../../components/SendComment'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import * as S from './styled'

export  function FeedPage() {
	useProtectedPage()
	return (
		<S.Container>

		<SendComment/>



</S.Container>
	)
}
