import { VideoPageParams } from "@/types";

const ACCESS_KEY: string | undefined = process.env.ACCESS_KEY;
const API_URL: string | undefined = process.env.API_URL;

export async function GET(request: Request, { params }: VideoPageParams) {
	const res = await fetch(
		`${API_URL}/videos/${params.videoId}`,
		{
			headers: { Authorization: `${ACCESS_KEY}` },
		}
	);

	const data = await res.json();

	return new Response(JSON.stringify(data), { status: 200 });
}
