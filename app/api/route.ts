import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  const AUDIENCE_ID = 'b3e3b368c0';
    const API_KEY = '904d5a73c4d491249a11db388f931e87-us22';
    const DATACENTER = 'us22';

    const data = {
        email_address: email,
        status: 'subscribed',
      };

      const response = await fetch(
        `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
  
        {
          body: JSON.stringify(data),
          headers: {
            Authorization: `apikey ${API_KEY}`,
            'Content-Type': 'application/json',
          },
          method: 'POST',
        }
      );



  if (!email) {
    return new NextResponse(
      JSON.stringify({ name: response }),
      { status: 400 }
    );
  }

  return new NextResponse(JSON.stringify({ answer: email }), {
    status: 200,
  });
}
