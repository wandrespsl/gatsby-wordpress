import React from "react"
import { Link } from "gatsby"
import { StyledCard } from "../../styles/components"

const BlogTemplate = ({ pageContext: { nodes } }) => {
  return (
    <>
      <div id="blog">
        {nodes &&
          nodes.map(post => {
            const {
              id,
              postId,
              title,
              content,
              excerpt,
              uri,
              featuredImage,
            } = post

            const maxLength = 240
            let excerptText = excerpt

            // Check if excerpt exits
            if (!excerptText) {
              // Get the first ( maxLength e.g. 240 characters ) from the content.
              excerptText = content.substr(0, maxLength)
              excerptText = content
                .substr(
                  0,
                  Math.min(excerptText.length, excerptText.lastIndexOf(""))
                )
                .concat("...")
            }

            return (
              <StyledCard data-id={id} key={postId}>
                <header>
                  <Link to={`/blog/${uri}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: title }} />
                  </Link>
                </header>

                {/*	Featured Image*/}
                {undefined !== featuredImage && null !== featuredImage ? (
                  <img
                    src={featuredImage.sourceUrl}
                    srcSet={featuredImage.srcSet}
                    alt={featuredImage.altText}
                  />
                ) : (
                  ""
                )}

                {/*	Excerpt*/}
                <div
                  className="body"
                  dangerouslySetInnerHTML={{
                    __html: excerptText,
                  }}
                />
              </StyledCard>
            )
          })}
      </div>
    </>
  )
}

export default BlogTemplate
