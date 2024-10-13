import { NextRequest } from "next/server";

export const runtime = "force-dynamic";

const handler = (req: NextRequest) => {
  return Response.json(
    {
      message: "success",
    },
    {
      status: 200,
    },
  );
};

export { handler as GET, handler as POST };
