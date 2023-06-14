"use client";

import { useRef, useState } from "react";
import styles from "./video.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

interface VideoProps {
	source: string
	poster: string
}

const Video = ({ source, poster }: VideoProps) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const handleToggle = () => {
		if (isPlaying) {
			setIsPlaying(false);
			videoRef.current?.pause();
		} else {
			setIsPlaying(true);
			videoRef.current?.play();
		}
	};

	return (
		<div className={styles.VideoContainer}>
			<video className={styles.Video} src={source} ref={videoRef} poster={poster}/>
			<div className={styles.ControlsContainer}>
				<button className={styles.Button} onClick={handleToggle}>
					{isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
				</button>
			</div>
		</div>
	);
};

export default Video;
