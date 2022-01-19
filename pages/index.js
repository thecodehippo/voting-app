import Head from 'next/head'
import WillAttend from '../components/WillAttend.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Codecademy Meeting</h1>
      <h4>Will you be joining the next meeting?</h4>
      <WillAttend />
    </div>
  )
}
