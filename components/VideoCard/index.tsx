import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./videoCard.module.css";
import { PlayArrow } from "@mui/icons-material";

export default function VideoCard({
	data,
}: {
	data: {
		id: string;
		image: string;
	};
}) {
	const { id, image } = data;
	const router = useRouter();

	const handleNavigation = (id: string) => {
		router.push(`/video/${id}`);
	};

	return (
		<div className={styles.Image} onClick={() => handleNavigation(id)} key={id}>
			<PlayArrow className={styles.PlayIcon} />
			<Image
				alt="thumbnail"
				src={image}
				key={id}
				style={{ cursor: "pointer", objectFit: "cover", borderRadius: "6px" }}
				fill
				sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
			/>
		</div>
	);
}
