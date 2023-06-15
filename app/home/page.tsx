"use client";

import Video from "@/components/Video/Video";
import { VideoData } from "@/types";
import { useEffect, useState } from "react";
import styles from "../globals.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
	const [videos, setVideos] = useState([]);

	const router = useRouter();

	const fetchVideos = async () => {
		const response = await fetch("/api/video");
		const data = await response.json();

		setVideos(data.videos);
	};

	const handleNavigation = (id: string) => {
		router.push(`/video/${id}`);
	};

	useEffect(() => {
		fetchVideos();
	}, []);

	return (
		<div className={styles.main}>
			<div className={styles.grid}>
				{videos?.map((video: VideoData) => (
					<div onClick={() => handleNavigation(video?.id)} key={video.id}>
						<Image
							alt=""
							src={video.image}
							key={video.id}
							width={400}
							height={300}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
