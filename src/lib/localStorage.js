// Simulation de données pour les thérapeutes
const mockTherapists = [
  {
    id: '1',
    name: 'Marie Dubois',
    vibrational_phrase: 'Harmonie et équilibre intérieur',
    image_url: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=400',
    elements: ['Terre', 'Eau'],
    commune: 'Pointe-à-Pitre',
    rating: 4.8,
    featured: true,
    approach: 'Approche holistique combinant thérapies énergétiques et accompagnement spirituel',
    approved: true
  },
  {
    id: '2',
    name: 'Jean-Claude Martin',
    vibrational_phrase: 'Guérison par les énergies naturelles',
    image_url: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
    elements: ['Feu', 'Air'],
    commune: 'Basse-Terre',
    rating: 4.6,
    featured: false,
    approach: 'Spécialisé dans la lithothérapie et les soins énergétiques',
    approved: true
  },
  {
    id: '3',
    name: 'Sophie Leroy',
    vibrational_phrase: 'Connexion corps-esprit-âme',
    image_url: 'https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=400',
    elements: ['Eau', 'Air'],
    commune: 'Le Gosier',
    rating: 4.9,
    featured: true,
    approach: 'Thérapie par les sons et méditation guidée',
    approved: true
  }
];

// Simulation de données pour les artistes/créateurs
const mockCreators = [
  {
    id: '1',
    name: 'Isabelle Créole',
    craft: 'Poterie artisanale',
    description: 'Créatrice de céramiques inspirées par la nature tropicale de la Guadeloupe',
    image_url: 'https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=400',
    commune: 'Sainte-Anne',
    contact: 'isabelle.creole@email.com',
    featured: true,
    category: 'Artisanat',
    approved: true
  },
  {
    id: '2',
    name: 'Marcus Bambou',
    craft: 'Sculpture sur bois',
    description: 'Sculpteur utilisant uniquement des bois locaux pour créer des œuvres uniques',
    image_url: 'https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=400',
    commune: 'Bouillante',
    contact: '+590 690 12 34 56',
    featured: false,
    category: 'Sculpture',
    approved: true
  },
  {
    id: '3',
    name: 'Lydia Textile',
    craft: 'Tissage traditionnel',
    description: 'Artiste textile spécialisée dans les techniques ancestrales caribéennes',
    image_url: 'https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg?auto=compress&cs=tinysrgb&w=400',
    commune: 'Pointe-à-Pitre',
    contact: 'https://lydia-textile.com',
    featured: true,
    category: 'Textile',
    approved: true
  }
];

// Fonctions pour les thérapeutes
export const getTherapists = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockTherapists), 100);
  });
};

export const getTherapistById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const therapist = mockTherapists.find(t => t.id === id);
      resolve(therapist);
    }, 100);
  });
};

// Fonctions pour les créateurs/artistes
export const getCreators = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockCreators), 100);
  });
};

export const getCreatorById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const creator = mockCreators.find(c => c.id === id);
      resolve(creator);
    }, 100);
  });
};

// Fonction pour sauvegarder un nouveau thérapeute
export const saveTherapist = (therapistData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newTherapist = {
        ...therapistData,
        id: Date.now().toString(),
        approved: false,
        created_at: new Date().toISOString()
      };
      mockTherapists.push(newTherapist);
      resolve(newTherapist);
    }, 500);
  });
};

// Fonction pour sauvegarder un nouveau créateur
export const saveCreator = (creatorData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newCreator = {
        ...creatorData,
        id: Date.now().toString(),
        approved: false,
        created_at: new Date().toISOString()
      };
      mockCreators.push(newCreator);
      resolve(newCreator);
    }, 500);
  });
};