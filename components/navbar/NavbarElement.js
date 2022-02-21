import React from 'react'
import styles from './NavbarElement.module.scss'
import cx from 'classnames'
import { useRouter } from 'next/router'

const NavbarElement = ({
    name,
    link,
    isActive,
    onClick,
}) => {
    const router = useRouter()

    const handleOnClick = () => {
        onClick();
        router.push(link);
    }

    return (
        <div className={cx(styles.navbarElement, {[styles.isActive]: isActive})} onClick={handleOnClick}>
            {name}
        </div>
    )
}

export default NavbarElement