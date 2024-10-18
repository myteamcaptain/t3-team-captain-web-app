import { env } from "@/env";
import { getError } from "@/utils/error";

import { default as axios } from "axios";

export const runtime = "nodejs";
export async function POST(req: Request) {
  const { phone } = await req.json();
  try {
    const cleanedPhone = phone.replace("+", "");
    const url = `${env.WHAPI_API_URL}/contacts/${cleanedPhone}`;
    const options = {
      method: "HEAD",
      url,
      headers: {
        accept: "application/json",
        authorization: `Bearer ${env.WHAPI_TOKEN}`,
      },
    };

    const status = await axios
      .request(options)
      .then(function (response) {
        return response.status;
      })
      .catch(function (error) {
        console.error("error", error.message);
        return error.status;
      });

    return Response.json(
      {
        message: "okay",
        status,
      },
      { status: 200 },
    );
  } catch (err) {
    const errMsg = getError(err);
    return Response.json(`Error: ${errMsg?.message}`, { status: 500 });
  }
}
