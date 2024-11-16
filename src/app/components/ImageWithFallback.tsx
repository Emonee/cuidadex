"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type Props = ImageProps & {
  fallback?: string;
};

export default function ImageWithFallback({ fallback, ...props }: Props) {
  const [imgSrc, setImgSrc] = useState(props.src);

  return (
    <Image
      {...props}
      alt={props.alt}
      src={imgSrc}
      onError={() => fallback && setImgSrc(fallback)}
    />
  );
}
