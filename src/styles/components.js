import styled from "styled-components"

export const colors = {
  ligthBlue: "#21d4fd",
  purple: "#B720FF",
  darkPurple: "#2d2045",
  textGray: "#888888",
  red: "#e60023",
  ligthGray: "#f5f5f5",
  black: "#060606",
}

export const StyledHeader = styled.header`
  background: transparent;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 2rem 2.625rem 0.625rem;
  z-index: 10000;
  transition: all 0.5s ease;
  height: auto;
  display: flex;
  justify-content: space-between;
  .gatsby-image-wrapper {
    width: 7rem;
  }
  a {
    color: ${colors.ligthBlue};
  }
`

export const StyledCard = styled.div`
  border-radius: 1rem;
  box-shadow: 0px 0px 0.25rem 0 rgba(0, 0, 0, 0.1);
  padding: 0;
  border: none;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1rem 2rem;
  .header-post {
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #ddd;
    width: 90%;
    margin: 0 auto;
  }

`
export const Button = styled.button`
  cursor: pointer;
  background-color: ${({ type }) =>
    type === "outline" ? "transparent" : colors.purple};
  color: ${({ type }) => (type === "outline" ? colors.ligthBlue : "white")};
  font-size: 1.25rem;
  padding: 0.4rem 1rem;
  font-weight: 500;
  border: ${({ type }) =>
    type === "outline"
      ? `0.125rem solid ${colors.ligthBlue}`
      : `0.125rem solid ${colors.purple}`};
  border-radius: 1.313rem;
  .btn-primary {
    text-decoration: none;
    color: ${({ type }) => (type === "outline" ? colors.ligthBlue : "white")};
    .btn-video {
      width: 1.5rem;
      height: 1.5rem;
      background: ${colors.ligthBlue};
      border-radius: 50%;
      position: relative;
      right: -0.5em;
      .caret-2:before {
        content: "";
        position: absolute;
        top: 0.35em;
        left: 0.5em;
        border-top: 0.25em solid transparent;
        border-left: 0.4em solid ${colors.darkPurple};
        border-right: 0.25em solid transparent;
        border-bottom: 0.25em solid transparent;
      }
    }
  }
  &:disabled {
    background-color: ${colors.gray};
    border-color: ${colors.gray};
    cursor: not-allowed;
  }
  + button {
    margin: 0 0 0 1rem;
  }
`
export const StyledSection = styled.div`
  // background: ${colors.darkPurple};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .custom-labs-case-studies {
    height: 100%;
    padding: 4.375rem 0;
    .container {
      height: 100%;
      display: flex;
      align-items: center;
      max-width: 70rem;
      span {
        font-size: 70px;
        line-height: 75px;
        margin: 100px 0 14px;
        color: white;
        padding: 0;
        font-weight: 800;
        letter-spacing: -0.04px;
      }
      h1 {
        font-size: 1.625rem;
        line-height: 30px;
        font-weight: 400;
        padding: 0;
        margin: 1rem 0 5rem 0;
        color: white;
        opacity: 0.9;
        strong {
          display: block;
          font-weight: 400;
        }
      }
      .dp-flex {
        display: flex;
        align-items: center;
      }
      .column-3 {
        width: 60%;
      }
    }
  }
`
export const StyledFooter = styled.div`
  background: ${colors.darkPurple};
  color: white;
  padding: 2.5rem 0 0 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .custom-home-about-us {
    max-width: 70rem;
    margin: 0 auto;
    .container {
      display: flex;
      align-items: start;
      justify-content: space-between;
      flex-wrap: wrap;
      p {
        font-size: 0.875rem;
        font-weight: 300;
        color: white;
        padding: 0;
        line-height: 1.5rem;
        a {
          font-size: 0.875em;
          font-weight: 300;
          color: ${colors.ligthBlue};
          line-height: 1.938em;
          display: block;
          margin: 0.625rem 0 0;
          text-decoration: none;
          &.no-link {
            color: white;
            margin: 0;
          }
        }
      }
      h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0 0 1.563rem;
        line-height: 3.438rem;
        letter-spacing: -0.003rem;
      }
      ul {
        margin: 0 0 0.688rem;
        padding: 0;
        li {
          list-style: none;
          padding: 0;
          margin: 0;
          a {
            font-size: 0.875rem;
            font-weight: 300;
            color: ${colors.ligthBlue};
            line-height: 1.938rem;
            text-decoration: none;
          }
        }
      }
      .gatsby-image-wrapper {
        width: 35%;
        opacity: 1;
        margin-bottom: 2.188rem;
      }
      .column-3 {
        width: 25%;
        padding: 0 1rem;
      }
      .column-4 {
        width: 33.33333333%;
        padding: 0 1rem;
      }
      .column-2 {
        width: 16.66666667%;
        padding: 0 1rem;
      }
    }
  }
`
