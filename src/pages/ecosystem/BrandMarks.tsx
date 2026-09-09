import type { BrandLogo } from './content';

interface BrandMarksProps {
  logos: readonly BrandLogo[];
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: {
    shell: 'h-10 min-w-12 max-w-24 px-2',
    image: 'max-h-6 max-w-[72px]',
  },
  md: {
    shell: 'h-12 min-w-14 max-w-28 px-2.5',
    image: 'max-h-7 max-w-[88px]',
  },
  lg: {
    shell: 'h-20 min-w-24 max-w-44 px-4',
    image: 'max-h-11 max-w-[144px]',
  },
} as const;

export default function BrandMarks({
  logos,
  size = 'md',
  className = '',
}: BrandMarksProps) {
  const classes = sizeClasses[size];

  return (
    <div className={'flex flex-wrap items-center gap-2 ' + className}>
      {logos.map((logo) => (
        <span
          key={logo.src}
          className={
            'inline-flex items-center justify-center border border-border bg-white ' +
            classes.shell
          }
          title={logo.alt}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            decoding="async"
            className={'block h-auto w-auto object-contain ' + classes.image}
          />
        </span>
      ))}
    </div>
  );
}
