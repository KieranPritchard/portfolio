"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { IconBrandLinkedin } from "@tabler/icons-react";

export default function WhoAmI() {
    return (
        <Card className="w-full md:max-w-xs sticky top-8">
            <CardContent className="flex flex-col items-center space-y-4">
                {/* Avatar and profile image */}
                <Avatar className="w-24 h-24 border-2">
                    <AvatarImage src="/kieran-pritchard.jpg" alt="Kieran Pritchard" />
                {/* Fallback image */}
                <AvatarFallback>KP</AvatarFallback>
                </Avatar>
                {/* Text */}
                <div className="text-center">
                    <h3 className="text-lg font-bold text-left">Kieran Pritchard</h3>
                        <p className="text-sm text-left text-muted-foreground mt-2 leading-relaxed">
                            I am a high-achieving Digital Software Development student at Bournemouth & Poole College with a dedicated focus on ethical hacking and secure system architecture.
                        </p>
                </div>
                {/* Social Icons */}
                <div className="flex gap-2">
                    <Button asChild variant="ghost" size="icon">
                        <a href="https://github.com/KieranPritchard" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile">
                            <SiGithub className="w-4 h-4" />
                        </a>
                    </Button>
                    <Button asChild variant="ghost" size="icon">
                        <a href="https://x.com/OverF10w_0x" target="_blank" rel="noopener noreferrer" aria-label="Visit X profile">
                            <SiX className="w-4 h-4" />
                        </a>
                    </Button>
                    <Button asChild variant="ghost" size="icon">
                        <a href="https://www.linkedin.com/in/kieran-pritchard/" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn profile">
                            <IconBrandLinkedin className="w-4 h-4" />
                        </a>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}