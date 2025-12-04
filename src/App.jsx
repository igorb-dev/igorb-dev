import React, { useEffect, useState, useRef } from 'react'
import './App.css'
import logoIgorbdev from './assets/logoIgorbdev.svg'
import Typewriter from 'typewriter-effect';
import SvgGitHub from './assets/SVGS/SvgGitHub';
import SvgLinkedin from './assets/SVGS/SvgLinkedin';
import SvgWhatsApp from './assets/SVGS/SvgWhatsApp';
import SvgYouTube from './assets/SVGS/SvgYouTube';
import Avatar from './assets/Avatar-Maker.png'
import Modal from "react-modal";

import SvgLink from './assets/SVGS/SvgLink';

import SvgEmailProp from "./assets/SVGS/SvgEmailProp";
import SvgGithubProp from "./assets/SVGS/SvgGithubProp";
import SvgArrowTop from "./assets/SVGS/SvgArrowTop";

import {arrayCertificados, dataProjetos} from './App.data'

import { register } from 'swiper/element/bundle';
import SvgLinkedinLArge from './assets/SVGS/SvgLinkedinLarge';

const customStylesCertificado = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    width: "75%",
    height: "75%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
    borderRadius: "4px",
    outline: "none",
    marginTop: 48,
    position: "absolute",
  },
};

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 100,
  },
  content: {
    width: "75%",
    height: "75%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
    borderRadius: "4px",
    outline: "none",
    marginTop: 48,
    position: "absolute",
    zIndex: 100,
  },
};

register();

