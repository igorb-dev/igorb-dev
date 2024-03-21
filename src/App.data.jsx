import CSSAvancado from "./assets/CSSAvancado.png";
import HTMLCss from "./assets/HTMLCss.png";
import Javascript from "./assets/Javascript.png";
import CReact from "./assets/CReact.png";
import Redux from "./assets/Redux.png";
import UIDesign from "./assets/UIDesign.png";
import WebDesign from "./assets/WebDesign.png";

import imgMiniApp from './assets/imgProjects/MiniApp.png'
import imgAppVendas from './assets/imgProjects/AppVendas.png'
import imgEnablers from './assets/imgProjects/Enablers.png'
import imgEmpirica from './assets/imgProjects/Empirica.png'
import imgDogs from './assets/imgProjects/Dogs.png'
import imgMiniDogs from './assets/imgProjects/MiniDogs.png'
import imgAnimaisFantasticos from './assets/imgProjects/AnimaisFantasticos.png'

export const arrayCertificados = [
    {
      nome: "React",
      imagem: CReact,
      link: "",
    },
    {
      nome: "Redux",
      imagem: Redux,
      link: "",
    },
    {
      nome: "JavaScript",
      imagem: Javascript,
      link: "",
    },
    {
      nome: "Css Avançado",
      imagem: CSSAvancado,
      link: "",
    },
    {
      nome: "UI Design",
      imagem: UIDesign,
      link: "",
    },
    {
      nome: "Web Design",
      imagem: WebDesign,
      link: "",
    },
    {
      nome: "HTML e Css",
      imagem: HTMLCss,
      link: "",
    },
  ];

export   const dataProjetos = [
    {
        nomeProj: 'Mini App Consórcio Magalu',
        imgProj: imgMiniApp,
        descProj: 'Sistema de auto compra de consórcios da Magazine Luiza',
        sobreProj: 'Tive uma grande participação nesse projeto, liderando a equipe de desenvolvimento e desenvolvendo o Front-End desde o ínicio do projeto. É um projeto PWA para ser utilizado tanto em Web quanto Mobile, desenvolvido em React com TypeScript, seguindo todos os eventos do SCRUM, utilizando o Azure Devops para realização das tarefas, participei brevemente do Back-End onde utilizamos NodeJs.',
        link: ''
      },
    {
        nomeProj: 'App Vendas Magalu',
        imgProj: imgAppVendas,
        descProj: 'Sistema para venda de consórcios da Magazine Luiza',
        sobreProj: 'Como principal desenvolvedor e líder da equipe de desenvolvimento, participei desde a criação das telas até a entrega do projeto, participando das revisões com o cliente, apresentando as novas funcionalidades. O sistema é um aplicativo Android e iOS desenvolvido em React Native com TypeScript no Front-End, onde atuei a maior parte do tempo, e Nodejs no Back-End, onde tive pouca participação em relação ao código. Utilizamos SCRUM e Azure DevOps como ferramentas para um desenvolvimento mais eficaz.',
        link: ''
      },
    {
      nomeProj: 'Stellantis Tool-Control',
      imgProj: imgEnablers,
      descProj: 'Sistema de inventário de ferramentas para as montadoras',
      sobreProj: 'Stellantis é um grupo automotivo multinacional da Fiat Chrysler Automobiles com a montadora francesa PSA Group. Esse projeto é um sistema de inventário onde é possivel atravéz de QrCode e localização, ter o controle de onde estão as ferramentas usadas nas diversas montadoras. Participei como Desenvolvedor Front-End criando as telas em React Native com TypeScript com base nos protótipos do figma e Integrando o Front-End com o Back-End. É um projeto PWA onde é possível usar o sistema tanto mobile via APP quanto web via browser.',
      link: ''
    },
    {
      nomeProj: 'Empírica Investimentos',
      imgProj: imgEmpirica,
      descProj: 'Sistema de investimentos Empírica',
      sobreProj: 'Sistema de fundos de investimentos como Fundo Multimercado, FIDC, Fundos no Exterior, Fundos Imobiliários e Serviços. Participei da equipe de desenvolvimento Front-End usando React com TypeScript criando as telas e integrando o Front-End com o Back-End.',
      link: ''
    },
    {
      nomeProj: 'Dogs - Rede social para cachorros',
      imgProj: imgDogs,
      descProj: 'Projeto do curso de React',
      sobreProj: 'Projeto desenvolvido no curso de React utilizando React com JavaScript, React Router, useContext, PropTypes, Componentes Funcionais, Hooks, entre outros.',
      link: 'https://igorbdev.github.io/dogs/'
    },
    {
      nomeProj: 'Mini Dogs - Gerenciamento de Usuarios Dogs',
      imgProj: imgMiniDogs,
      descProj: 'Projeto do curso de Redux',
      sobreProj: 'Projeto desenvolvido no curso de Redux utilizando React com JavaScript e Redux, Store, Dispath, Hooks, Actions entre outros.',
      link: 'https://igorbdev.github.io/redux/'
    },
    {
      nomeProj: 'Animais Fantásticos',
      imgProj: imgAnimaisFantasticos,
      descProj: 'Projeto do curso de JavaScript',
      sobreProj: 'Projeto desenvolvido no curso de JavaScript, do básico ao avançado, com Git, Fetch, Promises, Objetos, Arrays, Babel, entre outros.',
      link: 'https://igorbdev.github.io/animais-fantasticos/'
    }
  ]