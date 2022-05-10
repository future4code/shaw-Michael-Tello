import React from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'

export  function PostPage() {
	useProtectedPage()
	return (
		<div>PostPage</div>
	)
}