Modal.setAppElement("#root"); // Define o elemento raiz do seu aplicativo

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [imgSelect, setImgSelect] = useState("");

  const [openMenu, setOpenMenu] = useState(false)

  const inicioRef = useRef(null);
  const sobreRef = useRef(null);
  const certificadosRef = useRef(null);
  const projetosRef = useRef(null);
  const contatosRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  const openModal = (imagem) => {
    setImgSelect(imagem);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const swiperElRef = useRef(null);



  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  function navegar(item) {
    setOpenMenu(false)
    scrollToRef(item)
  }


  return (
    <div className='App'>

      <div className='Header' style={scrollPosition === 0 ? {display:'none'} : {display:'block'}}>
        <div className='container'>
          <div className='logo'>
            <img src={logoIgorbdev} alt="logo" />
          </div>
            <div className='menu'>
              <p onClick={() => scrollToRef(inicioRef)}>INÍCIO</p>
              <p onClick={() => scrollToRef(sobreRef)}>SOBRE</p>
              <p onClick={() => scrollToRef(certificadosRef)}>CERTIFICADOS</p>
              <p onClick={() => scrollToRef(projetosRef)}>PROJETOS</p>
              <p onClick={() => scrollToRef(contatosRef)}>CONTATO</p>
            </div>

            <div className='container-menu-sanduiche'>
              <div className='menu-sanduiche' onClick={() => setOpenMenu(!openMenu)} style={openMenu ? {borderColor: '#78f701'} : {}}>
                <div className='risco' style={openMenu ? {background: '#78f701', boxShadow: '0 -8px 0 rgba(120, 247, 1, 100), 0 8px 0 rgba(120, 247, 1, 100)'} : {}}/>
              </div>

              {openMenu && <div className='menu-suspenso'>
                <p onClick={() => navegar(inicioRef)}>INÍCIO</p>
                <p onClick={() => navegar(sobreRef)}>SOBRE</p>
                <p onClick={() => navegar(certificadosRef)}>CERTIFICADOS</p>
                <p onClick={() => navegar(projetosRef)}>PROJETOS</p>
                <p onClick={() => navegar(contatosRef)}>CONTATO</p>
              </div>}
            </div>
            
        </div>
      </div>


      <div className='Banner' ref={inicioRef}>
        <div className='banner-layer'>
            <div className='header'>
              <div className='container'>
                <div className='logo'><img src={logoIgorbdev} alt="logo" /></div>
                  <div className='menu'>
                </div>
              </div>
            </div>
            <div className='title'>
                <p className='title-name'>IGORBDEV</p>
                <p className='title-body fn_animated_text'>
                <Typewriter
                  options={{loop: true}}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Desenvolvedor Front-End")
                      .pauseFor(1000) // Pausa por 1 segundo após a primeira frase
                      .deleteAll() // Deleta a frase anterior
                      .typeString("Desenvolvedor Mobile") // Adiciona a segunda frase
                      .pauseFor(1000) // Pausa por 1 segundo após a segunda frase
                      .deleteAll() // Deleta a frase anterior novamente
                      .typeString("Desenvolvedor Web") // Adiciona a terceira frase
                      .pauseFor(1000) // Pausa por 1 segundo após a segunda frase
                      .deleteAll() // Deleta a frase anterior novamente
                      .start(); // Inicia o efeito de digitação
                  }}
                />
                </p>
                <div className='redes-buttons'>
                  <SvgGitHub/>
                  <SvgLinkedin />
                  <SvgWhatsApp />
                  <SvgYouTube />
                </div>
            </div>
        </div>
      </div>


      <div className='Sobre' ref={sobreRef}>
      <div className='Sobre-container'>

        <div className='Sobre-img-container'><img src={Avatar} alt="" /></div>

        <div className='Sobre-body-container'>
          <p className='Sobre-body-container-title'>Quem sou</p>
          <div className='Sobre-body-container-name-container'>
            <p className='Sobre-body-container-name'>Igor Bitencourt</p>
            <p className='title-body fn_animated_text Sobre-body-container-subname'>
                <Typewriter
                  options={{loop: true}}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Desenvolvedor Front-End")
                      .pauseFor(1000) // Pausa por 1 segundo após a primeira frase
                      .deleteAll() // Deleta a frase anterior
                      .typeString("Desenvolvedor Mobile") // Adiciona a segunda frase
                      .pauseFor(1000) // Pausa por 1 segundo após a segunda frase
                      .deleteAll() // Deleta a frase anterior novamente
                      .typeString("Desenvolvedor Web") // Adiciona a terceira frase
                      .pauseFor(1000) // Pausa por 1 segundo após a segunda frase
                      .deleteAll() // Deleta a frase anterior novamente
                      .start(); // Inicia o efeito de digitação
                  }}
                />
                </p>
            <div className='Sobre-line'/>
          </div>

          <div>
            <p className='Sobre-text'>Sou Desenvolvedor Full-Stack especializado no ecossistema JavaScript/TypeScript, atuando no desenvolvimento de aplicações Web, Mobile e PWAs. Tenho uma base sólida em Front-End, utilizando React e React Native para criar interfaces modernas, performáticas e centradas na experiência do usuário. Ao longo da minha trajetória, também evoluí significativamente no Back-End com Node.js, desenvolvendo APIs, integrações e regras de negócio.</p>
            <p className='Sobre-text'>Participei de projetos de grande porte nos segmentos de varejo, consórcios, investimentos e indústria automotiva, contribuindo tanto na implementação técnica quanto na definição de soluções. Em várias iniciativas atuei como líder de desenvolvimento, auxiliando na tomada de decisões, organização da equipe, revisão de código e comunicação direta com stakeholders. Meu foco sempre foi garantir entregas consistentes, bem estruturadas e alinhadas às necessidades do cliente.</p>
            <p className='Sobre-text'>Trabalho seguindo metodologias ágeis, especialmente SCRUM, utilizando Azure DevOps para organização, versionamento e acompanhamento das tasks. Busco constantemente evolução técnica e boas práticas, visando entregar soluções completas, escaláveis e de alto impacto, mantendo qualidade, clareza arquitetural e eficiência em todo o processo de desenvolvimento.</p>
          </div>         
        </div>

      </div>
      
    </div>

      <div className="Certificados" ref={certificadosRef}>
        <div className="center">
          <div className="container-title-sub">
            <div className="container-title">
              <p className="title">Certificados</p>
              <div className="line" />
            </div>
          </div>

          <div className="container-certificados">
            {arrayCertificados.map((item) => (
              <div className="imagens" onClick={() => openModal(item.imagem)}>
                <img src={item.imagem} alt={item.nome} />
                <p>{item.nome}</p>
              </div>
            ))}
          </div>

          <div className="container-certificados-small">
            {arrayCertificados.map((item) => (
              <div className="imagens" onClick={() => openModal(item.imagem)}>
                <p>{item.nome}</p>
              </div>
            ))}
          </div>
        </div>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStylesCertificado}
          contentLabel="Exemplo de Pop-up"
        >
          <img
            src={imgSelect}
            alt="Imagem"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
          <div
            onClick={closeModal}
            className="Certificado-fechar"
            style={{ position: "absolute", top: 30, right: 30, padding: 10 }}
          >
            <p
              style={{ color: "#ccc", fontFamily: "Heebo", fontSize: "1.125rem" }}
            >
              X
            </p>
          </div>
        </Modal>
      </div>


      <div className='Projetos' ref={projetosRef}>
        <div className="center">
            <div className="container-title-sub">
            <div className="container-title">
                <p className="title">Projetos</p>
                <div className="line" />
            </div>
            </div>

            <div className='container-swapper'>
            <swiper-container
            ref={swiperElRef}
            slides-per-view="1"
            navigation="true"
            pagination="true"
            className='container-swiper-container'
            > 
            {dataProjetos.map(item => (
                <swiper-slide>
                  <div className='swapper-slide'>
                    <div className='swapper-slide-p'>
                      <p className='swipper-slide-name'>{item.nomeProj}</p>
                    <div className="line2" />
                      <p className='swipper-slide-sub-name'>{item.descProj} {item.link != '' && <a className='button-link' href={item.link} target="_blank" rel="noopener noreferrer">- <SvgLink /></a>}</p>
                      <p className='swipper-slide-info'>{item.sobreProj}</p>
                    </div>
                    <div className='swapper-slide-img' onClick={() => openModal(item.imgProj)}><img src={item.imgProj} alt={item.nomeProj} /></div>
                  </div>
            </swiper-slide>
            ))}
            </swiper-container>
            </div>
        </div>
        <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Exemplo de Pop-up"
      >
        <img
          src={imgSelect}
          alt="Imagem"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
        <div
          onClick={closeModal}
          className="Certificado-fechar"
          style={{ position: "absolute", top: 30, right: 30, padding: 10 }}
        >
          <p
            style={{ color: "#ccc", fontFamily: "Heebo", fontSize: "1.125rem" }}
          >
            X
          </p>
        </div>
      </Modal>
    </div>
      
      <div className="Contatos" ref={contatosRef}>
        <div className="center">
          <div className="container-title-sub">
            <div className="container-title">
              <p className="title">Contatos</p>
              <div className="line" />
            </div>
          </div>
          <div className="container-contatos">
          
            <div className="container-icones">
              <div className="icone">
                <SvgEmailProp color="#ccc" />
             
              </div>
              <p className='contatos-title-icon'>E-mail</p>
              <a 
                className='contatos-title-link' 
                href="mailto:bitencourt.igor@hotmail.com"
              >
                dev.igorb
              </a>
            </div>
            
            <div className="container-icones">
              <div className="icone">
                <SvgGithubProp />
              </div>
              <p className='contatos-title-icon'>Github</p>
              <a className='contatos-title-link' target="_blank" href="https://github.com/igorb-dev">/igorb-dev</a>
            </div>

            <div className="container-icones">
              <div className="icone">
                <SvgLinkedinLArge />
              </div>
              <p className='contatos-title-icon'>Linkedin</p>
              <a className='contatos-title-link' target="_blank" href="https://www.linkedin.com/in/igorbdev/">/igorbdev</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
