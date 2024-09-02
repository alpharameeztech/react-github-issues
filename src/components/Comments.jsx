import React from 'react'
import {useQuery} from "@tanstack/react-query";
import {formatDistance} from "date-fns";

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
              <a href="#">
                  <img
                      src={comment.user.avatar_url}
                      alt="avatar"
                      className="avatar"
                  />
              </a>
              <div className="comment">
                  <div className="comment-heading">
                      <a href="#">{comment.user.login}</a> commented {formatDistance(new Date(comment.created_at), new Date(), { addSuffix: true })}
                  </div>
                  <div className="comment-body">
                      {comment.body}
                  </div>
              </div>
          </div>
            ))}
              </>
          )}

      </>
  )
}
