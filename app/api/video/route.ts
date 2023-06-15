const ACCESS_KEY: string | undefined = process.env.ACCESS_KEY;

export async function GET() {
	const res = await fetch(`https://api.pexels.com/videos/popular`, {
		headers: { Authorization: `${process.env.ACCESS_KEY}` },
	});

	const data = await res.json();

	return new Response(JSON.stringify(data), { status: 200 });
}