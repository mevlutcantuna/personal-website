import styles from "./Timeline.module.css"
import TimelineItem from "./TimelineItem";

const Timeline = () => {
    return <div className={styles.timeline}>
        <div className={styles.timeline__container}>
            <TimelineItem/>
            <TimelineItem/>
            <TimelineItem/>
            <TimelineItem/>
        </div>
    </div>
}

export default Timeline; 