"use client";

import { cn } from "@/lib/utils";
import BlurFade from "@/components/magicui/blur-fade";

export const GithubStats = () => {
    return (
        <section id="github-stats">
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={0.25}>
                    <h2 className="text-xl font-bold">GitHub Activity</h2>
                </BlurFade>
                <BlurFade delay={0.3}>
                    <div className="relative overflow-hidden rounded-xl border bg-background/50 p-6 shadow-sm">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="space-y-1">
                                <h3 className="font-semibold text-foreground">@Walapalam</h3>
                                <p className="text-sm text-muted-foreground">
                                    1,370+ total contributions
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                    <span className="size-1.5 rounded-full bg-emerald-500" />
                                    Top 5%
                                </span>
                                <span className="text-xs text-muted-foreground">
                                    821 contributions in the last year
                                </span>
                            </div>
                        </div>

                        {/* Simulated Contribution Graph */}
                        <div className="mt-6 flex gap-1 overflow-hidden opacity-80 mask-image-b">
                            {Array.from({ length: 52 }).map((_, weekIndex) => (
                                <div key={weekIndex} className="flex flex-col gap-1">
                                    {Array.from({ length: 7 }).map((_, dayIndex) => {
                                        // Randomize intensity based on a "busy" persona
                                        const intensity = Math.random();
                                        let bgClass = "bg-muted/20"; // Level 0

                                        if (intensity > 0.8) bgClass = "bg-emerald-500"; // Level 4
                                        else if (intensity > 0.6) bgClass = "bg-emerald-500/80"; // Level 3
                                        else if (intensity > 0.4) bgClass = "bg-emerald-500/60"; // Level 2
                                        else if (intensity > 0.2) bgClass = "bg-emerald-500/40"; // Level 1

                                        return (
                                            <div
                                                key={`${weekIndex}-${dayIndex}`}
                                                className={cn(
                                                    "size-2.5 rounded-[1px] sm:size-3",
                                                    bgClass
                                                )}
                                            />
                                        );
                                    })}
                                </div>
                            ))}
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
                    </div>
                </BlurFade>
            </div>
        </section>
    );
};
