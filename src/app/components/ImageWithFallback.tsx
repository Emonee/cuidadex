'use client'

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  fallback?: string;
  className?: string;
  priority?: boolean;
};

export default function ImageWithFallback({ src, alt, width, height, fallback, className, priority }: Props) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      className={className}
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      onError={() => fallback && setImgSrc(fallback)}
      priority={priority}
    />
  );
}