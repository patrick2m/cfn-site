import './Sobre.scss'

import img1956 from '../assets/img/about/1956.webp'
import amaralpeixoto from '../assets/img/about/amaral-peixoto-1970.webp'
import casadasfechaduras2010 from '../assets/img/about/casadasfechaduras2010.webp'
import chaveirocf from '../assets/img/about/chaveirocf.webp'
import casadasferramentas from '../assets/img/about/casadasferramentas2010.webp'
import apertodemao from '../assets/img/about/aperto-de-mao.webp'
import casadasfechaduras2010lojanova from '../assets/img/about/casadasfechaduras2010lojanova.webp'
import lojabb from '../assets/img/about/lojabb.webp'
import equipe from '../assets/img/about/equipe.webp'
import treinamento from '../assets/img/about/treinamento.webp'

export default function Sobre() {
  return (
    <main id="main-about">
      <h2 className="section-title">Sobre nós</h2>
      {/* ----------Introdução---------- */}
      <section className="intro-about">
        <div className="banner-about">
          <h1>Há mais de 60 anos cuidando do seu lar com modernidade e segurança!</h1>
          <p>
            ESPECIALIZADA EM FECHADURAS, FERRAGENS, MAÇANETAS, PUXADORES E
            ACESSÓRIOS
          </p>
        </div>
        <h4>
          Após tanto tempo de mercado, somos referência em qualidade e
          variedade de produtos. Somos uma casa cheia de tradição e boas histórias!
        </h4>
      </section>

      <h2 className="section-title">Nossa história</h2>

      {/*  ----------Artigos---------- */}
      <div className="article">
        <div className="article-img-container">
          <img src={img1956} alt="Ano de 1956" className="article-img" />
          <div className="article-img-text-left">
            <span className="text-img-description">
              Centro de Niterói em 1950.
            </span>
          </div>
        </div>
        <span className="article-text">
          Isaac Augusto Ferreira Pinto iniciou suas atividades no comércio
          ferragista em 1956, após acumular experiências trabalhando numa das
          mais tradicionais casas de ferragens nos anos 40, a conhecida "Casa
          Borges".
        </span>
      </div>

      <div className="centralizardivisoria">
        <hr className="divisoria" />
      </div>

      <div className="article flex-row-reverse">
        <div className="article-img-container">
          <img
            src={amaralpeixoto}
            alt="Amaral Peixoto em 1970"
            className="article-img"
          />
          <div className="article-img-text-right">
            <span className="text-img-description">
              Rua Amaral Peixoto em 1970.
            </span>
          </div>
        </div>
        <span className="article-text">
          Constrói sua loja na Rua Marechal Deodoro, 192, uma das principais
          vias de acesso do Centro para os bairros da Zona Norte de município de
          São Gonçalo.
        </span>
      </div>

      <div className="centralizardivisoria">
        <hr className="divisoria" />
      </div>

      <div className="article">
        <div className="article-img-container">
          <img
            src={casadasfechaduras2010}
            alt="Casa das Fechaduras 2010"
            className="article-img"
          />
          <div className="article-img-text-left">
            <span className="text-img-description">
              Primeira loja Casa das Fechaduras.
            </span>
          </div>
        </div>
        <span className="article-text">
          Inaugurada em 26 de julho de 1971, ganhou o nome de "Isaac das
          Fechaduras". Essa loja foi o ponto de partida de um trabalho
          persistente e intenso e até hoje permanece aberta ao público.
        </span>
      </div>

      <div className="centralizardivisoria">
        <hr className="divisoria" />
      </div>

      <div className="article flex-row-reverse">
        <div className="article-img-container">
          <img src={chaveirocf} alt="Chaveiro CF" className="article-img" />
          <div className="article-img-text-right">
            <span className="text-img-description">Chaveiro CF</span>
          </div>
        </div>
        <span className="article-text">
          A evolução do grupo é uma meta permanente: a prestação de serviços ao
          cliente gerou a criação do chaveiro próprio, o "ChaveiroCF", atendendo
          da simples cópia de chave até complexos sistemas de segurança, com a
          mesma qualidade já conhecida.
        </span>
      </div>

      <div className="centralizardivisoria">
        <hr className="divisoria" />
      </div>

      <div className="article">
        <div className="article-img-container">
          <img
            src={apertodemao}
            alt="Foto representando contrato fechado"
            className="article-img"
          />
          <div className="article-img-text-left">
            <span className="text-img-description">
              O começo de uma grande história.
            </span>
          </div>
        </div>
        <span className="article-text">
          Em seguida, convidou os seus parentes Amadeu Joaquim de Almeida e José
          Nicolau Pereira de Almeida para se associarem e desenvolverem ainda
          mais a empresa.
        </span>
      </div>

      <div className="centralizardivisoria">
        <hr className="divisoria" />
      </div>

      <div className="article flex-row-reverse">
        <div className="article-img-container">
          <img
            src={casadasfechaduras2010lojanova}
            alt="Casa das Fechaduras Grande em 2010"
            className="article-img"
          />
          <div className="article-img-text-right">
            <span className="text-img-description">
              Loja atual da Casa das Ferramentas.
            </span>
          </div>
        </div>
        <span className="article-text">
          Assim, em 12 de setembro de 1981, foi inaugurada a segunda loja, no nº
          168 da mesma rua, denominada "Casa das Fechaduras", com 1700 m2 de
          área construída e amplo espaço para a exposição da Já enorme variedade
          de produtos disponíveis.
        </span>
      </div>

      <div className="centralizardivisoria">
        <hr className="divisoria" />
      </div>

      <div className="article">
        <div className="article-img-container">
          <img
            src={casadasferramentas}
            alt="Casa das Ferramentas pequena"
            className="article-img"
          />
          <div className="article-img-text-left">
            <span className="text-img-description">
              Primeira Casa das ferramentas.
            </span>
          </div>
        </div>
        <span className="article-text">
          O setor de ferramentas se desenvolveu de forma expressiva, motivando a
          abertura em 19/04/2004, da "Casa das Ferramentas", uma loja totalmente
          especializada nesse segmento.
        </span>
      </div>

      <div className="centralizardivisoria">
        <hr className="divisoria" />
      </div>

      <div className="article flex-row-reverse">
        <div className="article-img-container">
          <img
            src={lojabb}
            alt="Loja Bello Banho retirada do site oficial"
            className="article-img"
          />
          <div className="article-img-text-right">
            <span className="text-img-description">Loja Bello Banho.</span>
          </div>
        </div>
        <span className="article-text">
          O desenvolvimento do setor de construção, nos anos 80, motivou a
          criação, na nova loja, de setor especializado em louças e acessórios
          para banheiros e cozinhas, o "Bello Banho".
        </span>
      </div>

      <div className="centralizardivisoria">
        <hr className="divisoria" />
      </div>

      <div className="article">
        <div className="article-img-container">
          <img
            src={equipe}
            alt="Foto representando a equipe"
            className="article-img"
          />
          <div className="article-img-text-left">
            <span className="text-img-description">
              Uma equipe preparada pra você.
            </span>
          </div>
        </div>
        <span className="article-text">
          Conta hoje com uma equipe de mais 110 pessoas cuidando de mais de
          40.000 itens diferentes das melhores marcas nacionais e importadas,
          além de desenvolver produtos especiais sob encomenda. Representantes
          da empresa participam das melhores feiras do setor, conhecendo
          lançamentos ainda antes de chegarem ao mercado.
        </span>
      </div>

      <div className="centralizardivisoria">
        <hr className="divisoria" />
      </div>

      <div className="article flex-row-reverse">
        <div className="article-img-container">
          <img
            src={treinamento}
            alt="Foto meramente ilustrativa de reunião"
            className="article-img"
          />
          <div className="article-img-text-right">
            <span className="text-img-description">Progredindo sempre.</span>
          </div>
        </div>
        <span className="article-text">
          Desde a sua fundação, a Casa das Fechaduras investe na valorização e
          aperfeiçoamento dos seus funcionários, através de cursos, treinamentos
          e visitas às fábricas, proporcionando assum um atendimento cada vez
          mais personalizado aos seus clientes, seja o consumidor, sejam
          profissionais.
        </span>
      </div>
      
      <div className="centralizardivisoria">
        <hr className="divisoria" />
      </div>
      
    </main>
  )
}
