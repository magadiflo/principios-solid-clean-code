//* Se nos presenta un caso donde tenemos que remover la librería de axios,
//* ya que es una dependencia muy pesada, o queremos usar otra, etc.. cualquiera
//* fuese el motivo... esto lo queremos hacer para ver el principio de 
//* Responsabilidad única y el de Open-Closed.
//* Usamos el siguiente comando para remover: npm remove axios

//* import axios from 'axios';

//* Una vez removida la librería de axios, veremos que solo esta clase es la que
//* está siendo afectada, las demás están trabajando normal.

//* Ahora, quisiéramos usar la misma funcionalidad de js para realizar peticiones
//* asíncronas: fetch(), la implementamos y veremos que todo sigue funcionando

export class HttpClient {

    // async get(url: string) {
    //     const { data, status } = await axios.get(url);
    //     console.log(status);
    //     return { data, status };
    // }

    async get(url: string) {
        const resp = await fetch(url);
        const data = await resp.json();

        return { data, status: resp.status };
    }

}