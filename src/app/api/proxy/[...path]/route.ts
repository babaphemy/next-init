import { NextRequest, NextResponse } from 'next/server';

async function proxyRequest(
  req: NextRequest,
  params: Promise<{ path: string[] }>,
) {
  const resolvedParams = await params;
  const url = `${process.env.API_BASEPATH}/${resolvedParams.path.join('/')}`;

  try {
    const apiRes = await fetch(url, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Basic ' +
          Buffer.from(
            `${process.env.API_USERNAME}:${process.env.API_PASSWORD}`,
          ).toString('base64'),
      },
      body: req.method !== 'GET' ? await req.text() : undefined,
    });

    if (!apiRes.ok) {
      throw new Error(`API responded with status ${apiRes.status}`);
    }

    const data = await apiRes.json();
    return NextResponse.json(data, { status: apiRes.status });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: 'Proxy error', details: (error as Error).message },
      { status: 500 },
    );
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  return proxyRequest(req, params);
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  return proxyRequest(req, params);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  return proxyRequest(req, params);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  return proxyRequest(req, params);
}
