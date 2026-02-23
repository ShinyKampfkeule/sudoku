import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params;
  if (!name) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const image = await fetch(`https://robohash.org/${name}?set=set4`);

  if (!image) return NextResponse.json({ error: "Not found" }, { status: 404 });
  console.log(image);
  return NextResponse.json(image);
}
