import { Code2, Smartphone, Palette, Database, Wrench, Brain } from 'lucide-react'
import { TechIcon } from '../common/TechIcon'
import { skills } from '../../utils/data'

export function Skills() {
  const categoryConfig = {
    frontend: { 
      title: 'Frontend', 
      color: 'from-blue-500 to-cyan-500',
      icon: <Code2 className="w-5 h-5" />
    },
    mobile: { 
      title: 'Mobile', 
      color: 'from-green-500 to-emerald-500',
      icon: <Smartphone className="w-5 h-5" />
    },
    design: { 
      title: 'Design & UI/UX', 
      color: 'from-purple-500 to-pink-500',
      icon: <Palette className="w-5 h-5" />
    },
    backend: { 
      title: 'Backend & Database', 
      color: 'from-orange-500 to-red-500',
      icon: <Database className="w-5 h-5" />
    },
    tools: { 
      title: 'Ferramentas', 
      color: 'from-indigo-500 to-violet-500',
      icon: <Wrench className="w-5 h-5" />
    },
    soft: { 
      title: 'Soft Skills', 
      color: 'from-pink-500 to-rose-500',
      icon: <Brain className="w-5 h-5" />
    },
  }

  type CategoryKey = keyof typeof categoryConfig

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Habilidades
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo no desenvolvimento
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => {
            const categoryInfo = categoryConfig[category as CategoryKey]
            
            return (
              <div
                key={category}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 bg-gradient-to-br ${categoryInfo.color} rounded-lg`}>
                    {categoryInfo.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {categoryInfo.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {categorySkills.map((skill, index) => (
                    <div
                      key={index}
                      className="group relative bg-slate-900/50 rounded-lg p-3 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`text-white group-hover:scale-110 transition-transform`}>
                          <TechIcon name={skill.name} size={24} />
                        </div>
                        <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      
                      {skill.level && (
                        <div className="mt-2">
                          <div className="w-full bg-slate-700 rounded-full h-1.5 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${categoryInfo.color} transition-all duration-1000 ease-out`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Tech Stack Summary */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Stack Principal
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'React Native', 'JavaScript', 'TypeScript', 'Figma'].map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-3 bg-slate-800/50 px-5 py-3 rounded-full border border-slate-700 hover:border-blue-500 transition-all hover:scale-110"
              >
                <div className="text-white">
                  <TechIcon name={tech} size={20} />
                </div>
                <span className="text-slate-300 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Section */}
        <div className="mt-8 text-center bg-slate-800/30 rounded-xl p-6 border border-slate-700">
          <p className="text-slate-400">
            💡 <span className="text-white font-semibold">Aprendizado Contínuo:</span> Sempre 
            explorando novas tecnologias e aprimorando minhas habilidades através da Rocketseat 
            e projetos práticos.
          </p>
        </div>
      </div>
    </section>
  )
}