import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SsoAuth() {
  return (
    <div className="flex flex-col space-y-2">
      <Button
        type="submit"
        variant={"outline"}
        className="text-white px-12  w-full text-secondary-foreground space-x-2"
        size={"lg"}
      >
        <Image
          src="/social/google.png"
          width={35}
          height={35}
          alt="Facebook"
          className="w-[25px]"
        />
        <p>Google</p>
      </Button>
      <Button
        type="submit"
        variant={"outline"}
        className="text-white px-12  w-full text-secondary-foreground space-x-2"
        size={"lg"}
      >
        <Image
          src="/social/facebook.png"
          width={35}
          height={35}
          alt="Facebook"
          className="w-[25px]"
        />
        <p>Facebook</p>
      </Button>
    </div>
  );
}
