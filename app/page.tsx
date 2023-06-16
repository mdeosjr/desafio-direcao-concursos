"use client";

import { Feed } from "@/components";
import { useEffect, useState } from "react";

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

	return <Feed videos={videos} />;
}
