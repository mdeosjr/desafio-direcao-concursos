"use client";

import { useRef, useState } from "react";
import styles from "./video.module.css";
import { PlayArrow, Pause, Fullscreen } from "@mui/icons-material";
import { Slider } from "@mui/material";

interface VideoProps {
	source: string | undefined;
	poster: string | undefined;
}

const Video = ({ source, poster }: VideoProps) => {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [progress, setProgress] = useState<number>(0);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [duration, setDuration] = useState<number>(0);
	const [currentTime, setCurrentTime] = useState<number>(0);
	const [volume, setVolume] = useState<number>(100);

	const handleToggle = () => {
		if (isPlaying) {
			videoRef.current?.pause();
		} else {
			videoRef.current?.play();
		}
		setIsPlaying(!isPlaying);
	};

	const getAsTime = (seconds: number) => {
		if (!seconds) return `--:--`;

		const minutes = Math.floor(seconds / 60);
		const secondsLeft = Math.floor(seconds % 60);

		return `${minutes.toString().padStart(2, "0")}:${secondsLeft
			.toString()
			.padStart(2, "0")}`;
	};

	const handleProgress = () => {
		setDuration(Number(videoRef.current?.duration));
		setCurrentTime(Number(videoRef.current?.currentTime));

		const progress = (currentTime / duration) * 100;
		setProgress(progress);

		if (videoRef.current?.paused) setIsPlaying(false);
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
					max="99"
				/>
				<div className={styles.VideoFunctions}>
					<div className={styles.LeftFunctions}>
						<button className={styles.Button} onClick={handleToggle}>
							{isPlaying ? <Pause /> : <PlayArrow />}
						</button>
						<span className={styles.TimeText}>
							{getAsTime(currentTime)}/{getAsTime(duration)}
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
