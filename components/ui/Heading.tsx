import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export const Heading = ({
  children,
  level = 2,
  className = "",
}: HeadingProps) => {
  const Component = `h${level}` as React.ElementType;
  
  const styles = {
    1: "text-4xl md:text-6xl font-bold tracking-tight text-primary",
    2: "text-3xl md:text-4xl font-bold tracking-tight text-primary",
    3: "text-2xl md:text-3xl font-semibold text-primary",
    4: "text-xl md:text-2xl font-semibold text-primary",
    5: "text-lg md:text-xl font-medium text-primary",
    6: "text-base md:text-lg font-medium text-primary",
  };

  return (
    <Component className={`${styles[level]} ${className}`}>
      {children}
    </Component>
  );
};
