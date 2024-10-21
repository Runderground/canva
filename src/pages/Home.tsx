import style from "./Home.module.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { BsCashCoin, BsWhatsapp, BsGem, BsShieldCheck } from "react-icons/bs";
import { Card } from "../components/cards/Index";
import { Avaliation } from "../components/avaliations/Index";

export default function Home() {
  return (
    <div className={style.container}>
      <Header />
      <section className={style.first_section}>
        <div className={style.first_content}>
          <div>
            <h1 className={style.main_title}>
              Canva <strong style={{ color: "var(--azul-claro)" }}>Pro</strong>
            </h1>
            <h2>O preço mais barato que você vai encontrar!</h2>
            <br />
            <p>
              O Canva Pro nunca ficou tão barato igual agora! tenha acesso a uma
              variedade de recursos{" "}
              <strong style={{ background: "rgba(255,50,60)", color: "white" }}>
                por apenas R$13!
              </strong>{" "}
              Isso mesmo, Canva Pro por um preço acessível com todas as
              funcionalidades desbloqueadas.
            </p>
            <br />
            <Link to="https://pay.kiwify.com.br/4h3yr1O">Quero Adquirir Agora!</Link>
          </div>

          <img
            className={style.canva_image}
            src="https://i.imgur.com/LRsgwzK.png"
            alt="Canva Pro"
          />
        </div>
      </section>
      <section className={style.second_section}>
        <h2>Quais as vantagens?</h2>
        <div className={style.second_content}>
          <Card.Root>
            <Card.Icon icon={<BsGem />} />
            <Card.Title title={"Funcionalidades"} />
            <Card.Description
              description={"Todas as funcionalidades do Canva Pro liberadas."}
            />
          </Card.Root>

          <Card.Root>
            <Card.Icon icon={<BsCashCoin />} />
            <Card.Title title={"Preço"} />
            <Card.Description
              description={
                "O preço mais barato do mercado, 40% do valor original no Canva!"
              }
            />
          </Card.Root>

          <Card.Root>
            <Card.Icon icon={<BsWhatsapp />} />
            <Card.Title title={"Suporte"} />
            <Card.Description
              description={
                "Tenha suporte via WhatsApp caso tenha qualquer dúvida ou problema."
              }
            />
          </Card.Root>

          <Card.Root>
            <Card.Icon icon={<BsShieldCheck />} />
            <Card.Title title={"Garantia 7 dias"} />
            <Card.Description
              description={
                "Tenha uma garantia de 7 dias caso não goste do produto."
              }
            />
          </Card.Root>
        </div>
        <Link to="https://pay.kiwify.com.br/4h3yr1O">Comprar</Link>
      </section>
      <section className={style.third_section}>
        <h2>Opiniões de quem já comprou:</h2>
        <div className={style.third_content}>
          <Avaliation.Root>
            <Avaliation.Image url={"https://i.imgur.com/tybONzR.jpeg"} />
            <Avaliation.Name name={"Lucas Ferreira"} />
            <Avaliation.Comment
              desc={
                "Excelente produto! cumpre com o que promete e não tive nenhum problema."
              }
            />
            <Avaliation.Rate />
          </Avaliation.Root>

          <Avaliation.Root>
            <Avaliation.Image url={"https://i.imgur.com/GkfLzGM.png"} />
            <Avaliation.Name name={"Mariana Almeida"} />
            <Avaliation.Comment
              desc={
                "Adorei! Nunca imaginei que conseguiria o Canva pro por apenas R$13. Uso todo dia e vale cada centavo!"
              }
            />
            <Avaliation.Rate />
          </Avaliation.Root>

          <Avaliation.Root>
            <Avaliation.Image url={"https://i.imgur.com/iGlZtt6.png"} />
            <Avaliation.Name name={"Rafael Santos"} />
            <Avaliation.Comment
              desc={
                "Pra quem trabalha com design, essa assinatura é perfeita! Pode assinar sem medo."
              }
            />
            <Avaliation.Rate />
          </Avaliation.Root>
        </div>
      </section>
      <section className={style.faq_section}>
        <h2>Perguntas Frequentes:</h2>
        <div className={style.faq_content}>
          <div className={style.faq_item}>
            <details>
              <summary>Como funciona?</summary>
              <p>
                Após a aquisição, o seu Canva Pro estará disponível na
                plataforma{" "}
                <strong style={{ color: "rgba(130, 255, 10)" }}>Kiwify</strong>{" "}
                ou no seu email, lá terá o passo a passo de como ativar, se
                ainda não conseguir, você terá acesso a um vídeo de como
                ativa-lo.
              </p>
            </details>
          </div>
          <div className={style.faq_item}>
            <details>
              <summary>E se eu tiver algum problema com a ativação?</summary>
              <p>
                Você terá acesso ao{" "}
                <strong style={{ color: "rgba(130, 255, 10)" }}>
                  WhatsApp
                </strong>{" "}
                onde poderá tirar suas dúvidas e resolveremos qualquer problema.
              </p>
            </details>
          </div>
          <div className={style.faq_item}>
            <details>
              <summary>Quanto tempo de assinatura?</summary>
              <p>
                O período do Canva Pro é{" "}
                <strong style={{ color: "rgba(50, 150, 250)" }}>
                  1 mês de assinatura
                </strong>{" "}
                <span style={{ background: "rgba(50, 150, 250, .3)" }}>
                  ( ou 3 meses com o bônus na hora da compra )
                </span>
                , qualquer problema da assinatura acabar antes, contactar o
                suporte.
              </p>
            </details>
          </div>
          <div className={style.faq_item}>
            <details>
              <summary>Meus projetos serão compartilhados?</summary>
              <p>
                Não! só sera compartilhado caso você permita acesso a um email
                de alguém como ocorre normalmente no Canva, ao contrário disso
                ninguém terá acesso aos seus projetos.
              </p>
            </details>
          </div>
        </div>
      </section>
      <section className={style.final_section}>
       <div className={style.final_content}>
         <Card.Root>
           <img
             className={style.canva_logo}
             src="https://i.imgur.com/Jn9oMyr.png"
             alt="Canva Pro"
           />
           <Card.Title title={"Canva Pro - 1 Mês"} />
           <Card.Description
             description={
               "Adquira seu Canva Pro clicando aqui embaixo"
             }
           />
            <h4>R$ 13</h4>
           <Link to="https://pay.kiwify.com.br/4h3yr1O">Comprar</Link>
         </Card.Root>
       </div>
      </section>
    </div>
  );
}
