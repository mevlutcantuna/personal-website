import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css"

const Cursor: React.FC = () => {
    const cursorRef = useRef<any>(null)
    const cursorFollowedRef = useRef<any>(null)

    useEffect(() => {
        cursorRef.current.style.display = cursorFollowedRef.current.style.display = 'none'
        
        document.addEventListener('mousemove', (e) => {
            cursorRef.current.style.display = 'flex'
            let { clientX, clientY } = e
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`
            cursorFollowedRef.current.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`
        })

        document.addEventListener("mouseleave", (e) => {
            cursorRef.current.style.display = cursorFollowedRef.current.style.display = 'none'
        })

    }, [])

    return <>
        <div className={styles.cursor} ref={cursorRef}></div>
        <div className={styles.cursor__followed} ref={cursorFollowedRef}></div>
    </>
}

export default Cursor; 