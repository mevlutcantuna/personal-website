import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css"

const Cursor: React.FC = () => {
    const cursorRef = useRef<any>(null)
    const cursorFollowedRef = useRef<any>(null)

    useEffect(() => {
        cursorRef.current.style.display = cursorFollowedRef.current.style.display = 'none'

        document.addEventListener('mousemove', (e) => {
            cursorRef.current.style.display = cursorFollowedRef.current.style.display = 'flex'
            let { clientX, clientY } = e

            cursorRef.current.style.cssText = `left:${clientX}px;top:${clientY}px;`
            cursorFollowedRef.current.style.cssText = `left:${clientX}px;top:${clientY}px;`
        })

        document.addEventListener("mouseleave", (e) => {
            cursorRef.current.style.display = cursorFollowedRef.current.style.display = 'none'
        })

    }, [])

    return (
        <div>
            <div className={styles.cursor} ref={cursorRef}></div>
            <div className={styles.cursor__followed} ref={cursorFollowedRef}></div>
        </div>
    )
}

export default Cursor; 