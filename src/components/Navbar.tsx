import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { HandMetal } from 'lucide-react';

const Navbar = () => {
  return (
    <div className=' bg-blue-500 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0'>
      <div className='container flex items-center justify-between'>
        <Link href='/'>
          <HandMetal />
        </Link>
        <div>
          <Link className={buttonVariants()} href='/sign-in'>
            Sign in
          </Link>
          <Link className={buttonVariants()} href='/sign-up'>
            Sign up
          </Link>
          <Link className={buttonVariants()} href='https://www.showtimestrategies.net/'>
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
