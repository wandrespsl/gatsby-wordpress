import React from "react"

import { StyledSection, Button } from "../styles/components"

export default function Section(props) {
  return (
    <StyledSection id={props.bgimage}>
      <div className="custom-labs-case-studies">
        <div className="container">
          <div className="column-3">
            <span>Our passion is coding the future</span>
            <h1>
              Nearshore Software Development
              <strong>Offshore Outsourcing Center</strong>
            </h1>
            <div className="dp-flex">
              <Button type="outline">
                <a href="/" className="btn btn-primary">
                  Contact us today!
                </a>
              </Button>
              <Button type="outline">
                <a
                  className="btn btn-primary dp-flex"
                  href="https://youtu.be/UxLy8BkSl1E"
                >
                  Watch our video
                  <div className="btn-video">
                    <i className="caret-2"></i>
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}
