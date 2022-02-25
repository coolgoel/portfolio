import Head from 'next/head'
import Image from 'next/image'
import styles from 'components/homepage/home.module.scss'
import NavbarComponent from 'components/navbar/NavbarComponent'

function Home() {

    const handleScrollClick = () => {

    }

    const handleAboutButtonClick = () => {
        
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Sourav Goel | Software Developer</title>
                <meta name="description" content="software developer portfolio website | Sourav Goel" />
            </Head>
            <div className={styles.homeBg}>
                <Image 
                    src="/bgFull.png"
                    alt="background image"
                    layout="fill"
                    // objectFit="cover"
                />
            </div>
            <div className={styles.navBg}>
                <Image 
                    src="/navElementBg.png"
                    alt="background image"
                    layout="fill"
                />
            </div>
            {/* 
                <div className={styles.scrollContainer} onClick={handleScrollClick}>
                    <div className={styles.scrollIcon}>
                        <Image
                            src={"/scroll.svg"}
                            alt="scroll icon"
                            width="24px"
                            height="24px"
                        />                
                    </div>
                    <span className={styles.scrollText}>
                        Scroll
                    </span>
                </div> 
            */}
            <div className={styles.homeContainer}>
                <NavbarComponent />
                <div className={styles.content}>
                    <div className={styles.header}>
                        <span className={styles.heading}>
                            SOURAV GOEL
                        </span>
                        <span className={styles.subheading}>
                            Engineer + Developer
                        </span>
                    </div>
                    <div className={styles.socialContainer}>
                        <div className={styles.socialIcon}>
                            <Image
                                src={"/twitter.svg"}
                                alt="twitter icon"
                                width="36px"
                                height="36px"
                            />
                        </div>
                        <div className={styles.socialIcon}>
                            <Image
                                src={"/github.svg"}
                                alt="github icon"
                                width="36px"
                                height="36px"
                            />
                        </div>
                        <div className={styles.socialIcon}>
                            <Image
                                src={"/linkedin.svg"}
                                alt="linkedin icon"
                                width="36px"
                                height="36px"
                            />
                        </div>
                        <div className={styles.socialIcon}>
                            <Image
                                src={"/union.svg"}
                                alt="union icon"
                                width="36px"
                                height="36px"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.aboutSection}>
                <div className={styles.aboutBg}>
                    <Image
                        src="/aboutBg.png"
                        alt="bg pic"
                        height="200px"
                        width="155px"
                    />
                </div>
                <div className={styles.aboutImage}>
                    <Image
                        src="/profileImg.png"
                        alt="profile pic"
                        layout="fill"
                    />
                </div>
                <div className={styles.content}>
                    <span className={styles.caption}>
                        About Me
                    </span>
                    <span className={styles.description}>
                        An inquisitive Computer Science Engineering student, skilled in leadership, 
                        seeking to leverage solid development skills with focus on collaboration, 
                        communication and passion.
                    </span>
                    <button className={styles.aboutBtn} onClick={handleAboutButtonClick}>
                        Download CV
                    </button>
                </div>
            </div>
            <div className={styles.skillSection}>
                <div className={styles.skillBg}>
                    <Image
                        src="/skillBg.png"
                        alt="bg pic"
                        layout="fill"
                    />
                </div>
                <div className={styles.skillImgBg}>
                    <Image
                        src="/aboutBg.png"
                        alt="bg pic"
                        height="200px"
                        width="155px"
                    />
                </div>
                <div className={styles.skillImage}>
                    <Image
                        src="/skillImg.png"
                        alt="profile pic"
                        layout="fill"
                    />
                </div>
                <div className={styles.content}>
                    <span className={styles.caption}>
                        Skills
                    </span>
                    <span className={styles.description}>
                        I enjoy creating things that live on the internet, 
                        whether that be websites, applications, or anything in between.
                    </span>
                    <div className={styles.skillContainer}>
                        
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default Home;
