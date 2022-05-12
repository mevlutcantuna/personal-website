import styles from "./Timeline.module.css"
import TimelineItem from "./TimelineItem";

import { TimelineData } from "../../data";
import { TimelineDataType } from "../../types";

const Timeline = () => {
    return <div className={styles.timeline}>
        <div className={styles.timeline__container}>
            {TimelineData.map((item: TimelineDataType) => <TimelineItem key={item.id} item={item} />)}
        </div>
    </div>
}

export default Timeline;  