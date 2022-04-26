
export const goToAboutPage = (navigate, language) => {
	navigate(`/about/${language}`)
}


export const goToHomePage = (navigate) => {
	navigate("/")
}

export const goBack = (navigate) => {
	navigate(-1)
}