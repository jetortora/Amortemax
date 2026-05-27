import { useState } from 'react'
import logo from './img/logo.png'
import amortecedor from './img/amortecedor.png'
import './App.css'

const WHATSAPP_CONTATO = '5514997183644'
const WHATSAPP_FORM = '5514981466763'

function IconWhatsApp() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="wa-icon"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function IconAmortecedorNovo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="servico-icone-svg" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="5.5"/>
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function IconRemanufaturado() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="servico-icone-svg" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  )
}

function IconSuspensao() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="servico-icone-svg" aria-hidden="true">
      <path d="M2 15l2.5-6h15l2.5 6v1H2v-1z"/>
      <circle cx="7" cy="18" r="2"/>
      <circle cx="17" cy="18" r="2"/>
    </svg>
  )
}

function IconFreios() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="servico-icone-svg" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="12" cy="5" r="1.2" fill="currentColor" stroke="none"/>
      <circle cx="17.4" cy="8.5" r="1.2" fill="currentColor" stroke="none"/>
      <circle cx="17.4" cy="15.5" r="1.2" fill="currentColor" stroke="none"/>
      <circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none"/>
      <circle cx="6.6" cy="15.5" r="1.2" fill="currentColor" stroke="none"/>
      <circle cx="6.6" cy="8.5" r="1.2" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function IconEscapamentos() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="servico-icone-svg" aria-hidden="true">
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2 2 0 1 1 19.73 12H22"/>
    </svg>
  )
}

function IconOleo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="servico-icone-svg" aria-hidden="true">
      <path d="M12 2C12 2 5 10 5 15a7 7 0 0 0 14 0C19 10 12 2 12 2z"/>
    </svg>
  )
}

const servicos = [
  {
    Icone: IconAmortecedorNovo,
    titulo: 'Amortecedores Novos',
    desc: 'As principais marcas do mercado para quem busca o desempenho original de fábrica.',
  },
  {
    Icone: IconRemanufaturado,
    titulo: 'Amortecedores Remanufaturados',
    desc: 'Referência em remanufatura na região. Máxima economia com total segurança e garantia.',
  },
  {
    Icone: IconSuspensao,
    titulo: 'Suspensão em Geral',
    desc: 'Diagnóstico completo, troca de buchas, pivôs, bandejas e braços oscilantes.',
  },
  {
    Icone: IconFreios,
    titulo: 'Freios',
    desc: 'Substituição preventiva de pastilhas, discos, tambores e fluido de freio.',
  },
  {
    Icone: IconEscapamentos,
    titulo: 'Escapamentos',
    desc: 'Manutenção e troca de abafadores e tubulações para o correto fluxo de gases.',
  },
  {
    Icone: IconOleo,
    titulo: 'Troca de Óleo',
    desc: 'Lubrificantes e filtros recomendados para manter a vida útil do motor em dia.',
  },
]

