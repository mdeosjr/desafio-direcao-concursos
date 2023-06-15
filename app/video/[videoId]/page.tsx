"use client";

import Video from "@/components/Video/Video";
import { VideoData, VideoPageParams } from "@/types";
import { useEffect, useState } from "react";
import styles from "../../globals.module.css";

export default function VideoPage({ params }: VideoPageParams) {
	const [video, setVideo] = useState<VideoData | undefined>(undefined);

	const fetchVideo = async () => {
		const response = await fetch(`/api/video/${params.videoId}`);
		const data = await response.json();

		setVideo(data);
	};

	useEffect(() => {
		fetchVideo();
	}, []);

	return (
		<div className={styles.main}>
			<div className={styles.grid}>
				<Video
					source={video?.video_files[0].link}
					poster={video?.image}
					key={video?.id}
				/>
			</div>
		</div>
	);
}
