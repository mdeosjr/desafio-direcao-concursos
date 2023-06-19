"use client";

import styles from "./sideBar.module.css";
import useVideos from "@/hooks/useVideos";
import { useEffect, useState } from "react";
import Feed from "../Feed";
import ToggleButtons from "../ToggleButtons";

export default function SideBar() {
	const { videos, setVideos } = useVideos();
	const searchTerms = ["Populares", "Cinema", "Comida", "Animais", "Música"];
	const [term, setTerm] = useState<string>(searchTerms[0]);

	const fetchVideos = async () => {
		const response = await fetch(`/api/search/${term}`);
		const data = await response.json();

		setVideos(data.videos);
	};

	useEffect(() => {
		fetchVideos();
	}, [term]);

	return (
		<div className={styles.SideBarContainer}>
			<ToggleButtons options={searchTerms} onChange={setTerm} value={term} />
			<Feed videos={videos} className={styles.Feed} />
		</div>
	);
}
