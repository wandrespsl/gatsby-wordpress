import React from "react"
import { StyledCard } from "../../styles/components"

const SinglePostTemplate = props => {
  const {
    pageContext: { id, postId, title, content, featuredImage },
  } = props

  return (
    <div classNames="blog">
      <div
        data-id={id}
        id={`post-${postId}`}
        className={`post-${postId} post type-post status-publish format-standard hentry category-react tag-accessibility tag-gatsby entry`}
      >
        <header className="entry-header">
          <h1
            className="entry-title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </header>

        {/* Featured Image*/}
        {undefined !== featuredImage && null !== featuredImage ? (
          <img
            src={featuredImage.sourceUrl}
            srcSet={featuredImage.srcSet}
            alt={featuredImage.altText}
          />
        ) : (
          ""
        )}

        <div
          className="entry-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {/* .entry-content */}
      </div>
      {/* #post-${ID} */}
    </div>
  )
}

export default SinglePostTemplate
