
import { Link } from "react-router-dom";
import { Mic, Music, Heart, History, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
        <div className="relative px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-70" />
                <Music className="relative w-20 h-20 text-white mx-auto" />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Soundify
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Découvrez instantanément le nom de n'importe quelle chanson qui joue autour de vous. 
              Une technologie de pointe pour identifier la musique en quelques secondes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/record">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  <Mic className="w-5 h-5 mr-2" />
                  Commencer l'écoute
                </Button>
              </Link>
              
              <Link to="/auth">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent"
                >
                  Se connecter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pourquoi choisir Soundify ?
          </h2>
          <p className="text-gray-400 text-lg">
            Une reconnaissance musicale rapide et précise
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-purple-800/30 to-purple-900/30 border border-purple-700/30 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Reconnaissance Instantanée</h3>
            <p className="text-gray-400">
              Identifiez n'importe quelle chanson en moins de 5 secondes grâce à notre technologie avancée
            </p>
          </div>
          
          <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-blue-800/30 to-blue-900/30 border border-blue-700/30 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Favoris Personnalisés</h3>
            <p className="text-gray-400">
              Sauvegardez vos découvertes musicales et créez votre collection personnelle
            </p>
          </div>
          
          <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-indigo-800/30 to-indigo-900/30 border border-indigo-700/30 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <History className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Historique Complet</h3>
            <p className="text-gray-400">
              Retrouvez facilement toutes vos recherches précédentes dans votre historique
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 mx-auto max-w-4xl sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-12 backdrop-blur-sm border border-purple-500/30">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à découvrir la musique autour de vous ?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Rejoignez des milliers d'utilisateurs qui découvrent de nouvelles musiques chaque jour
          </p>
          <Link to="/record">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              <Mic className="w-5 h-5 mr-2" />
              Commencer maintenant
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
