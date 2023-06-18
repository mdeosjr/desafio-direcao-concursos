import { VideoData } from "@/types";
import styles from "./feed.module.css";
import { VideoCard } from "@/components";

export default function Feed({ videos }: { videos: VideoData[] }) {
	return (
		<div className={styles.Grid}>
			{videos?.map((video: VideoData) => (
				<VideoCard data={video} key={video.id} />
			))}
		</div>
	);
}
