import { Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div className="flex flex-row justify-start items-center w-full p-2 bg-[#778beb] shadow-lg h-[56px]">
      <Link to={'/'} className="text-xl font-semibold text-[#fff]">
        <Bot color="#ffff" size={34} />
      </Link>
    </div>
  );
}
