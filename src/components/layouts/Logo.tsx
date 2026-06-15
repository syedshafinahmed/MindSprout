import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/assets/logo.png" alt="Logo" width={50} height={50} className= "w-8 h-8 md:w-14 md:h-14" />
      <span className="font-bold text-slate-900 text-xl md:text-2xl">Mind<span className="text-primary">Sprout</span></span>
    </Link>
  );
};

export default Logo;
