import React from 'react'
import { Link , type LinkProps} from 'react-router-dom';

type CommonProps  = {
    to?: string;
    children: React.ReactNode;
    textOnly:boolean 
}

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<LinkProps, "to"> & {
    to: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

function Button(props: z) {
  const { textOnly, className, children, ...rest } = props;

  const classes = [
    "button",
    textOnly ? "button--text-only" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  if ("to" in props && props.to) {
    const { to, ...linkProps } = rest as Omit<ButtonAsLink, keyof CommonProps>;
    return (
      <Link to={to} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

export default Button;