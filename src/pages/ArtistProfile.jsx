import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Palette, Mail, Phone, Globe, Star } from 'lucide-react';
import { getCreators } from '../lib/localStorage';

export default function ArtistProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArtist = async () => {
      try {
        const creators = await getCreators();
        const foundArtist = creators.find(c => c.id === id);
        setArtist(foundArtist);
      } catch (error) {
        console.error('Erreur lors du chargement de l\'artiste:', error);
      } finally {
        setLoading(false);
      }
    };

    loadArtist();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement du profil...</p>
        </div>
      </div>
    );
  }

  if (!artist) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <Palette className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Artiste non trouvé</h2>
          <p className="text-gray-600 mb-6">Cet artiste n'existe pas ou n'est plus disponible.</p>
          <Link
            to="/artists-directory"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'annuaire
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/artists-directory')}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'annuaire
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Image de profil */}
          <div className="h-64 bg-gradient-to-br from-purple-100 to-pink-100 relative">
            {artist.image_url ? (
              <img
                src={artist.image_url}
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Palette className="w-24 h-24 text-purple-300" />
              </div>
            )}
            {artist.featured && (
              <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <Star className="w-4 h-4 mr-1 fill-current" />
                Artiste vedette
              </div>
            )}
          </div>

          <div className="p-8">
            {/* Informations principales */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{artist.name}</h1>
              <p className="text-xl text-purple-600 font-medium mb-4">{artist.craft}</p>
              
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                {artist.commune}
              </div>

              {artist.category && (
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 font-medium rounded-full">
                    {artist.category}
                  </span>
                </div>
              )}
            </div>

            {/* Description */}
            {artist.description && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">À propos</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {artist.description}
                  </p>
                </div>
              </div>
            )}

            {/* Contact */}
            {artist.contact && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-3">
                    {artist.contact.includes('@') ? (
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-gray-400 mr-3" />
                        <a
                          href={`mailto:${artist.contact}`}
                          className="text-purple-600 hover:text-purple-700 transition-colors"
                        >
                          {artist.contact}
                        </a>
                      </div>
                    ) : artist.contact.match(/^[\d\s\-\+\(\)]+$/) ? (
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-gray-400 mr-3" />
                        <a
                          href={`tel:${artist.contact}`}
                          className="text-purple-600 hover:text-purple-700 transition-colors"
                        >
                          {artist.contact}
                        </a>
                      </div>
                    ) : artist.contact.startsWith('http') ? (
                      <div className="flex items-center">
                        <Globe className="w-5 h-5 text-gray-400 mr-3" />
                        <a
                          href={artist.contact}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-700 transition-colors"
                        >
                          Visiter le site web
                        </a>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-gray-400 mr-3" />
                        <span className="text-gray-700">{artist.contact}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Bouton de contact principal */}
            <div className="text-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                Contacter l'artiste
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}