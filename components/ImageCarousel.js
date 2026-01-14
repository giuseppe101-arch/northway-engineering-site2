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
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onMouseDown={(e) => onStart(e.clientX)}
        onMouseUp={(e) => onEnd(e.clientX)}
        onTouchStart={(e) => onStart(e.touches[0].clientX)}
        onTouchEnd={(e) => onEnd(e.changedTouches[0].clientX)}
      >
        {safeImages.map((src, i) => (
          <div key={`${src}-${i}`} className="relative w-full flex-shrink-0">
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Steel & glass doors example ${i + 1}`}
                fill
                className={`object-cover object-center ${imageClassName}`}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={priority && i === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {safeImages.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/45 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/45 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center"
          >
            ›
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {safeImages.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full ${
                  i === index ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

