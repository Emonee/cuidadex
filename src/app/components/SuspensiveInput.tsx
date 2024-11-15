'use client'

import { useRef, type InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>

export default function SuspensiveInput(props: Props) {
  const timeOutRef = useRef<NodeJS.Timeout | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!props.onChange) return;
    if (timeOutRef.current) clearTimeout(timeOutRef.current);
    timeOutRef.current = setTimeout(() => props.onChange?.(e), 850);
  };

  return (
    <input
      {...props}
      onChange={onChange}
    />
  );
}
