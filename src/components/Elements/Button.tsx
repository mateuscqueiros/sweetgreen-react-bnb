import { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonProps = {
  icon?: ReactElement;
  className?: string;
} & React.PropsWithChildren;

export function Button({ icon, className, children }: ButtonProps) {
  return (
    <button type="button" className={twMerge('aa', className)}>
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
}

export function Action() {
  return <></>;
}
