import React, { useState, useEffect, useRef } from 'react';
import { Download, ChevronRight, Sparkles, Gift, Star, Clock, DollarSign, MapPin, Heart, Headset, ArrowRight } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDate = new Date('2025-01-25T23:59:59');
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {
            // Handle autoplay failure silently
          });
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const tableData = [
    { clients: 1, weekly: 450, monthly: 1800, yearly: 21600 },
    { clients: 2, weekly: 900, monthly: 3600, yearly: 43200 },
    { clients: 5, weekly: 2250, monthly: 9000, yearly: 108000 },
    { clients: 10, weekly: 4500, monthly: 18000, yearly: 216000 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FD3F92] via-[#fe8bbd] to-[#FD3F92]">
      {/* Header avec Timer et Contact */}
      <div className="bg-white py-3 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Headset className="text-[#FD3F92]" size={24} />
              <a href="tel:438-545-9908" className="text-[#FD3F92] font-semibold hover:text-[#FD3F92]/80">
                438-545-9908
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-[#FD3F92] font-semibold">L'offre se termine dans :</p>
              <div className="flex gap-4">
                <div className="text-center">
                  <span className="text-2xl font-bold text-[#FD3F92]">{timeLeft.days}</span>
                  <p className="text-sm text-gray-600">Jours</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold text-[#FD3F92]">{timeLeft.hours}</span>
                  <p className="text-sm text-gray-600">Heures</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold text-[#FD3F92]">{timeLeft.minutes}</span>
                  <p className="text-sm text-gray-600">Minutes</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold text-[#FD3F92]">{timeLeft.seconds}</span>
                  <p className="text-sm text-gray-600">Secondes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="container mx-auto px-4 py-12 relative">
          <div className="flex flex-col items-center gap-12">
            <div className="w-full space-y-6 text-center">
              <div className="bg-gradient-to-r from-[#FD3F92] via-[#fe8bbd] to-[#FD3F92] p-1 rounded-2xl">
                <div className="bg-white rounded-xl p-6">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FD3F92] leading-tight">
                    Pourquoi Travailler pour 20$ de l'Heure Quand Vous Pouvez en Gagner 200$ ?
                  </h1>
                </div>
              </div>
              <img
                src="https://static.wixstatic.com/media/d88ab2_ae78c5f86e5e490d9affaa8f6b61d918~mv2.png"
                alt="Services de beauté"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-xl mb-6"
              />
              <div className="grid grid-cols-2 gap-6 text-white font-semibold text-xl mb-6">
                <div className="bg-[#FD3F92]/80 p-4 rounded-lg shadow-lg backdrop-blur-sm transform hover:scale-105 transition-all">
                  <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">Pose d'ongles</span>
                </div>
                <div className="bg-[#FD3F92]/80 p-4 rounded-lg shadow-lg backdrop-blur-sm transform hover:scale-105 transition-all">
                  <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">Extension de cils</span>
                </div>
                <div className="bg-[#FD3F92]/80 p-4 rounded-lg shadow-lg backdrop-blur-sm transform hover:scale-105 transition-all">
                  <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">Microblading</span>
                </div>
                <div className="bg-[#FD3F92]/80 p-4 rounded-lg shadow-lg backdrop-blur-sm transform hover:scale-105 transition-all">
                  <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">Lip blush</span>
                </div>
              </div>
              <div className="relative py-4">
                <img
                  src="https://static.wixstatic.com/media/d88ab2_0fbabf89d0ea4434a9871ba3a20e6de7~mv2.png"
                  alt="Services supplémentaires"
                  className="w-full max-w-2xl mx-auto transform hover:scale-105 transition-duration-300 drop-shadow-[0_10px_10px_rgba(253,63,146,0.3)] border-4 border-white/30 rounded-xl"
                />
              </div>
              <p className="text-xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                Organisez Vos Objectifs pour 2025 et Préparez-vous à Augmenter Vos Revenus !
              </p>
              <p className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                Téléchargez maintenant votre planner digital pour organiser vos objectifs financiers et professionnels pour 2025.
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://d88ab27a-13d3-4f4b-8726-df2a11092ead.usrfiles.com/ugd/d88ab2_7a9fb1a58299486dab399a0cf365403c.pdf" 
                  download="Agenda-Electronique"
                  className="inline-flex items-center gap-2 bg-white text-[#FD3F92] px-8 py-4 rounded-full hover:bg-[#FD3F92]/10 transition-colors font-semibold"
                >
                  <Download size={20} />
                  Télécharger Maintenant
                </a>
              </div>
            </div>
            <div className="w-full max-w-2xl mx-auto">
              <img
                src="https://static.wixstatic.com/media/d88ab2_b5ac9999644a4521b98700b5a01e4aef~mv2.png"
                alt="Formation beauté"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section "Pourquoi choisir notre formation" */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FD3F92] text-center mb-12">
              Pourquoi Choisir Notre Formation ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  image: "https://static.wixstatic.com/media/d88ab2_06f96cc0e7d743c9938043aa719d0d26~mv2.jpg",
                  title: "Formation Professionnelle",
                  description: "Apprenez les techniques les plus demandées du marché"
                },
                {
                  image: "https://static.wixstatic.com/media/d88ab2_987d0f0c5a8043d3b13884b1507f3b83~mv2.jpg",
                  title: "Pratique Intensive",
                  description: "Perfectionnez vos compétences avec des exercices pratiques"
                },
                {
                  image: "https://static.wixstatic.com/media/d88ab2_8cff5eb783814df29ae1fb261e8b199b~mv2.jpg",
                  title: "Support Continu",
                  description: "Bénéficiez d'un accompagnement personnalisé"
                }
              ].map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-[#FD3F92] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Avantages de la Formation */}
            <div className="mt-16">
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-[#FD3F92]/5 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#FD3F92] mb-4">Formation Professionnelle</h3>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-start gap-2">
                        <Star className="text-[#FD3F92] flex-shrink-0 mt-1" size={16} />
                        <span>Formation complète avec certification professionnelle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="text-[#FD3F92] flex-shrink-0 mt-1" size={16} />
                        <span>Support personnalisé tout au long de votre apprentissage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="text-[#FD3F92] flex-shrink-0 mt-1" size={16} />
                        <span>Accès à une communauté d'experts</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[#FD3F92]/5 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#FD3F92] mb-4">Avantages Business</h3>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-start gap-2">
                        <Star className="text-[#FD3F92] flex-shrink-0 mt-1" size={16} />
                        <span>Support à la création d'entreprise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="text-[#FD3F92] flex-shrink-0 mt-1" size={16} />
                        <span>Conseils marketing et développement clientèle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="text-[#FD3F92] flex-shrink-0 mt-1" size={16} />
                        <span>Stratégies de tarification et rentabilité</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <img
              src="https://static.wixstatic.com/media/d88ab2_a3ae73f5076c40eda3111637b8c48107~mv2.jpg"
              alt="Formation beauté premium"
              className="w-full rounded-lg shadow-xl mb-12"
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Offre 1 */}
              <div className="bg-gradient-to-br from-[#FD3F92] via-[#fe8bbd] to-[#FD3F92] p-1 rounded-xl">
                <div className="bg-white p-6 rounded-lg h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <Sparkles className="text-[#FD3F92]" size={24} />
                    <h2 className="text-2xl font-bold text-[#FD3F92]">Offre Solo</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-3xl font-bold text-[#FD3F92]">990 $</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Star className="text-[#FD3F92] flex-shrink-0 mt-1" size={16} />
                        <span>1 Formation complète</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Star className="text-[#FD3F92] flex-shrink-0 mt-1" size={16} />
                        <span>1 Certificat professionnel</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Star className="text-[#FD3F92] flex-shrink-0 mt-1" size={16} />
                        <span>Support personnalisé</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Offre 2 */}
              <div className="bg-gradient-to-br from-[#FD3F92] via-[#fe8bbd] to-[#FD3F92] p-1 rounded-xl">
                <div className="bg-white p-6 rounded-lg h-full relative overflow-hidden">
                  <div className="absolute top-2 right-2 bg-[#FD3F92] text-white px-3 py-1 rounded-full text-sm">
                    Meilleure offre
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <Gift className="text-[#FD3F92]" size={24} />
                    <h2 className="text-2xl font-bold text-[#FD3F92]">Pack Premium</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-3xl font-bold text-[#FD3F92]">1990 $</p>
                      <p className="text-sm text-gray-600">au lieu de 2680 $ - Offre valable jusqu'au 25 janvier</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Star className="text-[#FD3F92] flex-shrink-0 mt-1" size={16} />
                        <span>4 Formations complètes</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Star className="text-[#FD3F92] flex-shrink-0 mt-1" size={16} />
                        <span>4 Certificats professionnels</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Star className="text-[#FD3F92] flex-shrink-0 mt-1" size={16} />
                        <span>4 kits professionnels offerts</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Star className="text-[#FD3F92] flex-shrink-0 mt-1" size={16} />
                        <span>Support prioritaire</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Star className="text-[#FD3F92] flex-shrink-0 mt-1" size={16} />
                        <span>Support à la création d'entreprise</span>
                      </div>
                      <div className="flex items-center gap-4 mt-4 bg-[#FD3F92]/20 p-3 rounded-lg">
                        <img
                          src="https://static.wixstatic.com/media/d88ab2_05143045af87491cbeed45a4e3ba5244~mv2.png"
                          alt="Carte cadeau Amazon"
                          className="w-16 h-16 object-contain"
                        />
                        <div>
                          <p className="font-semibold text-[#FD3F92]">Carte Cadeau Amazon</p>
                          <p className="text-sm">Valeur de 100$</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Earnings Table */}
            <div className="overflow-x-auto mt-12">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
                <thead className="bg-[#FD3F92] text-white">
                  <tr>
                    <th className="p-4 text-left">Clientes par semaine</th>
                    <th className="p-4 text-left">Gains par semaine</th>
                    <th className="p-4 text-left">Gains par mois</th>
                    <th className="p-4 text-left">Gains par an</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index} className="border-b hover:bg-[#FD3F92]/20">
                      <td className="p-4">{row.clients} cliente{row.clients > 1 ? 's' : ''}</td>
                      <td className="p-4">{row.weekly}$</td>
                      <td className="p-4">{row.monthly}$</td>
                      <td className="p-4">{row.yearly}$</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-gray-600 mt-2">* Estimations de gains basées sur le microblading.</p>
            </div>

            <button
              onClick={() => window.location.href = 'https://buy.stripe.com/14k3fW2HU2G17Cw6or'}
              className="w-full mt-8 bg-[#FD3F92] text-white px-8 py-4 rounded-full hover:bg-[#FD3F92]/80 transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-lg font-semibold"
            >
              Je m'inscris maintenant
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            {/* Bannière des avantages */}
            <div className="mt-12">
              <img
                src="https://static.wixstatic.com/media/d88ab2_7020d744eb22459287315763e01c2104~mv2.jpeg"
                alt="Avantages de la formation"
                className="w-full rounded-lg shadow-xl mb-8"
              />
              <div className="bg-gradient-to-r from-[#FD3F92] via-[#fe8bbd] to-[#FD3F92] p-1 rounded-2xl">
                <div className="bg-white rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-[#FD3F92] text-center mb-8">
                    Avantages de Notre Formation en Beauté
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="bg-[#FD3F92]/20 p-3 rounded-full">
                        <Clock className="text-[#FD3F92]" size={24} />
                      </div>
                      <p className="font-medium">Plus de Temps pour Vous</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="bg-[#FD3F92]/20 p-3 rounded-full">
                        <DollarSign className="text-[#FD3F92]" size={24} />
                      </div>
                      <p className="font-medium">50-200$ / Heure</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="bg-[#FD3F92]/20 p-3 rounded-full">
                        <MapPin className="text-[#FD3F92]" size={24} />
                      </div>
                      <p className="font-medium">Flexibilité Géographique</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="bg-[#FD3F92]/20 p-3 rounded-full">
                        <Heart className="text-[#FD3F92]" size={24} />
                      </div>
                      <p className="font-medium">Conciliation Travail-Famille</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Témoignages et Vidéo */}
            <div className="mt-16 space-y-8">
              <h3 className="text-3xl font-bold text-[#FD3F92] text-center">
                Ce Que Nos Étudiantes Disent
              </h3>
              <p className="text-center text-gray-700 max-w-2xl mx-auto">
                Découvrez les histoires inspirantes de nos étudiantes qui ont transformé leur passion en une carrière réussie grâce à notre formation.
              </p>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Vidéo de présentation */}
                <div className="md:w-1/2 relative rounded-2xl overflow-hidden shadow-xl aspect-[9/16]">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster="https://video.wixstatic.com/video/d88ab2_bdd91a111a47451c8ce4df22b76850d2/thumb/0_0.jpg"
                  >
                    <source
                      src="https://video.wixstatic.com/video/d88ab2_bdd91a111a47451c8ce4df22b76850d2/1080p/mp4/file.mp4"
                      type="video/mp4"
                    />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                </div>
                {/* Image témoignages */}
                <div className="md:w-1/2">
                  <img
                    src="https://static.wixstatic.com/media/d88ab2_84b77cbb1e9941db98a80b51e17f311a~mv2.png"
                    alt="Témoignages de nos étudiantes"
                    className="w-full rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>

            {/* Section Questions Fréquentes */}
            <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#FD3F92] text-center mb-8">
                Questions Fréquentes
              </h3>
              <div className="space-y-6">
                <div className="bg-[#FD3F92]/5 p-6 rounded-lg">
                  <h4 className="font-bold text-[#FD3F92] mb-2">Est-ce que vous offrez un certificat ?</h4>
                  <p>Oui, à la fin de la formation, vous recevrez un certificat reconnu qui atteste de vos compétences.</p>
                </div>
                <div className="bg-[#FD3F92]/5 p-6 rounded-lg">
                  <h4 className="font-bold text-[#FD3F92] mb-2">Vais-je trouver des clientes ?</h4>
                  <p>Absolument ! Nous avons des professionnels du marketing qui peuvent vous créer un site web et vous aider à trouver des clientes.</p>
                </div>
                <div className="bg-[#FD3F92]/5 p-6 rounded-lg">
                  <h4 className="font-bold text-[#FD3F92] mb-2">Est-ce qu'on apprend sur des formations courtes ?</h4>
                  <p>Oui, et c'est unique : vous pouvez revenir même après la formation pour vous entraîner avec vos modèles jusqu'à ce que vous soyez totalement assurée.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8">
              <button
                onClick={() => window.location.href = 'https://buy.stripe.com/14k3fW2HU2G17Cw6or'}
                className="w-full mt-12 bg-[#FD3F92] text-white px-8 py-4 rounded-full hover:bg-[#FD3F92]/80 transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-lg font-semibold"
              >
                Je commence ma formation
                <ChevronRight size={20} />
              </button>

              {/* Logo */}
              <img
                src="https://static.wixstatic.com/media/d88ab2_48963ad2a61f4f87aedeb45219c0aeaa~mv2.png"
                alt="Logo"
                className="w-1/2 max-w-[200px] mx-auto mt-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact flottant */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="tel:438-545-9908"
          className="flex items-center gap-2 bg-white text-[#FD3F92] px-4 py-2 rounded-full shadow-lg hover:bg-[#FD3F92]/10 transition-colors"
        >
          <Headset size={20} />
          <span className="font-semibold">438-545-9908</span>
        </a>
      </div>
    </div>
  );
}

export default App;