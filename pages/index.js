import Head from 'next/head'
import Image from 'next/image'
import styles from 'components/homepage/home.module.scss'
import NavbarComponent from 'components/navbar/NavbarComponent'

function Home() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Sourav Goel | Software Developer</title>
            <meta name="description" content="software developer portfolio website | Sourav Goel" />
        </Head>
        <div className={styles.homeBg}>
            <Image 
                src="/homeBg.png"
                alt="background image"
                layout="fill"
                objectFit="cover"
            />
        </div>
        <div className={styles.homeContainer}>
            <div className={styles.navBg}>
                <Image 
                    src="/navElementBg.png"
                    alt="background image"
                    layout="fill"
                />
            </div>
            <NavbarComponent />
        </div>
    </div>
  )
}

export default Home;
