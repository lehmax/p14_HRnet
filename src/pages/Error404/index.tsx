import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </>
  )
}

export default Error404
