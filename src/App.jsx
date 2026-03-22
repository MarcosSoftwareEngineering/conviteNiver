import { useState, useEffect } from 'react';
import './App.css';
import conviteBg from './assets/convite.jpg';

// Imports das imagens corrigidos
import liquidificadorImg from './assets/liqdificador.jpeg'; 
import ventiladorImg from './assets/ventilador.jpeg';
import ferroDePassarImg from './assets/ferrodepassar.jpeg';
import sanduicheiraImg from './assets/sanduicheira.jpeg'; 
import maquinaCabeloImg from './assets/maquinacabelo.jpeg';

const prizes = [
  { id: 1, title: 'Liquidificador Retro', description: 'O suco perfeito para o dia de sol!', imgSrc: liquidificadorImg },
  { id: 2, title: 'Ventilador Vintage', description: 'Para refrescar a brisa do barco.', imgSrc: ventiladorImg },
  { id: 3, title: 'Ferro de Passar a Vapor', description: 'Para estar elegante na praia.', imgSrc: ferroDePassarImg },
  { id: 4, title: 'Sanduicheira Inox', description: 'Para um lanche rápido.', imgSrc: sanduicheiraImg },
  { id: 5, title: 'Máquina de Cortar Cabelo Profissional', description: 'Para ficar na régua para a festa.', imgSrc: maquinaCabeloImg },
];

