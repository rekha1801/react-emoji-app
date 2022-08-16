import React from 'react';
import GitHubButton from 'react-github-btn';

export default function Header() {
  return (
    <div style={{textAlign: "center"}}>
        <h1>React Search Emoji App 🦄</h1>
        <p>Simple tool to search emoji with ReactJS</p>
        <GitHubButton href="https://github.com/rekha1801" data-size='large' data-show-count ={true} data-icon='octicon-star'>Star</GitHubButton>
        <GitHubButton href="https://github.com/rekha1801" data-size='large' data-show-count ={true} data-icon='octicon-repo-forked'>Forked</GitHubButton>
    </div>
  )
}
