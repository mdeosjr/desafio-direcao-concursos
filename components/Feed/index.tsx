import { VideoData } from "@/types";
import styles from "./feed.module.css";
import { VideoCard } from "@/components";

export default function Feed({
	videos,
	className,
}: {
	videos: VideoData[] | null;
	className?: string;
}) {
	return (
		<div className={`${styles.Grid} ${className}`}>
			{videos?.map((video: VideoData) => (
				<VideoCard data={video} key={video.id} />
			))}
		</div>
	);
}