function App() {
  const [name, setName] = useState('');
  const [inviteGenerated, setInviteGenerated] = useState(false);
  const [currentPrizeIndex, setCurrentPrizeIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleGenerateInvite = () => {
    if (!name.trim()) {
      alert('Por favor, digite seu nome primeiro!');
      return;
    }
    setInviteGenerated(true);
  };

  useEffect(() => {
    if (inviteGenerated) {
      const timer = setTimeout(() => {
        setCurrentPrizeIndex(0);
        setShowModal(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [inviteGenerated]);

  const handleNextPrize = () => {
    if (currentPrizeIndex < prizes.length - 1) {
      setCurrentPrizeIndex(currentPrizeIndex + 1);
    }
  };

  const handleCloseModal = () => setShowModal(false);
  const handleStartRaffle = () => { setCurrentPrizeIndex(0); setShowModal(true); };

  const waNumber = '5512997184400'; 
  const waLink = `https://wa.me/${waNumber}?text=Oi%20Adailton!%20Aqui%20é%20o(a)%20${name},%20confirmo%20presença%20no%20seu%20Bora%20Bora!`;

  return (
    <>
      <style>{`
        /* ANIMAÇÕES GERAIS */
        @keyframes fadeInSlide { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }
        @keyframes pulse { 0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 107, 0, 0.7); } 70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(255, 107, 0, 0); } 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 107, 0, 0); } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
        @keyframes marquee-ltr { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
        
        .fadeInSlide { animation: fadeInSlide 1s ease-out forwards; }
        .float { animation: float 6s ease-in-out infinite; }
        .pulse { animation: pulse 2s infinite; }
        .zoomIn { animation: zoomIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .marquee { display: inline-block; white-space: nowrap; animation: marquee-ltr 15s linear infinite; }

        /* =========================================
           REGRAS DE RESPONSIVIDADE (MEDIA QUERIES)
           ========================================= */
        
        /* TABLETS E TELAS MÉDIAS */
        @media (max-width: 1024px) {
          .glass-card { width: 85% !important; padding: 30px !important; }
          .glass-container { width: 90% !important; padding: 30px !important; }
          .invite-wrapper { width: 85% !important; margin-top: 30px !important; }
        }

        /* CELULARES E TELAS PEQUENAS */
        @media (max-width: 768px) {
          .app-container { padding: 70px 15px 20px !important; } /* Ajuste de tela para o mobile */
          
          /* Banner no Mobile */
          .top-banner { height: 50px !important; }
          .banner-text { font-size: 14px !important; padding: 0 10px !important; }
          .banner-icon { font-size: 18px !important; padding: 0 10px !important; }
          
          /* Cartões com fundo de vidro */
          .glass-card { width: 95% !important; padding: 25px 15px !important; margin-top: 20px !important; }
          .glass-container { width: 95% !important; padding: 20px 10px !important; gap: 20px !important; }
          .inner-card { padding: 20px 15px !important; }
          .invite-wrapper { width: 95% !important; margin-top: 20px !important; }
          
          /* Tipografia (Fontes menores no celular) */
          .title-main { font-size: 26px !important; }
          .subtitle-main { font-size: 16px !important; }
          .card-title { font-size: 22px !important; }
          .text-content, .detail-list li, .card-text { font-size: 16px !important; line-height: 1.5 !important; }
          
          /* Inputs e Botões */
          .input-field { width: 100% !important; font-size: 16px !important; padding: 12px !important; box-sizing: border-box; }
          .btn-primary, .btn-action { width: 100% !important; font-size: 16px !important; padding: 15px 20px !important; }
          
          /* Resumo do Bingo */
          .prize-item { flex-direction: column !important; text-align: center !important; gap: 8px !important; padding: 15px !important; }
          
          /* Modal (Sorteio) */
          .modal-card { width: 90% !important; padding: 25px 15px !important; }
          .prize-image { height: 120px !important; }
          .modal-title { font-size: 22px !important; }
          .prize-title { font-size: 20px !important; }
          .prize-desc { font-size: 16px !important; }
        }
      `}</style>

      <div className="app-container" style={{
        backgroundImage: `url(${conviteBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'scroll',
        padding: '80px 20px 20px' 
      }}>
        
        {/* BANNER SUPERIOR (Navegação dinâmica e amarela) */}
        <div className="top-banner" style={styles.topBanner}>
          <div className="marquee">
            <span className="banner-text" style={styles.bannerText}>Bora Bora - Aniversário Adailton 2026</span>
            <span className="banner-icon" style={styles.bannerIcon}>🏝️</span>
            <span className="banner-text" style={styles.bannerText}>Bora Bora - Aniversário Adailton 2026</span>
            <span className="banner-icon" style={styles.bannerIcon}>🏝️</span>
          </div>
        </div>

        {!inviteGenerated ? (
          // TELA 1: LOGIN 
          <div className="fadeInSlide float glass-card" style={styles.glassCard}>
            <h1 className="title-main" style={styles.title}>Bora Bora com as Pretas</h1>
            <h2 className="subtitle-main" style={styles.subtitle}>Aniversário do Adailton - 13/09/2026</h2>
            <input 
              className="input-field"
              type="text" 
              placeholder="Digite seu nome para acessar" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />
            <button translate="no" className="notranslate btn-primary" onClick={handleGenerateInvite} style={styles.button}>
              Ver Meu Convite Especial
            </button>
          </div>
        ) : (
          // TELA 2: CONVITE E CARTÕES
          <>
            {/* PLAYER DE MÚSICA ESCONDIDO (Hungria - Amor e Fé) */}
            <div style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: 0 }}>
              <iframe
                width="1"
                height="1"
                src="https://www.youtube.com/embed/iZq0u3quAqo?autoplay=1&loop=1&playlist=iZq0u3quAqo"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>

            {/* CARTÃO 1: INICIA EM CIMA (O CONVITE PRINCIPAL) */}
            <div className="fadeInSlide float glass-card invite-wrapper" style={{ ...styles.glassCard, maxWidth: '90%', width: '700px', marginBottom: '60px', marginTop: '40px' }}>
              
              <h1 className="title-main" style={{ color: '#0a5c2d', textAlign: 'center', marginBottom: '20px', textShadow: '0px 1px 2px rgba(255,255,255,0.8)' }}>
                Para: {name}
              </h1>
              
              <section className="text-content" style={{ padding: '20px', fontSize: '18px', lineHeight: '1.6', color: '#1a401c', textAlign: 'left', marginBottom: '30px', textShadow: '0px 1px 1px rgba(255,255,255,0.5)' }}>
                <p className="title-main" style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>Convite – Aniversário do Adailton</p>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>📅 Data: 13/09/2026</p>
                <br />
                <p><strong>{name}, meu amigo(a),</strong></p>
                <p>Este convite é feito com carinho especialmente para você. No dia 13 de setembro quero celebrar não apenas mais um ano de vida, mas também a alegria de ter pessoas tão importantes como você ao meu lado.</p>
                <p>Sua presença é essencial para tornar esse momento inesquecível. Você não é apenas convidado, é parte fundamental da minha história e da minha felicidade. Ter você comigo nessa comemoração será um presente que não tem preço.</p>
                <p>Espero que venha compartilhar risadas, boas lembranças e novas histórias. Afinal, aniversários são mais especiais quando temos amigos únicos como você para celebrar junto.</p>
                <br />
                <p style={{ textAlign: 'right' }}>Com gratidão e amizade,</p>
                <p style={{ fontSize: '28px', textAlign: 'right', fontWeight: 'bold', fontFamily: '"Great Vibes", cursive, sans-serif' }}>Adailton</p>
              </section>

              <div style={{ textAlign: 'center' }}>
                <h3 className="text-content" style={{ color: '#1a401c', marginBottom: '15px', textShadow: '0px 1px 1px rgba(255,255,255,0.5)' }}>
                  O Bingo começará automaticamente em 5 segundos...
                </h3>
                <button className="pulse btn-action" onClick={handleStartRaffle} style={styles.raffleButton}>
                  Ver Prêmios do Sorteio Manualmente
                </button>
              </div>
            </div>

            {/* SEÇÃO INFERIOR: CARTÕES QUANDO ROLA PARA BAIXO */}
            <div className="fadeInSlide glass-container" style={{ ...styles.glassContainer, marginBottom: '60px' }}>
              
              {/* CARTÃO 2: O CARTÃO DE VALORES */}
              <div className="inner-card" style={styles.innerCard}>
                <h2 className="card-title" style={styles.cardTitle}>Pacote All Inclusive 🌴</h2>
                
                <div style={{ backgroundColor: 'rgba(10, 92, 45, 0.1)', padding: '20px', borderRadius: '10px', marginBottom: '20px', textAlign: 'center' }}>
                  <p className="card-title" style={{ fontSize: '22px', margin: 0, color: '#0a5c2d', fontWeight: 'bold' }}>
                    Valor: 100 Reais <span style={{ color: '#666', fontSize: '18px' }}>ou</span> 1 Caixa de Cerveja
                  </p>
                </div>

                <p className="text-content" style={{ fontSize: '20px', color: '#1a401c', fontWeight: 'bold', marginBottom: '15px' }}>
                  Você terá direito a:
                </p>

                <ul className="detail-list" style={styles.detailList}>
                  <li>🍻 <strong>Bebidas:</strong> Água, cerveja, refrigerante, energéticos, whisky e caipirinha.</li>
                  <li>🍖 <strong>Comida:</strong> Feijoada, bolo, salgados e churrasco na praia.</li>
                  <li>🎁 <strong>Diversão:</strong> Direito a participar do Bingo com prêmios!</li>
                </ul>
              </div>

              {/* CARTÃO 3: RSVP / CONFIRMAÇÃO */}
              <div className="inner-card" style={styles.innerCard}>
                <h2 className="card-title" style={styles.cardTitle}>Confirmar Presença (RSVP)</h2>
                <p className="card-text" style={styles.cardText}>Para garantir que tudo corra bem no nosso Bora Bora, por favor confirme sua presença.</p>
                
                <a href={waLink} target="_blank" rel="noopener noreferrer" style={styles.waLink}>
                  <button className="btn-primary" style={styles.rsvpButtonWA}>
                    Confirmar via WhatsApp ➔
                  </button>
                </a>
              </div>

              {/* CARTÃO 4: RESUMO DOS PRÊMIOS DO BINGO */}
              <div className="inner-card" style={styles.innerCard}>
                <h2 className="card-title" style={styles.cardTitle}>Resumo dos Prêmios do Bingo</h2>
                <div style={styles.prizeSummaryList}>
                  {prizes.map((prize, index) => (
                    <div key={prize.id} className="prize-item" style={styles.prizeSummaryItem}>
                      <span style={styles.prizeId}>PRÊMIO {prize.id}:</span>
                      <span style={styles.prizeName}>{prize.title}</span>
                      {index === 0 && '🍹'} {index === 1 && '💨'} {index === 2 && '👔'} {index === 3 && '🥪'} {index === 4 && '💈'}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a401c', fontFamily: '"Great Vibes", cursive, sans-serif' }}>Até lá!</p>
                <span style={{ fontSize: '30px' }}>🏝️⛵</span>
              </div>
            </div>
          </>
        )}

        {/* MODAL DO SORTEIO */}
        {showModal && (
          <div style={styles.modalOverlay}>
            <div className="zoomIn modal-card" style={{ ...styles.glassCard, maxWidth: '400px', width: '90%', position: 'relative' }}>
              <button onClick={handleCloseModal} style={styles.closeX}>✖</button>
              <h2 className="modal-title" style={styles.modalTitle}>PRÊMIO {prizes[currentPrizeIndex].id}</h2>
              <div style={{ margin: '20px 0', display: 'flex', justifyContent: 'center' }}>
                <img className="prize-image" src={prizes[currentPrizeIndex].imgSrc} alt={prizes[currentPrizeIndex].title} style={styles.prizeImage} />
              </div>
              <h3 className="prize-title" style={styles.prizeTitle}>{prizes[currentPrizeIndex].title}</h3>
              <p className="prize-desc" style={styles.prizeDescription}>{prizes[currentPrizeIndex].description}</p>
              
              {currentPrizeIndex < prizes.length - 1 ? (
                <button className="btn-primary" onClick={handleNextPrize} style={styles.nextButton}>Próximo Prêmio ➔</button>
              ) : (
                <button className="btn-primary" onClick={handleCloseModal} style={styles.closeButton}>Finalizar Sorteio</button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// Estilos Base (que são sobrescritos pelas Media Queries acima quando necessário)
const styles = {
  glassCard: { backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.6)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)', padding: '40px', borderRadius: '20px', width: '100%', maxWidth: '500px', textAlign: 'center' },
  glassContainer: { backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)', border: '1px solid rgba(255, 255, 255, 0.5)', boxShadow: '0 10px 40px rgba(0,0,0,0.5)', padding: '50px', borderRadius: '25px', width: '100%', maxWidth: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' },
  
  innerCard: { backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', width: '100%', maxWidth: '600px', textAlign: 'left' },
  
  cardTitle: { color: '#0a5c2d', fontSize: '28px', marginBottom: '20px', fontWeight: 'bold', textAlign: 'center' },
  cardText: { color: '#666', fontSize: '18px', marginBottom: '25px', lineHeight: '1.4', textAlign: 'center' },
  detailList: { fontSize: '18px', color: '#1a401c', marginTop: '10px', lineHeight: '1.8', listStyleType: 'none', paddingLeft: '0' },
  waLink: { textDecoration: 'none' },
  rsvpButtonWA: { padding: '15px 30px', fontSize: '18px', backgroundColor: '#00cc66', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', transition: 'all 0.3s ease', display: 'block', width: '100%' },
  prizeSummaryList: { display: 'flex', flexDirection: 'column', gap: '15px' },
  prizeSummaryItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px', backgroundColor: 'rgba(10, 92, 45, 0.1)', borderRadius: '10px', fontSize: '18px', color: '#1a401c' },
  prizeId: { fontWeight: 'bold', color: '#0a5c2d' },
  prizeName: { flexGrow: 1, textAlign: 'center', fontWeight: 'bold' },
  title: { color: '#0a5c2d', fontSize: '32px', marginBottom: '10px', textShadow: '0px 1px 2px rgba(255,255,255,0.8)' },
  subtitle: { color: '#1a401c', fontSize: '18px', marginBottom: '30px', fontWeight: 'bold' },
  input: { padding: '15px', fontSize: '18px', borderRadius: '10px', border: '2px solid #0a5c2d', width: '90%', marginBottom: '20px', backgroundColor: 'rgba(255,255,255,0.8)' },
  button: { padding: '15px 30px', fontSize: '18px', backgroundColor: '#0a5c2d', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', width: '100%' },
  raffleButton: { padding: '15px 30px', fontSize: '18px', backgroundColor: '#ff6b00', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' },
  
  modalOverlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
  
  closeX: { position: 'absolute', top: '15px', right: '20px', background: 'transparent', border: 'none', fontSize: '24px', color: '#333', cursor: 'pointer', fontWeight: 'bold' },
  prizeImage: { maxWidth: '100%', height: '150px', objectFit: 'contain', borderRadius: '10px' },
  modalTitle: { color: '#ff6b00', fontSize: '28px', margin: 0, textShadow: '0px 1px 1px rgba(255,255,255,0.8)' },
  prizeTitle: { color: '#1a401c', fontSize: '28px', margin: '10px 0', textShadow: '0px 1px 1px rgba(255,255,255,0.8)' },
  prizeDescription: { color: '#1a401c', fontSize: '18px', marginBottom: '30px', fontWeight: 'bold' },
  nextButton: { padding: '15px 30px', fontSize: '18px', backgroundColor: '#0a5c2d', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', width: '100%' },
  closeButton: { padding: '15px 30px', fontSize: '18px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', width: '100%' },
  
  topBanner: { position: 'fixed', top: 0, left: 0, width: '100%', height: '60px', backgroundColor: 'yellow', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', zIndex: 900, boxShadow: '0 2px 10px rgba(0,0,0,0.1)', overflow: 'hidden' }, 
  bannerText: { color: '#0a5c2d', fontSize: '18px', fontWeight: 'bold', textShadow: '0px 1px 1px rgba(255,255,255,0.8)', padding: '0 20px' }, 
  bannerIcon: { fontSize: '22px', padding: '0 20px' },
};

export default App;