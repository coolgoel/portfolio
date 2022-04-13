import Head from 'next/head'
import Image from 'next/image'
import styles from 'components/sass/home.module.scss'
import NavbarComponent from 'components/navbar/NavbarComponent'
import SkillSet from 'components/skill/SkillSet'
import { skills } from 'constants/index'
import cx from 'classnames'

function Home() {

    const handleScrollClick = () => {

    }

    const handleAboutButtonClick = () => {
        console.log("about button clicked")
    }

    const SocialSection = () => {

        const socialProfiles = {
            github: {
                image: 'github.svg',
                link: 'google.com',
                newTab: true
            },
            linkedin: {
                image: 'linkedin.svg',
                link: 'google.com',
                newTab: true
            },
            // facebook: {
            //     image: 'twitter.svg',
            //     link: 'google.com',
            //     newTab: true
            // },
            // email: {
            //     image: 'union.svg',
            //     link: 'google.com',
            //     newTab: true
            // }
        }
        const renderSocialIcon = (key, image, link, newTab) => {
            return (
                <div key={key} className={styles.socialIcon}>
                    <Image
                        src={`/images/home/social/${image}`}
                        alt={`${image.split('.')[0]} icon`}
                        width="36px"
                        height="36px"
                    />
                </div>
            )        
        }
        return (
            <div className={styles.socialContainer}>
                {
                    Object.keys(socialProfiles).map((item, index) => {
                        return (
                            renderSocialIcon(
                                index,
                                socialProfiles[item].image,
                                socialProfiles[item].link,
                                socialProfiles[item].newTab
                            )
                        )
                    })
                }
            </div>
        )
    }

    const AboutSection = () => {
        return (
            <div className={styles.aboutSection}>
                <div className={styles.abtContainer}> 
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
                            </button>
                        </span>
                    </div>
                </div>
                <div className={styles.skillBg}>
                    <Image
                        src="/images/skill/skillBg.png"
                        alt="bg pic"
                        layout="fill"
                    />
                </div>
            </div>
        )
    }
    const SkillSection = () => {
        return (
            <div className={styles.skillSection}>
                
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
        )
    }
    const BeInTouch = () => {
        return (
            <div className={styles.beInTouch}>
                <Image
                    src="/images/beInTouch/bg.png"
                    alt="background image"
                    layout="fill"
                />
                <div className={styles.bitContainer}>
                    <div className={styles.text}>
                        Drop me a line. <br/> I would like to hear from you.
                    </div>
                    <div className={styles.rhs}>
                        <div className={styles.title}>
                            Get in Touch
                        </div>
                        <div className={styles.form}>
                            <div className={styles.inputShort}>
                                <input
                                    type="text"
                                    className={styles.input}
                                    placeholder="Name"
                                />
                            </div>
                            <div className={styles.inputShort}>
                                <input
                                    type="text"
                                    className={styles.input}
                                    placeholder="Email"
                                />
                            </div>
                            <div className={styles.inputLong}>
                                <textarea
                                    type="text"
                                    className={cx(styles.input, styles.longText)}
                                    placeholder="Message"
                                />
                            </div>
                            <button className={styles.submitBtn}>
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const Footer = () => {
        return (
            <div className={styles.footer}>
                <div className={styles.footerRhsBg}>
                    <Image
                        src="/images/footer/rhsBg.png"
                        alt="background image"
                        layout="fill"
                        // className={styles.footerRhsBg}
                    />
                </div>
                <div className={styles.footerContent}>
                    <div className={styles.text}>sourav.0344.goel@gmail.com</div>
                    <SocialSection/>
                    <div className={styles.copyright}> All Rights Reserved <span>©</span> 2022 Sourav Goel</div>
                </div>
            </div>
        )
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
                    <SocialSection />
                </div>
            </div>
            <AboutSection />
            <SkillSection />
            <BeInTouch />
            <Footer />
        </div>
    )
}

export default Home;
