import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';

export default function CharterPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [accepted, setAccepted] = useState(false);
  const [showDirectoryChoice, setShowDirectoryChoice] = useState(false);

  // Vérifier si on vient de l'annuaire
  const fromDirectory = location.state?.from === 'directory';

  const handleAccept = () => {
    setAccepted(true);
    if (fromDirectory) {
      setShowDirectoryChoice(true);
    } else {
      // Comportement normal pour les autres cas
      setTimeout(() => {
        navigate('/directory');
      }, 2000);
    }
  };

  const handleDirectoryChoice = (type) => {
    if (type === 'therapists') {
      navigate('/directory');
    } else {
      navigate('/artists-directory');
    }
  };

  return (
        </div>

        {accepted && !showDirectoryChoice && (
          <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg text-center">
          </div>
        )}

        {showDirectoryChoice && (
          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Choisissez votre annuaire
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => handleDirectoryChoice('therapists')}
                className="p-6 bg-white border-2 border-blue-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 text-center group"
              >
                <div className="text-3xl mb-3">🌿</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Annuaire des Thérapeutes
                </h4>
                <p className="text-gray-600 text-sm">
                  Découvrez nos praticiens en thérapies holistiques et énergétiques
                </p>
              </button>
              
              <button
                onClick={() => handleDirectoryChoice('artists')}
                className="p-6 bg-white border-2 border-purple-200 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-all duration-200 text-center group"
              >
                <div className="text-3xl mb-3">🎨</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Annuaire des Artistes
                </h4>
                <p className="text-gray-600 text-sm">
                  Explorez les créations artisanales et œuvres inspirées
                </p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}