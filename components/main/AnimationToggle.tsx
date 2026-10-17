"use client"
import { useMotionPreference } from "@/components/providers/MotionProvider"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react";

/**
 * A button component that toggles global animations on or off.
 * Uses the MotionContext to manage state.
 */
export const AnimationToggle = () => {
    const { toggleAnimation } = useMotionPreference();

    return (
        <Button 
            className="rounded-lg" 
            variant="outline" 
            size="icon" 
            onClick={toggleAnimation}
            title="Toggle Animations"
        >
            <Clock className="h-4 w-4" />
        </Button>
    );
};

