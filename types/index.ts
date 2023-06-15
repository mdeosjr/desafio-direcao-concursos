export interface VideoData {
	id: string;
	image: string;
	video_files: [{ link: string }];
}

export interface VideoPageParams {
	params: {
		videoId: string;
	};
}