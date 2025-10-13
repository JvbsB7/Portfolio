import { Code2, Rocket, Lightbulb, Users } from 'lucide-react'

export function About() {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'Código limpo, organizado e fácil de manter',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Performance',
      description: 'Foco em aplicações rápidas e otimizadas',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Inovação',
      description: 'Sempre buscando as melhores tecnologias',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Colaboração',
      description: 'Trabalho em equipe e comunicação efetiva',
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              Sou um desenvolvedor apaixonado por tecnologia e inovação. Tenho experiência
              em criar aplicações web modernas utilizando as tecnologias mais atuais do mercado.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Meu foco é desenvolver soluções que não apenas funcionem bem, mas que também
              proporcionem uma excelente experiência ao usuário. Acredito que código de
              qualidade faz toda a diferença.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Atualmente, estou expandindo meu portfólio com projetos que demonstram
              minhas habilidades em <span className="text-blue-400 font-semibold">React</span>,{' '}
              <span className="text-blue-400 font-semibold">TypeScript</span> e outras
              tecnologias modernas.
            </p>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20" />
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-slate-300">Disponível para projetos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-slate-300">Foco em desenvolvimento web</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                  <span className="text-slate-300">Aprendizado constante</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold mb-2 text-lg">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}