import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Smartphone, 
  Monitor, 
  ShieldCheck, 
  Upload, 
  CheckCircle, 
  XCircle,
  Cpu,
  Layers
} from 'lucide-react';
import './index.css';

const slides = [
  {
    id: 1,
    type: 'hero',
    content: (
      <div className="slide-content" style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <Cpu size={64} color="var(--neon-cyan)" style={{ marginBottom: '1rem', filter: 'drop-shadow(0 0 10px var(--neon-cyan))' }} />
        <h1 className="hero-title glitch-effect" data-text="ValidaUP">ValidaUP</h1>
        <p className="slide-subtitle" style={{ fontSize: '2rem' }}>A Revolução na Validação de Certificados</p>
        <p className="slide-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Plataforma integrada Mobile & Web para alunos e coordenadores do Senac.
          Simplifique o envio, acompanhamento e aprovação de horas complementares.
        </p>
      </div>
    )
  },
  {
    id: 2,
    type: 'split',
    content: (
      <div className="slide-content">
        <h2 className="slide-title"><Smartphone size={40} /> Visão do Aluno (Mobile)</h2>
        <div className="split-layout">
          <div>
            <p className="slide-text" style={{ marginBottom: '2rem' }}>
              O aplicativo mobile proporciona autonomia e agilidade para o estudante gerenciar suas horas complementares diretamente pelo celular.
            </p>
            <div className="features-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="feature-card">
                <h3><CheckCircle size={20} /> Acompanhamento de Progresso</h3>
                <p>Visualize as horas concluídas e pendentes por categoria (Extensão, Palestras, Estágio).</p>
              </div>
              <div className="feature-card">
                <h3><Upload size={20} /> Upload Simplificado</h3>
                <p>Anexe e envie certificados em PDF ou imagem diretamente da galeria do aparelho.</p>
              </div>
              <div className="feature-card">
                <h3><Layers size={20} /> Histórico de Envios</h3>
                <p>Acompanhe o status (Aprovado, Pendente, Rejeitado) de cada documento submetido.</p>
              </div>
            </div>
          </div>
          <div className="image-grid">
             <div className="slide-image-container">
               <img src="./login.jpg" alt="Tela de Login" className="slide-image" onError={(e) => { e.target.src = 'https://via.placeholder.com/300x600/000000/00FFFF?text=Login'; }} />
             </div>
             <div className="slide-image-container">
               <img src="./painel.jpg" alt="Painel do Aluno" className="slide-image" onError={(e) => { e.target.src = 'https://via.placeholder.com/300x600/000000/00FFFF?text=Painel'; }} />
             </div>
             <div className="slide-image-container">
               <img src="./subir.jpg" alt="Upload de Material" className="slide-image" onError={(e) => { e.target.src = 'https://via.placeholder.com/300x600/000000/00FFFF?text=Upload'; }} />
             </div>
             <div className="slide-image-container">
               <img src="./perfil.jpg" alt="Perfil do Aluno" className="slide-image" onError={(e) => { e.target.src = 'https://via.placeholder.com/300x600/000000/00FFFF?text=Perfil'; }} />
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    type: 'split',
    content: (
      <div className="slide-content">
        <h2 className="slide-title"><Monitor size={40} /> Visão do Coordenador (Web)</h2>
        <div className="split-layout">
          <div className="slide-image-container" style={{ maxHeight: '100%' }}>
            <div style={{ width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', background: 'rgba(0,0,0,0.6)', border: '1px solid var(--neon-purple)', borderRadius: '8px' }}>
               <Monitor size={64} color="var(--neon-purple)" style={{ marginBottom: '1rem' }} />
               <h3 style={{ color: 'var(--neon-purple)' }}>Dashboard Administrativo</h3>
               <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Interface Web de Validação</p>
            </div>
          </div>
          <div>
            <p className="slide-text" style={{ marginBottom: '2rem' }}>
              Uma plataforma web robusta desenvolvida para que a coordenação avalie os formulários e certificados enviados de forma eficiente.
            </p>
            <div className="features-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="feature-card">
                <h3><ShieldCheck size={20} /> Validação de Documentos</h3>
                <p>Visualize os certificados anexados pelos alunos em tela cheia e analise a autenticidade.</p>
              </div>
              <div className="feature-card">
                <h3><CheckCircle size={20} /> Aprovação e Feedback</h3>
                <p>Aprove horas com um clique ou negue solicitações fornecendo uma justificativa clara para o aluno.</p>
              </div>
              <div className="feature-card">
                <h3><Cpu size={20} /> Gestão Centralizada</h3>
                <p>Painel de controle com métricas, alunos com pendências e controle total sobre o fluxo de validação.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    type: 'conclusion',
    content: (
      <div className="slide-content" style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <h2 className="slide-title" style={{ border: 'none', justifyContent: 'center' }}>Por que escolher o ValidaUP?</h2>
        <div className="features-grid" style={{ marginTop: '3rem', width: '100%' }}>
          <div className="feature-card" style={{ textAlign: 'center' }}>
            <h3 style={{ justifyContent: 'center', color: 'var(--neon-pink)' }}>Eficiência</h3>
            <p>Reduz o tempo de processamento de horas complementares em até 70%.</p>
          </div>
          <div className="feature-card" style={{ textAlign: 'center' }}>
            <h3 style={{ justifyContent: 'center', color: 'var(--neon-cyan)' }}>Transparência</h3>
            <p>O aluno sempre sabe o status dos seus certificados em tempo real.</p>
          </div>
          <div className="feature-card" style={{ textAlign: 'center' }}>
            <h3 style={{ justifyContent: 'center', color: 'var(--neon-purple)' }}>Tecnologia</h3>
            <p>Arquitetura moderna e segura, com uma interface Cyber Premium.</p>
          </div>
        </div>
        <p className="slide-text" style={{ marginTop: '3rem', fontSize: '1.5rem', color: '#fff' }}>
          Obrigado!
        </p>
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
    <div className="presentation-container">
      <div className="slides-wrapper">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              transform: index < currentSlide ? 'scale(0.8) translateX(-100%)' : index > currentSlide ? 'scale(0.8) translateX(100%)' : 'scale(1) translateX(0)'
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
  );
}

export default App;
