import { GithubIcon, LinkedinIcon, Mail, ArrowDown } from 'lucide-react'
import profileImage from '../../assets/images/Jvbs_icon.jpg'

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Avatar/Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500" />
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
              <img
                src={profileImage}
                alt="João Vitor"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  if (target.parentElement) {
                    target.parentElement.innerHTML = '<span class="text-6xl">👨‍💻</span>'
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
          João Vitor de Brito Silva
        </h1>
        
        <p className="text-xl sm:text-2xl text-slate-300 mb-4 font-semibold">
          Desenvolvedor Front-End
        </p>
        
        <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Desenvolvedor Front-End em formação, cursando Ciências da Computação na UNIMAR.
          Experiência em <span className="text-blue-400 font-semibold">React</span>,{' '}
          <span className="text-blue-400 font-semibold">React Native</span>,{' '}
          <span className="text-blue-400 font-semibold">TypeScript</span> e{' '}
          <span className="text-blue-400 font-semibold">JavaScript</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            Entre em Contato
          </button>
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 border-2 border-slate-700 text-slate-300 rounded-full font-semibold hover:border-blue-500 hover:text-white transition-all duration-300 hover:scale-105"
          >
            Saiba Mais
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-16">
          <a
            href="https://github.com/JvbsB7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
            aria-label="GitHub"
          >
            <GithubIcon size={28} />
          </a>
          <a
            href="https://linkedin.com/in/joão-vitor-417696261"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={28} />
          </a>
          <a
            href="mailto:jvbrito72@gmail.com"
            className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
            aria-label="Email"
          >
            <Mail size={28} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-slate-400 hover:text-white transition-colors"
          aria-label="Rolar para baixo"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  )
}