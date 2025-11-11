import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function DiscordGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black/95 to-black/90">
      <div className="w-full px-2 sm:px-4 py-4 sm:py-8">
        <div className="mb-4 px-2">
          <Link href="/">
            <Button variant="ghost" data-testid="button-back-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 text-center px-4" data-testid="heading-discord-guide">
            How to Connect to Discord
          </h1>

          <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
            <img
              src="https://downloads.intercomcdn.com/i/o/llm7ll78/1338834540/dfb514d4862619b53fc18581e1e5/How+to+connect+discord+to+your+account.gif?expires=1762860600&signature=adbf8cb64d916221caff1ceba2e98f6720556dcb80ccb3c8b2e3072b5abd1a7b&req=dSMkHsF9mYRbWfMW1HO4zaEqbchBvs8PDlCGj%2BoYTKVnebwI5FmgJrTeTyFs%0AxMueYe6%2F8OM0jQsQds%3D%0A"
              alt="How to connect Discord to your account"
              className="w-full h-auto"
              data-testid="img-discord-guide"
            />
          </div>

          <div className="mt-6 sm:mt-8 text-center px-4 pb-8">
            <Link href="/">
              <Button size="lg" data-testid="button-back-home-bottom">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
