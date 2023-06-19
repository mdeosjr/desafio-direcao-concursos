"use client";

import styles from "./header.module.css";
import { ArrowBackIosNew } from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
	const pathname = usePathname();
	const router = useRouter();

	const handleNavigation = () => {
		router.push(`/`);
	};

	return (
		<div className={styles.Header}>
			<h1 className={styles.HeaderTitle}>Desafio Direção Concursos</h1>
			{pathname !== "/" && (
				<ArrowBackIosNew
					onClick={handleNavigation}
					sx={{
						color: "white",
						position: "absolute",
						top: "16px",
						left: "16px",
						cursor: "pointer",
					}}
				/>
			)}
		</div>
	);
}
