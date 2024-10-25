import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Welcome to Next.js!</h1>
      <Button>Click me</Button>
    </div>
  );
}
