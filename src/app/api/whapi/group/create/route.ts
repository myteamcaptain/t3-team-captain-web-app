import { env } from "@/env";
import { getError } from "@/utils/error";

import { default as axios } from "axios";

export const runtime = "edge";
export async function POST(req: Request) {
  const {
    subject,
    participants,
  }: {
    subject: string;
    participants: string[];
  } = await req.json();

  console.log(JSON.stringify({ subject, participants }));
  try {
    const url = `${env.WHAPI_API_URL}/groups`;
    const options = {
      method: "POST",
      url,
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `Bearer ${env.WHAPI_TOKEN}`,
      },
      data: JSON.stringify({
        subject,
        participants: participants.map((phoneNumber: string) =>
          phoneNumber.replaceAll("+", ""),
        ),
      }),
    };

    const result = await axios.request(options).then(function (response) {
      return response;
    });

    return Response.json(
      {
        message: "success",
        result,
      },
      { status: 200 },
    );
  } catch (err) {
    const errMsg = getError(err);
    return Response.json(`Error: ${errMsg?.message}`, { status: 500 });
  }
}
