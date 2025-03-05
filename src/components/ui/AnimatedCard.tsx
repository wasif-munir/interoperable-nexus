
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  highlightOnHover?: boolean;
  delayAnimation?: number; // in ms
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className,
  highlightOnHover = true,
  delayAnimation = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden transition-all duration-300 ease-in-out",
        "animate-fade-in-up opacity-0 bg-white shadow-card",
        highlightOnHover && "hover:shadow-elevated hover:-translate-y-1",
        isHovered && highlightOnHover && "bg-gray-50",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${delayAnimation}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
