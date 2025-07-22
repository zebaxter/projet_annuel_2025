
import { useState } from "react";
import { Mic, Square, Volume2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Record = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const startRecording = () => {
    setIsRecording(true);
    // Simulation de l'enregistrement
    setTimeout(() => {
      setIsRecording(false);
      setIsAnalyzing(true);
      // Simulation de l'analyse
      setTimeout(() => {
        setIsAnalyzing(false);
      }, 3000);
    }, 5000);
  };

  const stopRecording = () => {
    setIsRecording(false);
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />
      
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Reconnaissance Musicale
          </h1>
          <p className="text-gray-300 text-lg">
            Appuyez sur le bouton et laissez la musique jouer
          </p>
        </div>

        {/* Recording Visualization */}
        <div className="relative mb-12">
          {/* Outer rings for recording effect */}
          {isRecording && (
            <>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 animate-ping" 
                   style={{ animationDuration: '2s' }} />
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-30 animate-ping" 
                   style={{ animationDuration: '1.5s' }} />
              <div className="absolute inset-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-40 animate-ping" 
                   style={{ animationDuration: '1s' }} />
            </>
          )}
          
          {/* Main recording button */}
          <div className={`w-48 h-48 rounded-full flex items-center justify-center transition-all duration-300 ${
            isRecording 
              ? 'bg-gradient-to-r from-red-500 to-pink-500 shadow-lg shadow-red-500/50' 
              : 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105'
          }`}>
            {isAnalyzing ? (
              <Loader2 className="w-20 h-20 text-white animate-spin" />
            ) : isRecording ? (
              <Square className="w-16 h-16 text-white" />
            ) : (
              <Mic className="w-20 h-20 text-white" />
            )}
          </div>
        </div>

        {/* Recording Status */}
        <div className="text-center mb-8">
          {isAnalyzing ? (
            <div className="space-y-4">
              <p className="text-2xl font-semibold text-white">
                Analyse en cours...
              </p>
              <p className="text-gray-400">
                Identification de la musique
              </p>
            </div>
          ) : isRecording ? (
            <div className="space-y-4">
              <p className="text-2xl font-semibold text-white animate-pulse">
                Écoute en cours...
              </p>
              <p className="text-gray-400">
                Assurez-vous que la musique soit audible
              </p>
              <div className="flex items-center justify-center space-x-2">
                <Volume2 className="w-5 h-5 text-purple-400" />
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-purple-400 animate-pulse rounded-full"
                      style={{
                        height: `${Math.random() * 20 + 10}px`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '0.5s'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-2xl font-semibold text-white">
                Prêt à écouter
              </p>
              <p className="text-gray-400">
                Lancez une chanson et appuyez sur le bouton
              </p>
            </div>
          )}
        </div>

        {/* Control Button */}
        <Button
          size="lg"
          onClick={isRecording ? stopRecording : startRecording}
          disabled={isAnalyzing}
          className={`px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 ${
            isRecording
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/25'
          }`}
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Analyse...
            </>
          ) : isRecording ? (
            <>
              <Square className="w-5 h-5 mr-2" />
              Arrêter l'écoute
            </>
          ) : (
            <>
              <Mic className="w-5 h-5 mr-2" />
              Commencer l'écoute
            </>
          )}
        </Button>

        {/* Tips */}
        <div className="mt-12 max-w-md text-center">
          <h3 className="text-lg font-semibold text-white mb-4">Conseils</h3>
          <div className="space-y-2 text-sm text-gray-400">
            <p>• Assurez-vous d'être dans un environnement relativement calme</p>
            <p>• La musique doit être audible et claire</p>
            <p>• L'écoute dure environ 10-15 secondes</p>
            <p>• Évitez les bruits de fond trop forts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Record;
