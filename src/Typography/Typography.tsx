import React from "react";

export interface TypographyProps {
  size: "body" | "h1" | "h2" | "h3" | "h4" | "details";
  color: "primary" | "secondary" | "text";
  text: string;
}

export const Typography: React.FC<TypographyProps> = ({
  size,
  color,
  text,
}) => {
  if(size === 'h1') return <h1>{text}</h1>
  return <p>{text}</p>;
};
