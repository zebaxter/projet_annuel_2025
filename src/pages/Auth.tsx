
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Music } from "lucide-react";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    // Simulation de la connexion Google
    setTimeout(() => {
      setIsLoading(false);
      // Ici vous intégrerez la vraie authentification Google
      console.log("Connexion Google simulée");
    }, 2000);
  };

  const handleAppleLogin = () => {
    setIsLoading(true);
    // Simulation de la connexion Apple
    setTimeout(() => {
      setIsLoading(false);
      // Ici vous intégrerez la vraie authentification Apple
      console.log("Connexion Apple simulée");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        <Card className="w-full max-w-md bg-black/40 backdrop-blur-md border-purple-500/30">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Music className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-white">
              Connexion à MusicFinder
            </CardTitle>
            <CardDescription className="text-gray-400">
              Connectez-vous pour sauvegarder vos découvertes musicales
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <Button
              className="w-full h-12 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-all duration-200 flex items-center justify-center space-x-3"
              onClick={handleGoogleLogin}
              disabled={isLoading}
            >
              <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-red-500 rounded-sm flex items-center justify-center">
                <span className="text-xs font-bold text-white">G</span>
              </div>
              <span>Continuer avec Google</span>
            </Button>
            
            <Button
              className="w-full h-12 bg-black hover:bg-gray-900 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center space-x-3 border border-gray-600"
              onClick={handleAppleLogin}
              disabled={isLoading}
            >
              <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                <span className="text-xs font-bold text-black">🍎</span>
              </div>
              <span>Continuer avec Apple</span>
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-transparent px-2 text-gray-400">
                  Pourquoi se connecter ?
                </span>
              </div>
            </div>
            
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>Sauvegardez vos musiques favorites</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>Accédez à votre historique de recherches</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>Synchronisez vos données sur tous vos appareils</p>
              </div>
            </div>
            
            <div className="text-center pt-4">
              <p className="text-xs text-gray-500">
                En vous connectant, vous acceptez nos conditions d'utilisation
                et notre politique de confidentialité.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
