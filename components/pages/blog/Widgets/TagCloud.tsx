import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils"
import type { BlogSummary } from "@/types/blog";

/**
 * Mapping of color names to their respective Tailwind CSS background and text classes
 * for both light and dark modes.
 */
const colorStyles: Record<string, string> = {
    red: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
    orange: "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
    amber: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    yellow: "bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300",
    lime: "bg-lime-50 text-lime-700 dark:bg-lime-950 dark:text-lime-300",
    green: "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
    emerald: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
    teal: "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300",
    cyan: "bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300",
    sky: "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
    blue: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
    indigo: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300",
    violet: "bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
    purple: "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
    fuchsia: "bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-950 dark:text-fuchsia-300",
    pink: "bg-pink-50 text-pink-700 dark:bg-pink-950 dark:text-pink-300",
    rose: "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
    slate: "bg-slate-50 text-slate-700 dark:bg-slate-950 dark:text-slate-300",
    gray: "bg-gray-50 text-gray-700 dark:bg-gray-950 dark:text-gray-300",
    zinc: "bg-zinc-50 text-zinc-700 dark:bg-zinc-950 dark:text-zinc-300",
    neutral: "bg-neutral-50 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300",
    stone: "bg-stone-50 text-stone-700 dark:bg-stone-950 dark:text-stone-300",
};

/**
 * Array of available Tailwind color keys extracted from colorStyles.
 */
const tailwindColors = Object.keys(colorStyles);

/**
 * Selects a badge style based on the provided index, cycling through available colors.
 * 
 * @param index - The index of the item being styled.
 * @returns A string of Tailwind CSS classes.
 */
const getBadgeStyle = (index: number) => {
    const colorKey = tailwindColors[index % tailwindColors.length];
    return colorStyles[colorKey];
};

/**
 * TagCloud Component
 * 
 * A widget that displays a list of unique blog categories as colorful badges.
 * 
 * @param posts - An array of blog summaries used to extract unique categories.
 */
export default function TagCloud({ posts }: { posts: BlogSummary[] }) {
    // Extract unique categories and capitalize the first letter of each
    const uniqueCategories = [...new Set(posts.map((post) => post.category.charAt(0).toUpperCase() + post.category.slice(1)))];

    return (
        <Card className="w-full">
            <CardContent className="flex flex-col items-start space-y-4 p-6">
                <div className="w-full">
                    <h3 className="text-lg font-bold mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {uniqueCategories.map((category, index) => (
                            <Badge key={category} className={cn("hover:opacity-80 transition-opacity", getBadgeStyle(index))}>
                                {category}
                            </Badge>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}