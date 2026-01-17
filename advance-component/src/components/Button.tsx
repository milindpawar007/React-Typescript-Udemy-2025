import React, { ComponentPropsWithRef } from 'react';

type ButtonProps = {
  el: 'button';
} & ComponentPropsWithRef<'button'>;

type AnchorProps = {
  el: 'anchor';
} & ComponentPropsWithRef<'a'>;

function Button(props: ButtonProps | AnchorProps) {
  if (props.el === 'anchor') {
    return <a className="button" {...props} />;
  }

  return <button className="button" {...props}></button>;
}

export default Button;
