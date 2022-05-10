import styles from "./Timeline-item.module.css"

const TimelineItem = () => {
    return <div className={styles.timeline__item}>
        <span className={styles.timeline__item__date}>20th May 2022 - Current</span>
        <div className={styles.timeline__item__box}>
            <h1>Heading 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem autem in quod ab eaque velit.</p>
        </div>
    </div>
}

export default TimelineItem