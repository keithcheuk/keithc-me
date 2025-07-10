import React from 'react';
import { ExternalLink, Download, Clapperboard, X, FileText, Mail, Linkedin } from 'lucide-react';
import { 
  SiAutodeskmaya,
  SiKatana,
  SiNuke,
  SiBlender,
  SiCinema4D,
  SiUnrealengine,
  SiHoudini
} from 'react-icons/si';
import { LuCone } from "react-icons/lu";
import { TbBrandMaya } from 'react-icons/tb';
import { credits } from './credits';

function App() {
  const [showReelModal, setShowReelModal] = React.useState(false);
  const [showCVModal, setShowCVModal] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Check URL hash on component mount and when hash changes
  React.useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash === '#reel') {
        setShowReelModal(true);
      } else if (hash === '#cv') {
        setShowCVModal(true);
      }
    };

    // Check on mount
    checkHash();

    // Listen for hash changes
    window.addEventListener('hashchange', checkHash);

    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  const handleReelClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = 'reel';
    setShowReelModal(true);
  };

  const closeReelModal = () => {
    window.history.replaceState(null, '', window.location.pathname);
    setShowReelModal(false);
  };

  const handleCVClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = 'cv';
    setShowCVModal(true);
  };

  const closeCVModal = () => {
    window.history.replaceState(null, '', window.location.pathname);
    setShowCVModal(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              <span className="hidden sm:inline">Keith Cheuk - Lighting Lead</span>
              <span className="sm:hidden">Keith Cheuk</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#cv" onClick={handleCVClick} className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors cursor-pointer">
                <FileText size={18} />
                <span>CV</span>
              </a>
              <a href="#reel" onClick={handleReelClick} className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors cursor-pointer">
                <Clapperboard size={18} />
                <span>Reel</span>
              </a>
              <a href="https://www.imdb.com/name/nm6137404/?ref_=fn_all_nme_1" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                <ExternalLink size={18} />
                <span>IMDB</span>
              </a>
              <div className="flex items-center space-x-2 ml-4">
                <a href="mailto:hing@outlook.com" className="text-white/80 hover:text-white transition-colors">
                  <Mail size={18} />
                </a>
                <a href="https://www.linkedin.com/in/kcheuk" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="py-4 space-y-4 border-t border-gray-700/30 mt-4">
              <a href="#cv" onClick={(e) => { handleCVClick(e); setMobileMenuOpen(false); }} className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors cursor-pointer">
                <FileText size={20} />
                <span>CV</span>
              </a>
              <a href="#reel" onClick={(e) => { handleReelClick(e); setMobileMenuOpen(false); }} className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors cursor-pointer">
                <Clapperboard size={20} />
                <span>Reel</span>
              </a>
              <a href="https://www.imdb.com/name/nm6137404/?ref_=fn_all_nme_1" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                <ExternalLink size={20} />
                <span>IMDB</span>
              </a>
              <div className="flex items-center space-x-4">
                <a href="mailto:hing@outlook.com" className="text-white/80 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  <Mail size={20} />
                </a>
                <span className="text-white/40">|</span>
                <a href="https://www.linkedin.com/in/kcheuk" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - 4 Image Horizontal Gallery */}
      <section className="pt-16">
        {/* Desktop Gallery */}
        <div className="hidden md:flex w-full h-[60vh] md:h-[70vh] lg:h-[80vh] thin-gallery-container overflow-hidden">
          {credits.map((credit, index) => (
            <div 
              key={`${credit.id}-${index}`}
              className="thin-gallery-item relative"
            >
              <img
                src={credit.imageUrl}
                alt={credit.title}
                className="w-full h-full object-cover"
              />
              <div className="thin-gallery-label absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300">
                <div className="text-center px-2">
                  <span className="text-white text-xs md:text-sm font-bold block mb-1 leading-tight">{credit.title}</span>
                  <p className="text-white/80 text-xs leading-tight">{credit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Infinite Scroll Gallery */}
        <div className="md:hidden w-full h-[70vh] relative">
          <div className="mobile-gallery-scroll flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {credits.map((credit, index) => (
              <div 
                key={`${credit.id}-${index}`}
                className="mobile-gallery-slide flex-shrink-0 w-full h-full snap-center relative"
              >
                <img
                  src={credit.imageUrl}
                  alt={credit.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6">
                  <div className="text-left w-full">
                    <span className="text-white text-xl font-bold block mb-2 leading-tight">{credit.title}</span>
                    <p className="text-white/90 text-sm leading-relaxed">{credit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll indicators - dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {credits.slice(0, 5).map((_, index) => (
              <div key={index} className="w-2 h-2 bg-white/40 rounded-full"></div>
            ))}
            {credits.length > 5 && (
              <div className="text-white/60 text-xs ml-2">+{credits.length - 5} more</div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Driving Visual Storytelling Through Technology
          </h2>
          <p className="text-xl text-white/70 leading-relaxed mb-8">
            I've spent half my life doodling pixels on a computer, ever since I got my hands on a copy of Photoshop in 2000, and how I rushed home to recreate the bullet-time effect from The Matrix after seeing it in the cinema. Visual storytelling has been my passion ever since. I'm honoured to have worked with hundreds of the most talented artists around the world to help bring some of the most iconic films of the past decade to life.
          </p>
          <div className="select-none flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-3 px-4 py-3 bg-white/10 rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-all duration-300">
              <SiKatana size={24} className="text-yellow-400 select-none pointer-events-none" />
              <span className="text-sm font-medium">Katana</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 bg-white/10 rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-all duration-300">
              <LuCone size={24} className="text-yellow-400 select-none pointer-events-none" />
              <span className="text-sm font-medium">Arnold</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 bg-white/10 rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-all duration-300">
              <SiHoudini size={24} className="text-red-400 select-none pointer-events-none" />
              <span className="text-sm font-medium">Houdini Solaris</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 bg-white/10 rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-all duration-300">
              <SiKatana size={24} className="text-yellow-400 select-none pointer-events-none" />
              <span className="text-sm font-medium">Renderman</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 bg-white/10 rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-all duration-300">
              <SiHoudini size={24} className="text-yellow-400 select-none pointer-events-none" />
              <span className="text-sm font-medium">Karma</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 bg-white/10 rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-all duration-300">
              <SiNuke size={24} className="text-yellow-400 select-none pointer-events-none" />
              <span className="text-sm font-medium">Nuke</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 bg-white/10 rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-all duration-300">
              <SiAutodeskmaya size={24} className="text-blue-400 select-none pointer-events-none" />
              <span className="text-sm font-medium">Maya</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 bg-white/10 rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-all duration-300">
              <SiCinema4D size={24} className="text-blue-400 select-none pointer-events-none" />
              <span className="text-sm font-medium">Cinema 4D</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 bg-white/10 rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-all duration-300">
              <SiBlender size={24} className="text-orange-500 select-none pointer-events-none" />
              <span className="text-sm font-medium">Blender</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 bg-white/10 rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-all duration-300">
              <SiUnrealengine size={24} className="text-cyan-400 select-none pointer-events-none" />
              <span className="text-sm font-medium">Unreal Engine</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Keith Cheuk. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Reel Modal */}
      {showReelModal && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={closeReelModal}
                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Demo Reel</h3>
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                  src="https://player.vimeo.com/video/329930902?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title="Keith Cheuk - VFX Reel 2022"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-white/60 text-sm text-center mt-4">
                If the video doesn't load, you can view it directly on{' '}
                <a 
                  href="https://vimeo.com/329930902" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Vimeo
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CV Modal */}
      {showCVModal && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={closeCVModal}
                className="bg-black/10 hover:bg-black/20 text-black p-2 rounded-full transition-colors backdrop-blur-sm"
              >
                <X size={24} />
              </button>
            </div>
            <div className="h-full flex flex-col">
              <div className="p-4 bg-gray-50 border-b">
                <h3 className="text-2xl font-bold text-gray-800 text-center">Keith Cheuk - Resume</h3>
                <div className="flex justify-center mt-2">
                  <a
                    href="/cv-keith-cheuk-2025.pdf"
                    download="/cv-keith-cheuk-2025.pdf"
                    className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 text-sm transition-colors"
                  >
                    <Download size={16} />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  src="/cv-keith-cheuk-2025.pdf"
                  className="w-full h-full border-0"
                  title="Keith Cheuk Resume"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Load Vimeo player script
if (typeof window !== 'undefined') {
  const script = document.createElement('script');
  script.src = 'https://player.vimeo.com/api/player.js';
  script.async = true;
  document.head.appendChild(script);
}

export default App;