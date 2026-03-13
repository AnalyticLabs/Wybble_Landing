import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";

interface DynamicIconProps extends Omit<LucideProps, "ref"> {
  name: string;
}

export default function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const IconComponent = (
    Icons as unknown as Record<string, React.ComponentType<LucideProps>>
  )[name];

  if (!IconComponent) {
    // Fallback to Circle if icon not found
    return <Icons.Circle {...props} />;
  }

  return <IconComponent {...props} />;
}
