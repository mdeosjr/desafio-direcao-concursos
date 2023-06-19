import { useContext } from "react";
import VideoContext from "../contexts/VideoContext";

export default function useVideos() {
  const videoContext = useContext(VideoContext)

  if (!videoContext) {
		throw new Error("useVideos must be used inside a VideosContext Provider");
	}

	return videoContext;
};
