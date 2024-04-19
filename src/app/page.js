import Posts from "@/components/Posts";
import { CreateButton } from "../components/Buttons";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto mt-5">
      <div className="flex justify-center gap-1 mb-5">
        <CreateButton />
      </div>
      <Posts />
    </div>
  );
}
