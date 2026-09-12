"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface SkillCategoryProps {
    name: string;
    skills: readonly string[];
    index: number;
}

const categoryColors: Record<string, string> = {
    Languages: "from-blue-500 to-cyan-400",
    Frameworks: "from-purple-500 to-pink-400",
    "Cloud & DevOps": "from-orange-500 to-amber-400",
    "AI & Data": "from-emerald-500 to-teal-400",
    Databases: "from-rose-500 to-red-400",
    Design: "from-violet-500 to-purple-400",
};

const categoryIcons: Record<string, string> = {
    Languages: "💻",
    Frameworks: "🚀",
    "Cloud & DevOps": "☁️",
    "AI & Data": "🤖",
    Databases: "🗄️",
    Design: "🎨",
};

export function SkillCategory({ name, skills, index }: SkillCategoryProps) {
    const gradientColor = categoryColors[name] || "from-gray-500 to-gray-400";
    const icon = categoryIcons[name] || "⚡";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="group relative"
        >
            {/* Card */}
            <div className="relative rounded-xl border border-white/10 bg-background/60 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-background/80 dark:bg-zinc-900/60">
                {/* Category header */}
                <div className="mb-3 flex items-center gap-2">
                    <span className="text-lg">{icon}</span>
                    <h3
                        className={cn(
                            "bg-gradient-to-r bg-clip-text font-semibold text-transparent",
                            gradientColor
                        )}
                    >
                        {name}
                    </h3>
                </div>

                {/* Skills grid */}
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, skillIndex) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.1 + skillIndex * 0.03,
                            }}
                        >
                            <Badge
                                variant="secondary"
                                className="cursor-default transition-all duration-200 hover:scale-105 hover:bg-primary/20"
                            >
                                {skill}
                            </Badge>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
