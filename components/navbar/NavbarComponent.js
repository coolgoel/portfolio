import React, { useState, useEffect } from 'react'
import NavbarElement from 'components/navbar/NavbarElement'
import { navbarConstants } from 'constants/index'
import styles from './NavbarComponent.module.scss'

const NavbarComponent = () => {
    
    const [activeNavElements, setActiveNavElements] = useState(new Array(navbarConstants.length).fill(false))
    useEffect(() => {

        //setting default active element as home
        let updatedActiveNavElements = new Array(navbarConstants.length).fill(false);
        updatedActiveNavElements[0] = true;
        setActiveNavElements(updatedActiveNavElements);

        //state cleanup
        return (() => {
            setActiveNavElements(new Array(navbarConstants.length).fill(false))
        })
    }, [])
    
    const handleNavItemClick = (index) => {
        console.log("item clicked", index)
        let updatedActiveNavElements = new Array(navbarConstants.length).fill(false);
        updatedActiveNavElements[index] = true;
        setActiveNavElements(updatedActiveNavElements);
    }

    return (
        <div className={styles.navbarContainer}>
            {
                navbarConstants.map((item, index) => {
                    return (
                        <NavbarElement key={index}
                            name={item.name}
                            link={item.link}
                            isActive={activeNavElements[index]}
                            onClick={() => handleNavItemClick(index)}
                        />
                    )
                })
            }
        </div>
    )
}

export default NavbarComponent