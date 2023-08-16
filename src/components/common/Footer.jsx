import React from 'react'
import './Footer.css'

export default function Footer(props) {
  let i,j = 0;
  const t = "baNSH";
  return (
    <footer style={props.style}>
      <span className="pno">Questions? Call <u>000-800-919-1694</u></span>
      <div className="ft-links-lists">
       {
        props.linksArr.map((linkList) => { return(
          <div key={props.linksArr.lastIndexOf(linkList)} className={props.linksArr.length/2 > props.linksArr.lastIndexOf(linkList)?'link-list1':'link-list2'}>
            {linkList.map((link) => { return (
              <a key={linkList.lastIndexOf(link)} className="ft-link" >
                {link}
              </a>
            )
            })}
          </div>
        )})
       }
      </div>
      <div className="lan-drop-down">
        <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          language
        </a>
        <ul className="dropdown-menu bg-dark">
          <li><a className="dropdown-item text-white" href="#">English</a></li>
          <li><a className="dropdown-item text-white" href="#">Hindi</a></li>
        </ul>
      </div>
      <span className="the-end">Netflix India</span>
    </footer>
  )
}
