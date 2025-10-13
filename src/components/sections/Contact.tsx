import { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import type { ContactForm } from '../../types'

export function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

    // Se não houver endpoint configurado, mantém comportamento simulado
    if (!endpoint) {
      // Simula envio
      setTimeout(() => {
        setStatus('success')
        setIsSubmitting(false)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      }, 1500)
      return
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        console.error('Formspree error:', await res.text())
        setStatus('error')
      }
    } catch (err) {
      console.error('Network error:', err)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
      // Reset status após 5 segundos quando for success
      if (status === 'success') setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tem algum projeto em mente? Vamos conversar!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Vamos trabalhar juntos!
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Estou sempre aberto a discutir novos projetos, ideias criativas ou
                oportunidades de fazer parte da sua visão.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="mailto:jvbrito72@gmail.com"
                className="flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 group"
              >
                <div className="bg-blue-500/10 p-3 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <p className="text-white font-medium">jvbrito72@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Localização</p>
                  <p className="text-white font-medium">Marília, São Paulo, BR</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-slate-400 mb-4">Ou me encontre em:</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/JvbsB7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500 transition-all hover:scale-110"
                >
                  <span className="text-slate-300 hover:text-white">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/joão-vitor-417696261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500 transition-all hover:scale-110"
                >
                  <span className="text-slate-300 hover:text-white">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-400 bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                  <CheckCircle size={20} />
                  <span>Mensagem enviada com sucesso!</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                  <AlertCircle size={20} />
                  <span>Erro ao enviar mensagem. Tente novamente.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}