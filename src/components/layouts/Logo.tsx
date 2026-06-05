import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/assets/logo.png" alt="Logo" width={50} height={50} />
      <span className="font-bold text-2xl">Hero<span className="text-primary">Kidz</span></span>
    </Link>
  );
};

export default Logo;