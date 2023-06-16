import { Inter } from "next/font/google";
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

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
				<div className="main">{children}</div>
			</body>
		</html>
	);
}
