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
        <Card className="w-full border-border bg-muted/20 py-0 text-card-foreground hover:border-border hover:bg-muted/20">
            <CardContent className="flex items-start gap-3 p-4">
                {/* Author Avatar with profile image and fallback */}
                <Avatar className="h-12 w-12 shrink-0 border-2 border-border">
                    <AvatarImage src="/images/profile/kieran-pritchard.jpg" alt="Kieran Pritchard" />
                    <AvatarFallback>KP</AvatarFallback>
                </Avatar>

                {/* Author Info: Name and Brief Bio */}
                <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold">Kieran Pritchard</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        Digital Software Development student focused on ethical hacking and secure system architecture.
                    </p>

                    {/* Social Media Links: GitHub, X (Twitter), and LinkedIn */}
                    <div className="mt-1 flex gap-1">
                        <Button asChild variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:bg-muted hover:text-foreground">
                            <a href="https://github.com/KieranPritchard" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile">
                                <SiGithub className="h-3.5 w-3.5" />
                            </a>
                        </Button>
                        <Button asChild variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:bg-muted hover:text-foreground">
                            <a href="https://x.com/OverF10w_0x" target="_blank" rel="noopener noreferrer" aria-label="Visit X profile">
                                <SiX className="h-3.5 w-3.5" />
                            </a>
                        </Button>
                        <Button asChild variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:bg-muted hover:text-foreground">
                            <a href="https://www.linkedin.com/in/kieran-pritchard/" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn profile">
                                <IconBrandLinkedin className="h-3.5 w-3.5" />
                            </a>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}