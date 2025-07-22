
import { useState } from "react";
import { Heart, Play, ExternalLink, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

// Données de démonstration
const mockFavorites = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:20",
    coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    addedDate: "2024-01-15"
  },
  {
    id: 2,
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    album: "Fine Line",
    duration: "2:54",
    coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
    addedDate: "2024-01-10"
  },
  {
    id: 3,
    title: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    duration: "3:23",
    coverUrl: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=300&h=300&fit=crop",
    addedDate: "2024-01-08"
  }
];

const Favorites = () => {
  const [favorites, setFavorites] = useState(mockFavorites);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(song => song.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-12 h-12 text-pink-500 mr-3" />
            <h1 className="text-4xl font-bold text-white">Mes Favoris</h1>
          </div>
          <p className="text-gray-300 text-lg">
            Toutes vos découvertes musicales sauvegardées
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-24 h-24 text-gray-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Aucun favori pour le moment
            </h3>
            <p className="text-gray-400 mb-8">
              Commencez à identifier des musiques et ajoutez-les à vos favoris !
            </p>
            <Button
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full"
            >
              Découvrir de la musique
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-400">
                {favorites.length} chanson{favorites.length > 1 ? 's' : ''} dans vos favoris
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
              >
                Tout lire
              </Button>
            </div>

            {favorites.map((song) => (
              <Card key={song.id} className="bg-black/40 backdrop-blur-md border-purple-500/30 hover:bg-black/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={song.coverUrl} 
                        alt={`${song.title} cover`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-white truncate">
                        {song.title}
                      </h3>
                      <p className="text-gray-400 truncate">
                        {song.artist} • {song.album}
                      </p>
                      <p className="text-sm text-gray-500">
                        Ajouté le {new Date(song.addedDate).toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400 text-sm">
                        {song.duration}
                      </span>
                      
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                      >
                        <Play className="w-4 h-4" />
                      </Button>
                      
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                        onClick={() => removeFavorite(song.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
