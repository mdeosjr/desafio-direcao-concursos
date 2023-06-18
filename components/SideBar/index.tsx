import styles from "./sideBar.module.css";
import { useVideos } from "@/hooks/useVideos";
import { useEffect, useState } from "react";
import ToggleButtons from "../ToggleButtons";
import Feed from "../Feed";

export default function SideBar() {
	const { videos, setVideos } = useVideos();
	const [term, setTerm] = useState<string | null>("Populares");

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
			<ToggleButtons term={term} setTerm={setTerm} />
			<Feed videos={videos} />
		</div>
	);
}
