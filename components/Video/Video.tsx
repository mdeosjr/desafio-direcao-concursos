"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./video.module.css";
import {
	PlayArrow,
	Pause,
	Fullscreen,
	FullscreenExit,
} from "@mui/icons-material";
import Slider from "@mui/material/Slider";

interface VideoProps {
	source: string;
	poster: string;
}

const Video = ({ source, poster }: VideoProps) => {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [progress, setProgress] = useState<number>(0);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [duration, setDuration] = useState<number>(0);
	const [currentTime, setCurrentTime] = useState<number>(0);
	const [volume, setVolume] = useState<number>(0);
	const [isFullScreen, setIsFullScreen] = useState(false);

	useEffect(() => {
		setDuration(Number(videoRef.current?.duration));
		setCurrentTime(Number(videoRef.current?.currentTime));
	}, []);

	const handleToggle = () => {
		if (isPlaying) {
			videoRef.current?.pause();
		} else {
			videoRef.current?.play();
		}
		setIsPlaying(!isPlaying);
	};

	const handleProgress = () => {
		setDuration(Number(videoRef.current?.duration));
		setCurrentTime(Number(videoRef.current?.currentTime));

		const progress = (currentTime / duration) * 100;
		setProgress(progress);
	};

	const handleVolume = (event: Event, newValue: number | number[]) => {
		setVolume(newValue as number);
		videoRef.current.volume = newValue / 100;
	};

	const handleFullScreen = () => {
		videoRef.current?.requestFullscreen();
	};

	return (
		<div className={styles.VideoContainer}>
			<video
				className={styles.Video}
				onTimeUpdate={handleProgress}
				src={source}
				ref={videoRef}
				poster={poster}
			/>
			<div className={styles.ControlsContainer}>
				<progress
					className={styles.ProgressBar}
					value={progress || 0}
					max="100"
				/>
				<div className={styles.VideoFunctions}>
					<div className={styles.LeftFunctions}>
						<button className={styles.Button} onClick={handleToggle}>
							{isPlaying ? <Pause /> : <PlayArrow />}
						</button>
						<span className={styles.TimeText}>
							{Math.floor(currentTime / 60) +
								":" +
								("0" + Math.floor(currentTime % 60)).slice(-2)}
							/
							{Math.floor(duration / 60) +
								":" +
								("0" + Math.floor(duration % 60)).slice(-2)}
						</span>
						<Slider
							size="small"
							sx={{ width: "60px", color: "#f1f1f1" }}
							value={volume}
							aria-label="Small"
							valueLabelDisplay="auto"
							onChange={handleVolume}
						/>
					</div>
					<Fullscreen
						onClick={handleFullScreen}
						sx={{ color: "#f1f1f1", cursor: "pointer" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Video;
