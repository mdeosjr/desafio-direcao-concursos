import { VideoData } from "@/types";
import styles from "./feed.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface FeedProps {
	videos: VideoData[];
}

export default function Feed({ videos }: FeedProps) {
	const router = useRouter();

	const handleNavigation = (id: string) => {
		router.push(`/video/${id}`);
	};

	return (
		<div className={styles.Grid}>
			{videos?.map((video: VideoData) => (
				<div
					className={styles.Image}
					onClick={() => handleNavigation(video?.id)}
					key={video.id}
				>
					<Image
						alt="thumbnail"
						src={video.image}
						key={video.id}
						style={{ cursor: "pointer", objectFit: 'cover' }}
						fill
					/>
				</div>
			))}
		</div>
	);
}
