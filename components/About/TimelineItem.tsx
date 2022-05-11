import { TimelineDataType } from "../../types"
import styles from "./Timeline-item.module.css"

type PropType = {
    item: TimelineDataType
}

const TimelineItem: React.FC<PropType> = ({ item }) => {
    return <div className={styles.timeline__item}>
        <span className={styles.timeline__item__date}>{item.date}</span>
        <div className={styles.timeline__item__box}>
            <h1>{item.title}</h1>
            <h2>{item.subtitle}</h2>
            <p>{item?.note}</p>
        </div>
    </div>
}

export default TimelineItem