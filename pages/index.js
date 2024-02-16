import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>PMF: Monitora Floripa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Comunicado sobre alteração de domínio" />
        <p className="description">
          A Horus Aeronaves comunica a todos que, a partir do dia 19 de fevereiro de 2024, a plataforma do sistema Monitora Floripa terá alteração no domínio. <br></br>
          Isso significa que para abrir o nosso site no seu computador ou celular, você deve entrar no endereço abaixo: <br></br> 
          <a href='pmf.horus.global'>pmf.horus.global</a>.
        </p>
      </main>

      <Footer />
    </div>
  )
}
