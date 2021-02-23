import Link from 'next/link'
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div className={styles.title}>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores fugit, fuga aperiam harum atque quia impedit perferendis officia, odit recusandae error rerum voluptatibus quidem incidunt libero iste unde ad nihil.</p>
      <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, quibusdam nihil porro aperiam repudiandae similique, tempore veritatis eligendi itaque repellat beatae sequi dolor vero tempora vitae obcaecati debitis ipsa officiis.</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See ninja listing</a>
      </Link>
    </div>
    </>
  )
}
