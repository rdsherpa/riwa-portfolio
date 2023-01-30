import React from "react";
import SectionTitle from "./SectionTitle";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import styled from "styled-components";
import PText from "./PText";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const TestmonialSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .testimonial__wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }
  .testimonial__info {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    margin-top: 5rem;
  }
  .testimonial__desc {
    .para {
      text-align: center;
    }
  }
  .testimonial__name {
    margin-top: 4rem;
    font-family: "Montserrat Bold";
    font-size: 2.2rem;
  }
  .testimonial__title {
    font-size: 1.6rem;
    margin-top: 0.3rem;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }
`;

export default function TestmonialSection() {
  return (
    <TestmonialSectionStyles>
      <div className="container">
        <SectionTitle
          heading="Testimonials"
          subheading="See what my clients says about me and my work"
        />
        <div className="testimonial__wrapper">
          <SwitchTransition>
            <CSSTransition>
              <div className="testimonial__info">
                <div className="testimonial__desc">
                  <PText>
                    Riwa is sweet, hardworking and creative guy. It is always
                    pleasure working with him
                  </PText>
                </div>
                <h2 className="testimonial__name">Riwa Sherpa</h2>
                <p className="testimonial__title">Full-Stack-WebDeveloper</p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div className="prev">
            <MdArrowBack />
          </div>
          <div className="prev">
            <MdArrowForward />
          </div>
        </div>
      </div>
    </TestmonialSectionStyles>
  );
}
