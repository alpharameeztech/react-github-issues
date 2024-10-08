import React from 'react'
import {useQuery} from "@tanstack/react-query";
import {formatDistance} from "date-fns";
import Markdown from "react-markdown";

export default function Comments({issueNumber}) {
    const {
        isLoading,
        isSuccess,
        data:comments
    } =  useQuery({
        queryKey: ['comments', issueNumber],
        queryFn: fetchComments
    });

    function fetchComments(){
        return fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issueNumber}/comments`).then(response => response.json())
    }
  return (
      <>
          {isLoading && <div>Loading...</div>}
          {isSuccess && (
              <>
            {comments.map(comment => (
            <div key={comment.id} className="comment-container">
              <a href={comment.user.html_url}>
                  <img
                      src={comment.user.avatar_url}
                      alt="avatar"
                      className="avatar"
                  />
              </a>
              <div className="comment">
                  <div className="comment-heading">
                      <a href={comment.user.html_url}>{comment.user.login}</a> commented {formatDistance(new Date(comment.created_at), new Date(), { addSuffix: true })}
                  </div>
                  <div className="comment-body markdown-body">
                      <Markdown
                        children={comment.body}
                      />
                  </div>
              </div>
          </div>
            ))}
              </>
          )}

      </>
  )
}
