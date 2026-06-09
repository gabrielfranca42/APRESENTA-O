import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Smartphone, 
  Monitor, 
  ShieldCheck, 
  Upload, 
  CheckCircle, 
  Layers,
  LineChart,
  BarChart3,
  Fingerprint,
  FileCheck2,
  Clock,
  Award,
  Users
} from 'lucide-react';

const Github = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);
import './index.css';

const slides = [
  // SLIDE 1: CAPA
  {
    id: 1,
    type: 'hero',
    content: (
      <div className="slide-content" style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'transparent', border: 'none', boxShadow: 'none' }}>
        <div className="animate-item delay-1 hero-icon-container">
          <Award size={48} color="var(--primary-blue)" strokeWidth={2.5} />
        </div>
        <div className="animate-item delay-2 hero-subtitle-container">
          SENAC | SISTEMA DE GESTÃO ACADÊMICA
        </div>
        <h1 className="animate-item delay-3 hero-title">Valida<span>UP</span></h1>
        <p className="animate-item delay-4 slide-text" style={{ maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.25rem' }}>
          O ecossistema definitivo para cadastro, gestão e aprovação de certificados.
          Conectando alunos e coordenadores de forma inteligente.
        </p>
      </div>
    )
  },
  // SLIDE 2: O PROBLEMA
  {
    id: 2,
    type: 'split',
    content: (
      <div className="slide-content">
        <div className="animate-item delay-1">
          <h2 className="slide-title"><Clock size={32} /> O Desafio Atual</h2>
          <p className="slide-subtitle">Processos manuais geram gargalos</p>
        </div>
        
        <div className="split-layout">
          <div>
            <p className="slide-text animate-item delay-2" style={{ marginBottom: '2.5rem' }}>
              Atualmente, a validação de horas complementares envolve entrega de papéis, longas filas na coordenação e dificuldade no acompanhamento. Isso toma tempo de quem ensina e de quem aprende.
            </p>
            <div className="features-grid">
              <div className="feature-card animate-item delay-3">
                <h3><FileCheck2 size={20} color="var(--accent-orange)" /> Extravio de Documentos</h3>
                <p>Certificados físicos podem ser perdidos facilmente entre a secretaria e a coordenação.</p>
              </div>
              <div className="feature-card animate-item delay-4">
                <h3><Layers size={20} color="var(--accent-orange)" /> Acúmulo no Fim do Semestre</h3>
                <p>Grande volume de horas para validar simultaneamente sobrecarregando a equipe.</p>
              </div>
            </div>
          </div>
          <div className="slide-image-container animate-item delay-3" style={{ background: 'var(--primary-blue-light)', height: '100%', minHeight: '300px', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
             <Clock size={80} color="var(--primary-blue-dark)" opacity={0.2} />
             <h3 style={{ color: 'var(--primary-blue-dark)' }}>Processo Demorado</h3>
          </div>
        </div>
      </div>
    )
  },
  // SLIDE 3: A SOLUÇÃO VALIDAUP
  {
    id: 3,
    type: 'split',
    content: (
      <div className="slide-content">
        <div className="animate-item delay-1">
          <h2 className="slide-title"><ShieldCheck size={32} /> A Solução: ValidaUP</h2>
          <p className="slide-subtitle">Digital, Ágil e Transparente</p>
        </div>
        
        <div className="split-layout" style={{ gridTemplateColumns: '1fr' }}>
          <div>
            <p className="slide-text animate-item delay-2" style={{ marginBottom: '2.5rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
              Criamos um fluxo completamente digital. O aluno envia via Mobile e o coordenador analisa via Web Dashboard. Tudo conectado ao banco de dados do Senac.
            </p>
            <div className="features-grid">
              <div className="feature-card animate-item delay-3">
                <h3><Smartphone size={20} color="var(--primary-blue)" /> App do Aluno</h3>
                <p>Onde o aluno cadastra os certificados tirando foto ou anexando PDF na hora.</p>
              </div>
              <div className="feature-card animate-item delay-4">
                <h3><Monitor size={20} color="var(--primary-blue)" /> Painel do Coordenador</h3>
                <p>Interface web de gestão para visualizar os anexos, recusar ou aprovar as horas.</p>
              </div>
              <div className="feature-card animate-item delay-5">
                <h3><CheckCircle size={20} color="var(--primary-blue)" /> Feedback Imediato</h3>
                <p>Status atualizado em tempo real na tela do celular do aluno.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  // SLIDE 4: APP MOBILE ALUNO (Usando as imagens)
  {
    id: 4,
    type: 'split',
    content: (
      <div className="slide-content">
        <div className="animate-item delay-1">
          <h2 className="slide-title"><Smartphone size={32} /> Experiência do Aluno</h2>
          <p className="slide-subtitle">Aplicativo Mobile</p>
        </div>
        
        <div className="split-layout">
          <div>
            <p className="slide-text animate-item delay-2" style={{ marginBottom: '2.5rem' }}>
              O aluno acessa a plataforma usando a matrícula do Senac. Na tela inicial, ele vê o progresso total e tem a opção fácil de realizar novos uploads.
            </p>
            <div className="features-grid">
              <div className="feature-card animate-item delay-3">
                <h3><Upload size={20} color="var(--primary-blue)" /> Cadastro Rápido</h3>
                <p>Inserção de certificados direto do rolo da câmera com metadados de horas.</p>
              </div>
              <div className="feature-card animate-item delay-4">
                <h3><BarChart3 size={20} color="var(--primary-blue)" /> Progresso Visual</h3>
                <p>Acompanhamento de cada categoria de extensão, palestras e monitoria.</p>
              </div>
            </div>
          </div>
          <div className="image-grid animate-item delay-3">
             <div className="slide-image-container">
               <img src="./login.jpg" alt="Login do App" className="slide-image" onError={(e) => { e.target.src = 'https://via.placeholder.com/300x600/e0f2fe/005A9C?text=Login'; }} />
             </div>
             <div className="slide-image-container">
               <img src="./painel.jpg" alt="Painel do App" className="slide-image" onError={(e) => { e.target.src = 'https://via.placeholder.com/300x600/e0f2fe/005A9C?text=Painel'; }} />
             </div>
             <div className="slide-image-container">
               <img src="./subir.jpg" alt="Upload no App" className="slide-image" onError={(e) => { e.target.src = 'https://via.placeholder.com/300x600/e0f2fe/005A9C?text=Upload'; }} />
             </div>
             <div className="slide-image-container">
               <img src="./perfil.jpg" alt="Perfil do App" className="slide-image" onError={(e) => { e.target.src = 'https://via.placeholder.com/300x600/e0f2fe/005A9C?text=Perfil'; }} />
             </div>
          </div>
        </div>
      </div>
    )
  },
  // SLIDE 5: ADMIN WEB COORDENADOR
  {
    id: 5,
    type: 'split',
    content: (
      <div className="slide-content">
        <div className="animate-item delay-1">
          <h2 className="slide-title"><Monitor size={32} /> Visão do Coordenador</h2>
          <p className="slide-subtitle">Gestão e Aprovação (Admin Web)</p>
        </div>

        <div className="split-layout" style={{ gridTemplateColumns: '0.9fr 1.1fr' }}>
          <div className="slide-image-container animate-item delay-2" style={{ maxHeight: '100%', height: '400px', background: '#f8fafc', padding: '2rem' }}>
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', background: '#ffffff', borderRadius: '16px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-color)' }}>
               <Users size={64} color="var(--primary-blue)" strokeWidth={1.5} style={{ marginBottom: '1rem' }} />
               <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem' }}>Fila de Análise</h3>
               <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'center' }}>Auditoria de formulários submetidos</p>
            </div>
          </div>
          <div>
            <p className="slide-text animate-item delay-3" style={{ marginBottom: '2.5rem' }}>
              Na área logada da coordenação, cada certificado submetido pelos alunos aparece em uma fila de tarefas. O coordenador pode visualizar a imagem em tela cheia para confirmar a autenticidade.
            </p>
            <div className="features-grid">
              <div className="feature-card animate-item delay-4">
                <h3><Fingerprint size={20} color="var(--primary-blue)" /> Auditoria Documental</h3>
                <p>Verificação se o arquivo bate com a carga horária e categoria informadas.</p>
              </div>
              <div className="feature-card animate-item delay-5">
                <h3><CheckCircle size={20} color="var(--primary-blue)" /> Aprovação com Feedback</h3>
                <p>Aprovar ou recusar o certificado adicionando uma justificativa (ex: falta de assinatura).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  // SLIDE 6: CONCLUSÃO
  {
    id: 6,
    type: 'conclusion',
    content: (
      <div className="slide-content" style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <h2 className="slide-title animate-item delay-1" style={{ border: 'none', justifyContent: 'center', paddingBottom: 0 }}>Resultados Esperados</h2>
        <p className="slide-subtitle animate-item delay-2" style={{ marginBottom: '3rem' }}>O impacto do ValidaUP no Senac</p>
        
        <div className="features-grid" style={{ width: '100%', maxWidth: '1000px', gap: '2rem' }}>
          <div className="feature-card animate-item delay-3" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <div style={{ background: 'var(--primary-blue-light)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <Clock color="var(--primary-blue)" size={28} />
            </div>
            <h3 style={{ justifyContent: 'center' }}>Velocidade</h3>
            <p>Redução drástica no tempo de triagem e processamento de horas.</p>
          </div>
          
          <div className="feature-card animate-item delay-4" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <div style={{ background: 'var(--primary-blue-light)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <CheckCircle color="var(--primary-blue)" size={28} />
            </div>
            <h3 style={{ justifyContent: 'center' }}>Transparência</h3>
            <p>O aluno nunca fica no escuro, sabe exatamente o motivo de cada aprovação ou rejeição.</p>
          </div>
          
          <div className="feature-card animate-item delay-5" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <div style={{ background: 'var(--primary-blue-light)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <ShieldCheck color="var(--primary-blue)" size={28} />
            </div>
            <h3 style={{ justifyContent: 'center' }}>Sustentabilidade</h3>
            <p>Um processo de validação 100% digital, economizando papel e espaço físico de arquivo.</p>
          </div>
        </div>
        
        <div className="animate-item delay-6" style={{ marginTop: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-blue-dark)' }}>Obrigado!</h2>
            <p style={{ color: 'var(--text-secondary)' }}>ValidaUP - Senac 2026</p>
        </div>
      </div>
    )
  },
  // SLIDE 7: EQUIPE
  {
    id: 7,
    type: 'team',
    content: (
      <div className="slide-content" style={{ alignItems: 'center', justifyContent: 'flex-start', textAlign: 'center' }}>
        <h2 className="slide-title animate-item delay-1" style={{ border: 'none', justifyContent: 'center', paddingBottom: 0 }}>Nossa Equipe</h2>
        <p className="slide-subtitle animate-item delay-2" style={{ marginBottom: '2rem' }}>Os desenvolvedores por trás do ValidaUP</p>
        
        <div className="animate-item delay-3" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', width: '100%' }}>
          
          <div className="feature-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem', width: '200px' }}>
            <img src="./marcelo.jpg" alt="Marcelo" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: '3px solid var(--primary-blue)' }} onError={(e) => { e.target.src = 'https://via.placeholder.com/100/e0f2fe/005A9C?text=M'; }} />
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', textAlign: 'center', justifyContent: 'center' }}>Marcelo</h3>
            <a href="https://github.com/mbalbuquerque" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <Github size={16} /> @mbalbuquerque
            </a>
          </div>

          <div className="feature-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem', width: '200px' }}>
            <img src="./caio.jpg" alt="Caio" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: '3px solid var(--primary-blue)' }} onError={(e) => { e.target.src = 'https://via.placeholder.com/100/e0f2fe/005A9C?text=C'; }} />
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', textAlign: 'center', justifyContent: 'center' }}>Caio</h3>
            <a href="https://github.com/CaioAlvescvl" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <Github size={16} /> @CaioAlvescvl
            </a>
          </div>

          <div className="feature-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem', width: '200px' }}>
            <img src="./wendel.jpg" alt="Wendel" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: '3px solid var(--primary-blue)' }} onError={(e) => { e.target.src = 'https://via.placeholder.com/100/e0f2fe/005A9C?text=W'; }} />
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', textAlign: 'center', justifyContent: 'center' }}>Wendel</h3>
            <a href="https://github.com/Wendel-Brasiliano" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <Github size={16} /> @Wendel-Brasiliano
            </a>
          </div>

          <div className="feature-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem', width: '200px' }}>
            <img src="./morgana.jpg" alt="Morgana" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: '3px solid var(--primary-blue)' }} onError={(e) => { e.target.src = 'https://via.placeholder.com/100/e0f2fe/005A9C?text=Mo'; }} />
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', textAlign: 'center', justifyContent: 'center' }}>Morgana</h3>
            <a href="https://github.com/Morganabarbs" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <Github size={16} /> @Morganabarbs
            </a>
          </div>

          <div className="feature-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem', width: '200px' }}>
            <img src="./gabriel.png" alt="Gabriel" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: '3px solid var(--accent-orange)' }} onError={(e) => { e.target.src = 'https://via.placeholder.com/100/e0f2fe/F28C28?text=G'; }} />
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', textAlign: 'center', justifyContent: 'center' }}>Gabriel</h3>
            <a href="https://github.com/gabrielfranca42" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <Github size={16} /> @gabrielfranca42
            </a>
          </div>

        </div>
      </div>
    )
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <>
      {/* Background Animated Shapes */}
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="presentation-container">
        <div className="slides-wrapper">
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                transform: index < currentSlide ? 'translateY(-40px) scale(0.95)' : index > currentSlide ? 'translateY(40px) scale(0.95)' : 'translateY(0) scale(1)'
              }}
            >
              {slide.content}
            </div>
          ))}
        </div>

        <div className="controls">
          <button 
            className="control-btn" 
            onClick={prevSlide} 
            disabled={currentSlide === 0}
            aria-label="Slide anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="progress-dots">
            {slides.map((_, index) => (
              <div 
                key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          <button 
            className="control-btn" 
            onClick={nextSlide} 
            disabled={currentSlide === slides.length - 1}
            aria-label="Próximo slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
