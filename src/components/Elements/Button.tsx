import { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonProps = {
  icon?: ReactElement;
  className?: string;
} & React.PropsWithChildren;

export function Button({ icon, className, children }: ButtonProps) {
  return (
    <button
      type="button"
      className={twMerge(
        'p-4 bg-secondary rounded-full b-0 text-black cursor-pointer font-semibold flex justify-center items-center',
        className
      )}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
}

export type ActionButtonProps = {
  variant: 'primary' | 'secondary';
} & React.PropsWithChildren;

export function ActionButton({ variant, children }: ActionButtonProps) {
  let colors = '';

  if (variant === 'primary') {
    colors = 'bg-header text-white';
  }

  if (variant === 'secondary') {
    colors = 'bg-none text-header';
  }

  return (
    <div
      className={twMerge(
        'font-light uppercase rounded-full py-1 px-5 border-0 cursor-pointer hover:opacity-80',
        colors
      )}
    >
      {children}
    </div>
  );
}
