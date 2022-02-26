import React from 'react';
import Image from 'next/image'
import styles from './SkillSet.module.scss'


const SkillSet = ({
    name,
    proficiency,
    width,
    height,
}) => {
    return (
        <div className={styles.skillSetContainer}>
            <Image
                src={`/images/skill/skillSet/${proficiency}.svg`}
                alt="skillSet img"
                width={width}
                height={height}
            />
            <span> 
                { name } 
            </span>
        </div>
    )
}

export default SkillSet;