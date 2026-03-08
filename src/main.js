import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="logo-container">
    <a href="https://github.com/JackyPHO">
      <img src="/github.png" class="logo"/>
      <span class="logo-text">GitHub</span>
    </a>
  </div>
  <div class="logo-container">
    <a href="https://www.linkedin.com/in/jacky-ho-187046338/">
      <img src="/LinkedIn.png" class="logo"/>
      <span class="logo-text">LinkedIn</span>
    </a>
  </div>
  <div class="logo-container">
    <a href="/Resume.pdf">
      <img src="/note.png" class="logo"/>
      <span class="logo-text">Resume</span>
    </a>
  </div>
  <div class="logo-container">
    <a href="mailto:jackyphuho2003@gmail.com">
      <img src="/mail.png" class="logo"/>
      <span class="logo-text">Email</span>
    </a>
  </div>
`

setupCounter(document.querySelector('#counter'))
