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
        'p-4 bg-secondary rounded-full w-36 b-0 text-black cursor-pointer font-semibold flex justify-center items-center',
        className
      )}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
}

export function Action() {
  return <></>;
}
