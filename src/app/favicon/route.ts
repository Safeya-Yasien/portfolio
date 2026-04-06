export async function GET() {
  const url = process.env.EXTERNAL_FAVICON_URL;

  if (!url) {
    return new Response("Not found", { status: 404 });
  }

  const response = await fetch(url, { next: { revalidate: 86400 } });

  const blob = await response.arrayBuffer();

  return new Response(blob, {
    headers: {
      "Content-Type": "image/x-icon",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
