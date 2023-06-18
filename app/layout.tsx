import { Montserrat } from "next/font/google";
import "./globals.css";
import { VideosProvider } from "@/contexts/VideoContext";

const inter = Montserrat({
	weight: ["400", "500", "600"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Desafio Direção Concursos",
	description: "Teste técnico para empresa Direção Concursos",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="main">
					<VideosProvider>{children}</VideosProvider>
				</div>
			</body>
		</html>
	);
}
