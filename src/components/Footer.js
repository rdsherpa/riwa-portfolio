import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Riwa Dorjee Sherpa</h1>
          <PText>FullStack-Web-Developer</PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            Links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                title: "About",
                path: "/about",
                type: "Link",
              },
              {
                title: "Projects",
                path: "/projects",
                type: "Link",
              },
              {
                title: "Contact",
                path: "/contact",
                type: "Link",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            Links={[
              {
                title: "970-390-4845",
                path: "contact: 9703904845",
              },
              {
                title: "sherpariwa@gmail.com",
                path: "emai at: sherpariwa@gmail.com",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social media links"
            Links={[
              {
                title: "Facebook",
                path: "https://www.facebook.com/ryudorji.sherpa",
              },
              {
                title: "Instagram",
                path: "https://www.instagram.com/sherpa_ryu/",
              },
              {
                title: "Linkedin",
                path: "https://www.linkedin.com/in/riwa-dorjee-sherpa-12bb2822b/",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2023 - Riwa Dorjee Sherpa</PText>
        </div>
      </div>
    </FooterStyles>
  );
}
