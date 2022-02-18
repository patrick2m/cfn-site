import './About.scss'

import about1 from '../assets/img/about/about_1.png'
import img1956 from '../assets/img/about/1956.jpg'
import MapBox from './partials/MapBox'

export default function About() {
  return (
    <main id="main-about">
      <h2 className="section-title">Sobre nós</h2>

      <div className="intro-about">
        <img src={about1} alt="" className="banner-about" />
        <h4>
          Há mais de 60 anos no mercado, somos referência em qualidade e
          variedade de produtos. Somos uma casa cheia de tradição e boas
          histórias!
        </h4>
      </div>

      <h2 className="section-title">Nossa história</h2>

      <div className="article">
        <div className="article-img-container">
          <img src={img1956} alt="Ano de 1956" className="article-img" />
          <div className="article-img-text-left">
            <span className="text">Centro de Niterói na década de 1950</span>
          </div>
        </div>
        <h4>
          Isaac Augusto Ferreira Pinto iniciou suas atividades no comércio
          ferragista em 1956, após acumular experiências trabalhando numa das
          mais tradicionais casas de ferragens nos anos 40, a conhecida "Casa
          Borges".
        </h4>
      </div>

      <div className="article">
        <h4>
          Constrói sua loja na Rua Marechal Deodoro, 192, uma das principais
          vias de acesso do Centro para os bairros da Zona Norte de município de
          São Gonçalo.
        </h4>
        <div className="article-img-container">
          <img
            src="http://lorempixel.com.br/300/150/?1"
            alt=""
            className="article-img"
          />
          <div className="article-img-text-right">
            <span className="text">Legenda da foto</span>
          </div>
        </div>
      </div>

      <div className="article">
        <div className="article-img-container">
          <img
            src="http://lorempixel.com.br/300/150/?2"
            alt=""
            className="article-img"
          />
          <div className="article-img-text-left">
            <span className="text">Legenda da foto</span>
          </div>
        </div>
        <h4>
          Inaugurada em 26 de julho de 1971, ganhou o nome de "Isaac das
          Fechaduras". Essa loja foi o ponto de partida de um trabalho
          persistente e intenso e até hoje permanece aberta ao público.
        </h4>
      </div>

      <div className="article">
        <h4>
          A evolução do grupo é uma meta permanente: a prestação de serviços ao
          cliente gerou a criação do chaveiro próprio, o "ChaveiroCF", atendendo
          da simples cópia de chave até complexos sistemas de segurança, com a
          mesma qualidade já conhecida.
        </h4>
        <div className="article-img-container">
          <img
            src="http://lorempixel.com.br/300/150/?3"
            alt=""
            className="article-img"
          />
          <div className="article-img-text-right">
            <span className="text">Legenda da foto</span>
          </div>
        </div>
      </div>

      <div className="article">
        <div className="article-img-container">
          <img
            src="http://lorempixel.com.br/300/150/?4"
            alt=""
            className="article-img"
          />
          <div className="article-img-text-left">
            <span className="text">Legenda da foto</span>
          </div>
        </div>
        <h4>
          O setor de ferramentas se desenvolveu de forma expressiva, motivando a
          abertura em 19/04/2004, da "Casa das Ferramentas", uma loja totalmente
          especializada nesse segmento.
        </h4>
      </div>

      <div className="article">
        <h4>
          Em seguida, convidou os seus parentes Amadeu Joaquim de Almeida e José
          Nicolau Pereira de Almeida para se associarem e desenvolverem ainda
          mais a empresa.
        </h4>
        <div className="article-img-container">
          <img
            src="http://lorempixel.com.br/300/150/?5"
            alt=""
            className="article-img"
          />
          <div className="article-img-text-right">
            <span className="text">Legenda da foto</span>
          </div>
        </div>
      </div>

      <div className="article">
        <div className="article-img-container">
          <img
            src="http://lorempixel.com.br/300/150/?6"
            alt=""
            className="article-img"
          />
          <div className="article-img-text-left">
            <span className="text">Legenda da foto</span>
          </div>
        </div>
        <h4>
          Assim, em 12 de setembro de 1981, foi inaugurada a segunda loja, no nº
          168 da mesma rua, denominada "Casa das Fechaduras", com 1700 m2 de
          área construída e amplo espaço para a exposição da Já enorme variedade
          de produtos disponíveis.
        </h4>
      </div>

      <div className="article">
        <h4>
          O desenvolvimento do setor de construção, nos anos 80, motivou a
          criação, na nova loja, de setor especializado em louças e acessórios
          para banheiros e cozinhas, o "Bello Banho".
        </h4>
        <div className="article-img-container">
          <img
            src="http://lorempixel.com.br/300/150/?7"
            alt=""
            className="article-img"
          />
          <div className="article-img-text-right">
            <span className="text">Legenda da foto</span>
          </div>
        </div>
      </div>

      <div className="article">
        <div className="article-img-container">
          <img
            src="http://lorempixel.com.br/300/150/?8"
            alt=""
            className="article-img"
          />
          <div className="article-img-text-left">
            <span className="text">Legenda da foto</span>
          </div>
        </div>
        <h4>
          Conta hoje com uma equipe de 110 pessoas cuidando de mais de 40.000
          itens diferentes das melhores marcas nacionais e importadas, além de
          desenvolver produtos especiais sob encomenda. Representantes da
          empresa participam das melhores feiras do setor, conhecendo
          lançamentos ainda antes de chegarem ao mercado.
        </h4>
      </div>

      <div className="article">
        <h4>
          Desde a sua fundação, a Casa das Fechaduras investe na valorização e
          aperfeiçoamento dos seus funcionários, através de cursos, treinamentos
          e visitas às fábricas, proporcionando assum um atendimento cada vez
          mais personalizado aos seus clientes, seja o consumidor, sejam
          profissionais.
        </h4>
        <div className="article-img-container">
          <img
            src="http://lorempixel.com.br/300/150/?9"
            alt=""
            className="article-img"
          />
          <div className="article-img-text-right">
            <span className="text">Legenda da foto</span>
          </div>
        </div>
      </div>

      <div className="address-info">
        <h2 className="section-title">Endereços</h2>

        <div className="map-info">
          <div className="map">
            <h4 className="map-name">Unidade Niterói</h4>
            <p>Rua Marechal Deodoro, Nº 168, Centro - Niterói/RJ</p>
            <p>24030-060</p>
            <MapBox
              latitude={-22.889737133069602}
              longitude={-43.119811196483795}
              zoom={15}
            />
          </div>

          <div className="map">
            <h4 className="map-name">Unidade São Gonçalo</h4>
            <p>Rua Dr. Felíciano Sodré, Nº 57, Centro - São Gonçalo</p>
            <p>24440-440</p>
            <MapBox
              latitude={-22.826029565201875}
              longitude={-43.05057118452541}
              zoom={15}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
