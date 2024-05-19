import React from "react";
import { Button } from "react-bootstrap";

function SButton({
  id,
  children,
  action,
  variant,
  size,
  loading,
  disabled,
  className,
  href,
  style,
}) {
  return (
    <Button
      id={id}
      className={className}
      onClick={action}
      variant={variant}
      disabled={disabled}
      size={size}
      href={href}
      style={style}
    >
      {loading ? "Loading..." : children}
    </Button>
  );
}

export default SButton;
