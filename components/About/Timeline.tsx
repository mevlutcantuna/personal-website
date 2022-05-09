import styles from "./Timeline.module.css"

const Timeline = () => {
    return <div className={styles.timeline}>
        <div className={styles.timeline__container}>
            <div className={styles.timeline__item}>
                <span className={styles.timeline__item__date}>20th May 2022 - Current</span>
                <div className={styles.timeline__item__box}>
                    <h1>Heading 1</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem autem in quod ab eaque velit.</p>
                </div>
            </div>
            <div className={styles.timeline__item}>
                <span className={styles.timeline__item__date}>20th May 2018 - 2020</span>
                <div className={styles.timeline__item__box}>
                    <h1>Heading 2</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem autem in quod ab eaque velit. </p>
                </div>
            </div>
            <div className={styles.timeline__item}>
                <span className={styles.timeline__item__date}>20th May 2015 - 2018</span>
                <div className={styles.timeline__item__box}>
                    <h1>Heading 3</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem autem in quod ab eaque velit.</p>
                </div>
            </div>
            <div className={styles.timeline__item}>
                <span className={styles.timeline__item__date}>20th May 2012 - 2014</span>
                <div className={styles.timeline__item__box}>
                    <h1>Heading 4</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem autem in quod ab eaque velit.</p>
                </div>
            </div>
        </div>
    </div>
}

export default Timeline; 