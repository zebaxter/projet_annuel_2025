
import { useState } from "react";
import { History as HistoryIcon, Play, ExternalLink, Heart, Search, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";

// Données de démonstration
const mockHistory = [
  {
    id: 1,
    title: "As It Was",
    artist: "Harry Styles",
    album: "Harry's House",
    duration: "2:47",
    coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
    searchDate: "2024-01-20T14:30:00",
    isFavorite: false
  },
  {
    id: 2,
    title: "Anti-Hero",
    artist: "Taylor Swift",
    album: "Midnights",
    duration: "3:20",
    coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    searchDate: "2024-01-19T16:45:00",
    isFavorite: true
  },
  {
    id: 3,
    title: "Unholy",
    artist: "Sam Smith ft. Kim Petras",
    album: "Gloria",
    duration: "2:36",
    coverUrl: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=300&h=300&fit=crop",
    searchDate: "2024-01-18T10:15:00",
    isFavorite: false
  },
  {
    id: 4,
    title: "Flowers",
    artist: "Miley Cyrus",
    album: "Endless Summer Vacation",
    duration: "3:20",
    coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
    searchDate: "2024-01-17T20:22:00",
    isFavorite: true
  }
];

const History = () => {
  const [history, setHistory] = useState(mockHistory);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFavorite = (id: number) => {
    setHistory(history.map(song => 
      song.id === id ? { ...song, isFavorite: !song.isFavorite } : song
    ));
  };

  const filteredHistory = history.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.album.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "Aujourd'hui";
    if (diffDays === 2) return "Hier";
    if (diffDays <= 7) return `Il y a ${diffDays - 1} jours`;
    return date.toLocaleDateString('fr-FR');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HistoryIcon className="w-12 h-12 text-blue-500 mr-3" />
            <h1 className="text-4xl font-bold text-white">Historique</h1>
          </div>
          <p className="text-gray-300 text-lg">
            Retrouvez toutes vos recherches musicales précédentes
          </p>
        </div>

        {history.length === 0 ? (
          <div className="text-center py-16">
            <HistoryIcon className="w-24 h-24 text-gray-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Aucun historique pour le moment
            </h3>
            <p className="text-gray-400 mb-8">
              Commencez à identifier des musiques pour voir votre historique !
            </p>
            <Button
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full"
            >
              Identifier une musique
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Barre de recherche */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Rechercher dans votre historique..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-black/40 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
              />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-gray-400">
                {filteredHistory.length} résultat{filteredHistory.length > 1 ? 's' : ''} trouvé{filteredHistory.length > 1 ? 's' : ''}
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
              >
                Effacer l'historique
              </Button>
            </div>

            {filteredHistory.length === 0 ? (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">
                  Aucun résultat trouvé pour "{searchTerm}"
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredHistory.map((song) => (
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
                          <div className="flex items-center space-x-2 mt-1">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <p className="text-sm text-gray-500">
                              {formatDate(song.searchDate)} à {new Date(song.searchDate).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
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
                            className={`${
                              song.isFavorite
                                ? "border-pink-500 text-pink-500 bg-pink-500/10"
                                : "border-gray-500 text-gray-500 hover:bg-pink-500 hover:text-white hover:border-pink-500"
                            }`}
                            onClick={() => toggleFavorite(song.id)}
                          >
                            <Heart className={`w-4 h-4 ${song.isFavorite ? 'fill-current' : ''}`} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
