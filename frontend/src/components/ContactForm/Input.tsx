import React, { forwardRef, HTMLProps } from 'react';

const Input = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>(
  ({ label, ...props }, ref) => {
    return (
      <div className={'flex flex-col w-full'}>
        <label className={'font-semibold'}>{label}</label>
        <input
          {...props}
          className={
            'bg-accent-4 shadow rounded p-2 border-[1px]  border-neutral-400'
          }
          ref={ref}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
