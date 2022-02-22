export const routes = useNavigate()

export const goToLogin = () => {
  routes("/")
}

export const goToCadastro = () => {
  routes("/cadastropage" )
}

export const goToFeed = () => {
  routes("/feedpage")
}

export const goToPost = () => {
  routes("/postpage")
}

export const goToError = () => {
  routes("/error")
}