function App() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    marca: '',
    modelo: '',
    ano: '',
    descricao: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mensagem = [
      'Olá! Gostaria de uma cotação.',
      '',
      `Nome: ${form.nome}`,
      `Telefone: ${form.telefone}`,
      `Veículo: ${form.marca} ${form.modelo} ${form.ano}`,
      '',
      `Descrição: ${form.descricao}`,
    ].join('\n')
    window.open(
      `https://wa.me/${WHATSAPP_FORM}?text=${encodeURIComponent(mensagem)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <img src={logo} alt="Amortemax Amortecedores" className="header-logo" />
          <nav className="nav">
            <a href="#apresentacao">Apresentação</a>
            <a href="#servicos">Serviços</a>
            <a href="#endereco">Endereço</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      {/* Seção 1 — Apresentação */}
      <section id="apresentacao" className="hero">
        {/* Marca d'água: mix-blend-mode:multiply funde o fundo branco da foto com o amarelo da seção */}
        <img
          src={amortecedor}
          alt=""
          className="hero-watermark"
          aria-hidden="true"
        />

        <div className="container hero-inner">
          <div className="hero-text">
            <span className="hero-badge">Bauru — SP</span>
            <h1>Amortemax Amortecedores</h1>
            <p className="hero-sub">
              Referência em suspensão, freios e escapamentos em Bauru
            </p>
            <p className="hero-desc">
              Somos uma loja e oficina especializada com anos de experiência. Trabalhamos com
              amortecedores novos, seminovos e remanufaturados, além de peças para suspensão,
              freios e escapamentos. Entrega grátis em toda a região de Bauru.
            </p>
            <div className="hero-btns">
              <a href="#contato" className="btn btn-dark">
                Solicitar Cotação
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_CONTATO}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-icon"
              >
                <IconWhatsApp />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2 — Nossos Serviços */}
      <section id="servicos" className="section section-dark">
        <div className="container">
          <h2 className="section-titulo">Nossos Serviços Especializados</h2>
          <p className="section-sub">Mão de obra qualificada e componentes de primeira linha para o seu carro</p>
          <div className="servicos-grid">
            {servicos.map((s, i) => (
              <div key={i} className="servico-card">
                <div className="servico-icone">
                  <s.Icone/>
                </div>
                <div className="servico-info">
                  <h3>{s.titulo}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 3 — Nosso Endereço */}
      <section id="endereco" className="section section-yellow">
        <div className="container endereco-inner">
          <div className="endereco-info">
            <h2 className="section-titulo left">Nosso Endereço</h2>

            <div className="info-item">
              <span className="info-label">Endereço</span>
              <p>
                R. Cel. Antônio de Ávila Rebouças, 6-106<br />
                Jardim Florida, Bauru — SP
              </p>
            </div>

            <div className="info-item">
              <span className="info-label">Horários</span>
              <p>
                Segunda a Sexta: 08:00 às 18:00<br />
                Sábado: 08:00 às 13:00
              </p>
            </div>

            <div className="info-item">
              <span className="info-label">Contato</span>
              <p>(14) 99718-3644</p>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_CONTATO}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark btn-icon"
            >
              <IconWhatsApp />
              Falar pelo WhatsApp
            </a>
          </div>

          <div className="mapa-wrap">
            <iframe
              title="Localização Amortemax Amortecedores"
              src="https://maps.google.com/maps?q=Amortemax+Amortecedores+Bauru+SP&output=embed"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Seção 4 — Entre em Contato */}
      <section id="contato" className="section">
        <div className="container">
          <h2 className="section-titulo">Entre em Contato</h2>
          <p className="section-sub">
            Preencha o formulário e receba sua cotação diretamente pelo WhatsApp
          </p>

          <form className="formulario" onSubmit={handleSubmit}>
            <div className="form-linha">
              <div className="form-grupo">
                <label htmlFor="nome">Nome *</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Seu nome completo"
                  value={form.nome}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-grupo">
                <label htmlFor="telefone">Telefone *</label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="(14) 99999-9999"
                  value={form.telefone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-linha">
              <div className="form-grupo">
                <label htmlFor="marca">Marca do Carro *</label>
                <input
                  id="marca"
                  name="marca"
                  type="text"
                  placeholder="Ex: Chevrolet, Ford, Volkswagen..."
                  value={form.marca}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-grupo">
                <label htmlFor="modelo">Modelo *</label>
                <input
                  id="modelo"
                  name="modelo"
                  type="text"
                  placeholder="Ex: Onix, Gol, HB20..."
                  value={form.modelo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-grupo form-ano">
                <label htmlFor="ano">Ano *</label>
                <input
                  id="ano"
                  name="ano"
                  type="text"
                  placeholder="Ex: 2020"
                  value={form.ano}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-grupo">
              <label htmlFor="descricao">Descrição da Cotação *</label>
              <textarea
                id="descricao"
                name="descricao"
                rows={5}
                placeholder="Descreva o que você precisa: peças, serviços, problema que está enfrentando..."
                value={form.descricao}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-submit btn-icon">
              <IconWhatsApp />
              Enviar pelo WhatsApp
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <img src={logo} alt="Amortemax" className="footer-logo" />
          <div className="footer-text">
            <p className="footer-nome">Amortemax Amortecedores</p>
            <p>R. Cel. Antônio de Ávila Rebouças, 6-106 — Jardim Florida, Bauru - SP</p>
            <p>(14) 99718-3644</p>
          </div>
          <p className="footer-copy">&copy; 2025 Amortemax Amortecedores. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  )
}

export default App
