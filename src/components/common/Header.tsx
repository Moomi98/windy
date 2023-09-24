import { GiLibertyWing } from "react-icons/gi";

export default function Header() {
  return (
    <header className="flex w-full h-16 space-x-0 p-4 gap-1">
      <div className="flex items-center gap-1">
        <GiLibertyWing size={20} />
        <strong className="text-2xl">windy</strong>
      </div>
    </header>
  );
}
