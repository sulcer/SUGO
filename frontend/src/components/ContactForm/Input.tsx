import React, { forwardRef, HTMLProps } from 'react';

const Input = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>(
  ({ label, ...props }, ref) => {
    return (
      <div className={'flex flex-col relative z-0 w-full'}>
        <input
          {...props}
          placeholder={' '}
          className={
            'pl-2 pb-1 pt-2 border-b-2 border-accent bg-transparent outline-none'
          }
          ref={ref}
        />
        <label
          className={
            'absolute top-1.5 ml-2 -z-1 bg-transparent duration-300 origin-0 text-black'
          }
        >
          {label}
        </label>
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
