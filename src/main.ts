import './style.css'
//*import './clean-code/07-tarea'
//import './code-smells/02-low-coupling'
//import './solid/02-open-closed-a'
//import './solid/03-liskov-substitution-a'
import './solid/05-dependency-inversion-a'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>CleanCode y SOLID</h1>
  <span>Revisar la consola de JavaScript</span>
`

