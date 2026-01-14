import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

export default function ImageCarousel({
  images = [],
  autoPlay = true,
  interval = 4500,
  className = "",
  imageClassName = "",
  priority = false,
}) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const goTo = (i) => {
    if (!safeImages.length) return;
    setIndex((i + safeImages.length) % safeImages.length);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (!autoPlay || safeImages.length <= 1) return;

    timerRef.current = setInterval(() => {
      setIndex((cur) => (cur + 1) % safeImages.length);
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay, interval, safeImages.length]);

  // simple swipe
  const startX = useRef(null);
  const onStart = (x) => (startX.current = x);
  const onEnd = (x) => {
    if (startX.current == null) return;
    const diff = x - startX.current;
    startX.current = null;

    if (Math.abs(diff) < 40) return;
    diff < 0 ? next() : prev();
  };

  if (!safeImages.length) return null;

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <div
        className="flex transition-transform duration-500 ease-i

