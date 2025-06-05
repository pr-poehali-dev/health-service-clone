import React from "react";
import {
  Heart,
  Brain,
  Eye,
  Stethoscope,
  Baby,
  Pill,
  Calendar,
  Menu,
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Clock,
  Mail,
  Send,
  Shield,
} from "lucide-react";

const iconMap = {
  Heart,
  Brain,
  Eye,
  Stethoscope,
  Baby,
  Pill,
  Calendar,
  Menu,
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Clock,
  Mail,
  Send,
  Shield,
};

interface IconProps {
  name: keyof typeof iconMap;
  size?: number;
  className?: string;
  fallback?: keyof typeof iconMap;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = "",
  fallback = "Heart",
}) => {
  const IconComponent = iconMap[name] || iconMap[fallback];

  return <IconComponent size={size} className={className} />;
};

export default Icon;
