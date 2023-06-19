"use client";

import { Feed } from "@/components";
import useVideos from "@/hooks/useVideos";

export default function Home() {
	const { videos } = useVideos();

	return <Feed videos={videos} />;
}
