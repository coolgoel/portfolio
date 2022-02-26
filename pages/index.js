import Head from 'next/head'
import Image from 'next/image'
import styles from 'components/sass/home.module.scss'
import NavbarComponent from 'components/navbar/NavbarComponent'
import SkillSet from 'components/skill/SkillSet'
import { skills } from 'constants/index'

function Home() {

    const handleScrollClick = () => {

    }

    const handleAboutButtonClick = () => {
        console.log("about button clicked")
    }


    return (
        <div className={styles.container}>
            <Head>
                <title>Sourav Goel | Software Developer</title>
                <meta name="description" content="software developer portfolio website | Sourav Goel" />
            </Head>
            <div className={styles.homeBg}>
                <Image 
                    src="/images/bgFull.png"
                    alt="background image"
                    layout="fill"
                    // objectFit="cover"
                />
            </div>
            {/* 
                <div className={styles.scrollContainer} onClick={handleScrollClick}>
                    <div className={styles.scrollIcon}>
                        <Image
                            src={"/images/scroll.svg"}
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
                                src={"/images/home/social/twitter.svg"}
                                alt="twitter icon"
                                width="36px"
                                height="36px"
                            />
                        </div>
                        <div className={styles.socialIcon}>
                            <Image
                                src={"/images/home/social/github.svg"}
                                alt="github icon"
                                width="36px"
                                height="36px"
                            />
                        </div>
                        <div className={styles.socialIcon}>
                            <Image
                                src={"/images/home/social/linkedin.svg"}
                                alt="linkedin icon"
                                width="36px"
                                height="36px"
                            />
                        </div>
                        <div className={styles.socialIcon}>
                            <Image
                                src={"/images/home/social/union.svg"}
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
                        src="/images/about/aboutBg.png"
                        alt="bg pic"
                        height="200px"
                        width="155px"
                    />
                </div>
                <div className={styles.aboutImage}>
                    <Image
                        src="/images/about/profileImg.png"
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
                    <span>
                    <button className={styles.aboutBtn} onClick={handleAboutButtonClick}>
                        Download CV
                    </button></span>
                </div>
            </div>
            <div className={styles.skillSection}>
                <div className={styles.skillBg}>
                    <Image
                        src="/images/skill/skillBg.png"
                        alt="bg pic"
                        layout="fill"
                    />
                </div>
                <div className={styles.skillContainer}>
                    <div className={styles.skillImgBg}>
                        <Image
                            src="/images/about/aboutBg.png"
                            alt="bg pic"
                            height="200px"
                            width="155px"
                        />
                    </div>
                    <div className={styles.skillImage}>
                        <Image
                            src="/images/skill/skillImg.png"
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
                        <div className={styles.skillSetContainer}>
                            { 
                                skills.map((item, index) => {
                                    return (
                                        <SkillSet
                                            key={index}
                                            name={item.name}
                                            proficiency={item.proficiency}
                                            width="100px"
                                            height="100px"
                                        />
                                    )
                                })
                            }

                        </div>
                    </div>   
                </div>
            </div>

        </div>
    )
}

export default Home;
