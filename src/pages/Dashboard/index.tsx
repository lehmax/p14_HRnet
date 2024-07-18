import useDocumentTitle from '../../hooks/useDocumentTitle'

const Dashboard = () => {
  const title = 'Welcome 👋'
  useDocumentTitle(title)

  return (
    <>
      <section>
        <h1>{title}</h1>
      </section>
    </>
  )
}

export default Dashboard
