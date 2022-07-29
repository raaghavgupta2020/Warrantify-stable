import React from "react";
import styled from "styled-components";
import choose from "../assets/choose.png";
import Button from "./Button";
export default function Choose() {
  return (
    <Section>
      <div className="image">
        <img src="https://4.imimg.com/data4/PE/RW/MY-12597274/mobile-extended-warranty-from-assure-warranty-1000x1000.jpg" alt="choose" style={{width : '500px'}}/>
      </div>
      <div className="content">
        <h2>Why should you Choose Our Website ?</h2>
        <p>
          Warrantify is the Website
        </p>
        <Button text="Read More" blue />
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 9rem;
  gap: 3rem;
  margin-bottom: 5rem;
  .image {
  }
  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    h2 {
      font-size: 4rem;
    }
    p {
      color: #7b7e86;
      line-height: 2rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin: 2rem;
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 50vw;
      }
    }
    .content {
      gap: 1rem;
      h2 {
        font-size: 1rem;
      }
      p {
        line-height: 1.3rem;
        font-size: 0.9rem;
      }
    }
  }
`;
