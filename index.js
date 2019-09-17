function onClickAbout() {
  document.getElementById('details').innerHTML = 
  `My name is <span style=\"color:#268bd2\"> Nicholas Murray</span>.<br><br>  
  I'm primarily a back-end developer with proficiencies in cloud-based <span style=\"color:#2aa198\">microservices</span>, <span style=\"color:#2aa198\">containers</span>, 
  and <span style=\"color:#2aa198\">C#</span>/<span style=\"color:#2aa198\">.NET</span>.<br><br>  
  I'm passionate about <span style=\"color:#2aa198\">Agile</span> software development, <span style=\"color:#2aa198\">TDD</span>, quality automated <span style=\"color:#2aa198\">testing</span>, 
  and <span style=\"color:#2aa198\">CI</span>/<span style=\"color:#2aa198\">CD</span>.`;
}

function onClickWork() {
  document.getElementById('details').innerHTML = 
  `<span style=\"color:#2aa198\">2018</span> - <span style=\"color:#2aa198\">____</span>: <span style=\"color:#cb4b16\">Honeywell</span> - Senior Software Engineer<br><br>  
  <span style=\"color:#2aa198\">2016</span> - <span style=\"color:#2aa198\">2018</span>: <span style=\"color:#cb4b16\">Honeywell</span> - Software Engineer<br><br>  
  <span style=\"color:#2aa198\">2014</span> - <span style=\"color:#2aa198\">2016</span>: <span style=\"color:#cb4b16\">Honeywell</span> - Graduate Software Engineer`;
}

function onClickProjects() {
  document.getElementById('details').innerHTML = 
  `<a href='https://github.com/nmur/portfolio/' ><span class='project-title'  style=\"color:#cb4b16\">portfolio</span></a> - this page<br><br>  
  <a href='https://github.com/nmur/nsw-license-plate-lookup/' ><span class='project-title' style=\"color:#cb4b16\">nsw-license-plate-lookup</span></a> - simple API for returning vehicle details for NSW plates<br>
  (Try it! <span style=\"color:#268bd2\">GET</span> <a href='https://www.nickmurray.dev/api/plate/ABC123' ><span style=\"color:#859900\">nickmurray.dev/api/plate/ABC123</span></a>)`;
}


