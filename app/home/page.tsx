"use client";

import Video from "@/components/Video/Video";
import { VideoData } from "@/types";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
	const [videos, setVideos] = useState([]);

	const fetchVideos = async () => {
		const response = await fetch("/api/video");
		const data = await response.json();

		setVideos(data.videos);
	};

	useEffect(() => {
		fetchVideos();
	}, []);

	return (
		<div className={styles.main}>
			<div className={styles.grid}>
				{videos?.map((video: VideoData) => (
					<Video
						source={video.video_files[0].link}
						poster={video.image}
						key={video.id}
					/>
				))}
			</div>
		</div>
	);
}
