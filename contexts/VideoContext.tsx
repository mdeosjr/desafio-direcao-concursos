"use client";

import { VideoData } from "@/types";
import { createContext, useEffect, useState } from "react";

interface VideosContextInterface {
	videos: VideoData[] | [];
	setVideos: React.Dispatch<React.SetStateAction<VideoData[] | []>>;
}

interface Props {
	children: React.ReactNode;
}

const VideosContext = createContext<VideosContextInterface | null>(null);

export function VideosProvider({ children }: Props) {
	const [videos, setVideos] = useState<VideoData[] | []>([]);

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
