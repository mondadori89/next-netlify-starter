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
        <p className="description" style={{ fontSize: '20px', textAlign: 'center' }}>
          A Horus Aeronaves comunica a todos que, a partir do dia 19 de fevereiro de 2024, a plataforma do sistema Monitora Floripa terá alteração no domínio. <br></br><br></br> 
          Isso significa que para abrir o nosso site no seu computador ou celular, você deve entrar no endereço abaixo: <br></br><br></br>  
          <a href='https://pmf.horus.global/'>https://pmf.horus.global/</a>.
        </p>
      </main>

      <Footer />
    </div>
  )
}
