"use client";

import { cn } from "@/lib/utils";
import { Trophy, Award, Medal, Star } from "lucide-react";
import { motion } from "framer-motion";

interface AchievementCardProps {
    title: string;
    event: string;
    description: string;
    date: string;
    icon: string;
    color: string;
    index: number;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    trophy: Trophy,
    award: Award,
    "medal-silver": Medal,
    "medal-bronze": Medal,
    star: Star,
};

export function AchievementCard({
    title,
    event,
    description,
    date,
    icon,
    color,
    index,
}: AchievementCardProps) {
    const IconComponent = iconMap[icon] || Trophy;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="group relative"
        >
            {/* Glow effect */}
            <div
                className={cn(
                    "absolute -inset-0.5 rounded-2xl bg-gradient-to-r opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-60",
                    color
                )}
            />

            {/* Card */}
            <div className="relative flex flex-col gap-3 rounded-2xl border border-white/10 bg-background/80 p-5 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-background/90 dark:bg-zinc-900/80">
                {/* Icon with gradient background */}
                <div
                    className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg",
                        color
                    )}
                >
                    <IconComponent className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-1">
                    <h3 className="font-bold text-lg tracking-tight">{title}</h3>
                    <p className="text-sm font-medium text-primary">{event}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                </p>

                {/* Date badge */}
                <div className="mt-auto pt-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {date}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
