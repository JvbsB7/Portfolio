import { Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>© {currentYear} Portfólio. Feito com</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>e React + TypeScript</span>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 text-sm">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Voltar ao topo
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 pt-6 border-t border-slate-800">
          <p className="text-center text-slate-500 text-xs">
            Desenvolvido com as melhores práticas e tecnologias modernas
          </p>
        </div>
      </div>
    </footer>
  )
}