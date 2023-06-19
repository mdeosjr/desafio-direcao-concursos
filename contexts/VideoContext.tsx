"use client";

import { VideoData } from "@/types";
import { createContext, useEffect, useState } from "react";

interface VideosContextInterface {
	videos: VideoData[] | null;
	setVideos: React.Dispatch<React.SetStateAction<VideoData[] | null>>;
}

interface Props {
	children: React.ReactNode;
}

const VideosContext = createContext<VideosContextInterface | null>(null);

export function VideosProvider({ children }: Props) {
	const [videos, setVideos] = useState<VideoData[] | null>(null);

	const fetchVideos = async () => {
		const response = await fetch("/api/video");
		const data = await response.json();

		setVideos(data.videos);
	};

	useEffect(() => {
		fetchVideos();
	}, []);

	return (
		<VideosContext.Provider
			value={{
				videos,
				setVideos
			}}
		>
			{children}
		</VideosContext.Provider>
	);
}

export default VideosContext;
