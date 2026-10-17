"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { IconBrandLinkedin } from "@tabler/icons-react";

/**
 * WhoAmI Component
 * 
 * A compact "About the Author" widget for the blog sidebar.
 * Includes an avatar, a brief bio, and social media links.
 */
export default function WhoAmI() {
    return (
        <Card className="w-full">
            <CardContent className="flex flex-col items-center space-y-4 p-6">
                {/* Author Avatar with profile image and fallback */}
                <Avatar className="w-24 h-24 border-2 border-border">
                    <AvatarImage src="/kieran-pritchard.jpg" alt="Kieran Pritchard" />
                    <AvatarFallback>KP</AvatarFallback>
                </Avatar>

                {/* Author Info: Name and Brief Bio */}
                <div className="text-center">
                    <h3 className="text-lg font-bold">Kieran Pritchard</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        Digital Software Development student focused on ethical hacking and secure system architecture.
                    </p>
                </div>

                {/* Social Media Links: GitHub, X (Twitter), and LinkedIn */}
                <div className="flex gap-2">
                    <Button asChild variant="ghost" size="icon" className="hover:text-primary transition-colors">
                        <a href="https://github.com/KieranPritchard" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile">
                            <SiGithub className="w-4 h-4" />
                        </a>
                    </Button>
                    <Button asChild variant="ghost" size="icon" className="hover:text-primary transition-colors">
                        <a href="https://x.com/OverF10w_0x" target="_blank" rel="noopener noreferrer" aria-label="Visit X profile">
                            <SiX className="w-4 h-4" />
                        </a>
                    </Button>
                    <Button asChild variant="ghost" size="icon" className="hover:text-primary transition-colors">
                        <a href="https://www.linkedin.com/in/kieran-pritchard/" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn profile">
                            <IconBrandLinkedin className="w-4 h-4" />
                        </a>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}