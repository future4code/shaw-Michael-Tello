export const goToLoginPage = (navigate) => {
	navigate('/')
}

export const goToSignUpPage = (navigate) => {
	navigate ("/register")
}

export const goToFeedPage = (navigate) => {
	navigate ("/feed")
}

export const goToPostPage = (navigate,id) => {
	navigate ("/post")
	// navigate ("/post/${id}")
}