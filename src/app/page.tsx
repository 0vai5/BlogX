import Link from "next/link";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <h1 className="text-6xl font-bold tracking-tight">BlogX</h1>
      <p className="mt-4 text-xl text-muted-foreground">
        Where thoughts become books.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/auth/login">
          <Button variant="default">Login</Button>
        </Link>
        <Link href="/auth/signup">
          <Button variant="outline">Sign Up</Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
