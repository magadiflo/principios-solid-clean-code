# Principios SOLID y Clean Code

Este es un proyecto de Vanilla TypeScript en Vite, para trabajar los ejercicios del curso sobre Principios SOLID y CleanCode.

Clonar o descargar el proyecto y luego:

```
yarn install
ó
npm install
```

Para ejecutar el proyecto, simplemente ejecuten
```
yarn dev
ó
npm run dev
```

---

## Deuda técnica
Falta de calidad en cierto aspecto de nuestro código, ya sea generada de manera intencional.  
Se resume, en falta de calidad de nuestro código o en algún tipo de proceso de nuestro desarrollo de software.  
Ejemplo: Faltó documentación, faltó pruebas, etc... y precisamente la deuda técnica se paga con la REFACTORIZACIÓN.  
Quizá nosotros estuvimos desarrollando algo, y dijimos, esa parte lo vemos luego, ahora tenemos que ya salir a producción, entonces
eso es un tipo de deuda.  
Es decir, una deuda de la que estamos concientes que vamos a tener que pagar después.

```
La falta de calidad en el código, que genera una deuda que repercutirá en costos futuros (costos económicos).
```
**Costos económicos**
- Tiempo en realizar mantenimientos.
- Tiempo en refactorizar código.
- Tiempo en comprender el código.
- Tiempo adicional en la transferencia del código.

## Esquema de deuda técnica de Martin Fowler
- **Imprudente/Deliberada**: El desarrollador actúa de forma consciente e impruedente, el proyecto generado es de mala calidad y poco tolerable al cambio. *Ejm: No hay tiempo, solo copia y pega eso de nuevo*
- **Imprudente/Inadvertida**: Se genera por el desconocimiento o falta de experiencia. *Ejm: ¿Qué son patrones de diseños?*
- **Prudente/Deliberada**: Sabemos que tenemos la deuda y estamos conscientes de que existe. El problema es que si no pagamos a tiempo más intereses pagaremos después. *Ejm. Tenemos que entregar rápido ya refactorizaremos luego*
- **Prudente/Inadvertida**: Ocurre cuando se desea producir el mejor código, pero encuentras una mejor solución después de la implementación. *Ejm: Ahora sabemos cómo lo deberíamos haber hecho*

```
Caer en deuda técnica es normal y a menudo es inevitable.
```

## ¿Cómo se paga una deuda técnica?
**Refactorización:** es simplemente un proceso que tiene como objetivo mejorar el código sin alterar su comportamiento para que sea más entendible y tolerante a cambios.  
Usualmente para que una refactorización fuerte tenga el objetivo esperado, es imprescindible contrar con **pruebas automáticas.**

## Clean Code
- "Código Limpio es aquel que se ha escrito con la intención de que otra persona (o tú mismo en el futuro) lo entienda" - Carlos Blé.
- "Nuestro código tiene que ser simple y directo, debería leerse con la misma facilidad que un texto bien escrito" - Grady Booch.

---
## Nombre pronunciables y expresivos
- Los nombres de las variables deberían estar escritas en inglés y ser pronunciables.
```
const numberOfUnits = 53;
const tax = 0.18;
const category = 'T-Shits';
const birthDate = new Date('August 15, 1965 00:00:00');
```

## Nombre de una función
```
Verbo + sustantivo, ejmp: createUser(), updateUser(), sendEmail(), etc..
```

## Nombre de una clase
```
Formadas por un sustantivo o frases de sustantivo.
```
3 Preguntas para determinar saber si es un buen nombre de clase:
```
¿Qué exactamente hace la clase?
¿Cómo exactamente esta clase realiza cierta tarea?
¿Hay algo específico sobre su ubicación?
```

## Parámetros y argumentos
Cuando nosotros definimos una función, podemos añadirle PARÁMETROS es lo que se le llamaa lo que 
que va dentro de los paréntesis de la función. Ejmp.  
```
function sendEmail(toWhom: string): boolean{
    ....
}

Entonces, el toWhom sería llamado PARÁMETRO
```
Pero, cuando nosotros ya usamos dicha función nosotros mandamos ARGUMENTOS. Ejmpl. 
```
sendEmail('martin@google.com');
Entonces, quí el valor que le pasamos se llama ARGUMENTO
```
Se recomienda limitar a 3 parámetros

## Funciones
- Simplicidad es fundamental
- Funciones de tamaño reducido
- Funciones de una sola línea sin causar complejidad
- Menos de 20 líneas
- Evitar el uso del else
- Prioriza el uso de la condicional ternaria

## Principio DRY (Don't Repeat Yourself)
- Evitar tener duplicidad de código.
- Simplifica las pruebas.
- Ayuda a centralizar los procesos.
- Aplicar el principio DRY, usualmente lleva a refactorizar.

## Estructura recomendada de una clase
- **Comenzar con lista de propiedades**
1. Propiedades estáticas.
2. Propiedades públicas de último.
- **Métodos**
1. Empezando por los constructores estáticos.
2. Luego el constructor
3. Seguidamente métodos estáticos
4. Métodos privados después
5. Resto de métodos de instancia ordenados de mayor a menor importancia
6. Getters y Setters al final
```
class HtmlElement {
    //*** PROPIEDADES ***//

    //1° Estática
    public static domReady: boolean: false;
    
    //2° Públicas

    //3° Privadas
    private _id: string;
    private type: string;
    private updateAt: number;

    //*** MÉTODOS ***//
    //1° Estáticos
    static createInput(id: string) {
        return new HtmlElement(id, 'input');
    }

    //2° Constructor
    constructor(id: string, type: string) {
        this._id = id;
        this.type = type;
        this.updateAt = Date.now();
    }

    //3° Setter y Getters
    setType(type: string) {
        this.type = type;
        tis.updateAt = Date.now();
    }

    get id(): string {
        return this._id;
    }

}
```

---

# Acrónimo - STUPID
Todo lo que nosotros no deberíamos de hacer.  
STUPID: Conjunto de antipatrones que no deberíamos usar. Estos será resueltos con los principios SOLID que vienen más adelante.  

6 Code Smells que debemos evitar:

- **Singleton**: patrón singleton
- **Tight Coupling**: alto acoplamiento
- **Untestability**: código no probable (unit test)
- **Premature optimization**: optimizaciones prematuras
- **Indescriptive Naming**: nombres poco descriptivos
- **Duplication**: duplicidad de código, aplicar el principio DRY

# Acoplamiento y cohesión
```
Un buen diseño de software tiene una "alta cohesión y un bajo acoplamiento"
```

**Cohesión**, se refiere a lo que la clase (o módulo) puede hacer.
- **La baja cohesión**, significaría que la clase realizaría una gran variedad de
acciones: es amplia, no se enfoca en lo que debe hacer.
- **La alta cohesión**, significa que la clase se enfoca en lo que debería estar
haciendo, es decir, solo métodos relacionados con la intención de la clase.

**Acoplamiento**, se refiere a cuán relacionados o dependientes son dos clases o módulos entre sí.
- **En bajo acoplamiento**, cambiar algor importante en una clase no debería afectar a la otra.
- **En alto acoplamiento**, dificultaría el cambio en el mantenimiento de su código; dado que las clases están muy unidas, hacer un cambio podría requerir una renovación completa
del sistema.

---

## Principios SOLID
Los principios SOLID nos indican cómo organizar nuestras funciones y estructuras de datos en componentes y cómo dichos componentes deben estar interconectados.  

Los 5 principios S.O.L.I.D. de diseño de software son:

- S – Single Responsibility Principle (SRP)
- O – Open/Closed Principle (OCP)
- L – Liskov Substitution Principle (LSP)
- I – Interface Segregation Principle (ISP)
- D – Dependency Inversion Principle (DIP)


# [Code Quality en Angular](https://www.youtube.com/watch?v=FUs5VsdT2gg&list=PLy09ETjgu8VqKGRs1UFq3ZiFbY0zzhdLr&index=7)
### ¿Cómo escribir código limpio?
Aplicando alguno de los principios generales de diseño de clean code.

- **KISS**: Keep It Simple Stupid (Mantenlo siempre estúpido). Tratar en lo posible de refactorizar el código para que sea lo más simple de tal forma
que se pueda entender el código.
- **DRY**: Don't Repeat Yourself (no repitas). No debemos repetir elementos, *ejmp. código, archivos, carpetas, clases, componentes, etc.* Lo que debemos
hacer es reutilizable los elementos. Crea una vez, y luego reutiliza.
- **YAGNI**: You Aren't Gonna Need It. (no lo vas a necesitar). Siempre implemente las cosas cuando realmente las necesite, nunca cuando preveea que las necesitará.
- **Readable Before Concise**: legible antes que conciso. El código no solo dbe funcionar y ser interpretado por la máquina que lo ejecuta, sino *también debe ser comprensible para otros desarrolladores*.

# Buenas prácticas en Angular
## 01. Estructura de Proyecto
### Estructura de carpetas
En angular organizamos nuestros componentes a base de módulos, así que es una decisión crítica qué estrategia de módulos usar según el proyecto a realizar.  
Veamos qué opciones tenermos:
- Todo en un módulo
- Un módulo por componente
- Un módulo por característica o vista (recomendado por la documentación oficial de Angular)

*Recuerden que no existe una única manera de estructurar tus carpetas, lo único que hay son recomendaciones en base al estudio y experiencia en múltiples proyectos*  

A continuación, [LogiDev 35:29 min](https://www.youtube.com/watch?v=FUs5VsdT2gg&list=PLy09ETjgu8VqKGRs1UFq3ZiFbY0zzhdLr&index=7) muestra como recomendación la estructura de carpetas que usa en sus proyectos de Angular.

**/src/app**, define cómo quiere estructurar sus carpetas bases: /business, /commons, /pages
```
src/
    /app
        /business
        /commons
        /pages
        app-routing.module.ts
        app.component.html
        app.component.scss
        app.component.ts
        app.module.ts
```

**/pages**, representa las rutas (páginas) que existen en mi web, con esto el desarrollador podrá identificar más rápido dónde es que debe empezar sus actividades.  
Estos componentes se encargan de **mostrar información** y realizar **tareas muy básicas**. **No es que estos componentes van a realizar la lógica de negocio, de realizar peticiones http.**
```
/pages
    /login-page
    /register-page
    /dashboard-page
        /category-page
        /product-page
        /sales-page
```

**/commons**, aquí irán los artefactos que serán comunes y reutilizables en toda la aplicación: **componentes, services, pipes, etc**.
```
/commons
    /components
    /pipes
    /models
    /services
    /shared
```

**/business**, en esta carpeta se distribuyen los flujos del negocio.
```
/business
    /sales
        /commons
        /sales-user-flow
            /commons
        /sales-admin-flow
            /commons
    /maintenance
        /product-flow
        /category-flow
    /auth
        /login-flow
        /register-flow
```

### Single Responsability Principle (SRP) en archivos
Principio de Responsabilidad única aplicada en archivos, cada uno tiene un único propósito.
- Components
- Services
- Pipes
- Directives
- Guards
- Interceptors
- etc.

### Nombre de archivos y carpetas
Seguir un mismo patrón, primero va la **característica del archivo** seguido del **tipo**, separado por un punto:
- container.component.ts
- container.component.html

En caso el nombre sea compuesto debemos usar **"-"**:
- login-page.component.ts
- recovery-password-page.component.html

El nombre de una carpeta debe describir su contenido:
```
/shared
    /components
    /modules
        shared-form-basic.modules.ts
        shared-form-complete.module.ts
```

### Uso de path alias
Con esto simplificamos las rutas y hacemos que el código sea más fácil de leer y mantener.

```
import { IUser } from '../../../../models/user.interface';
import { Navigationervice } from '../../../services/navigation/navigation.service';
```

Para ello debemos de configurar nuestro **tsconfig.ts**, dentro del atributo **"compilerOptions"**.
```
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths:" {
        "@models-interface/*": ["src/app/commons/models/interfaces/*"],
        "@services/*": ["src/app/commons/services/*"],
        "@services-navigation/*": ["src/app/commons/services/services-navigation/*"]
    },
  },
}
```
```
import { IUser } from '@models-interface/user.interface';
import { NavigationService } from '@services-navigation/navigation.service';
```

### SRP en Componentes
Los componentes grandes añaden complejidad, por ello debemos dividirlos en pequeños componentes, seto simplifica su mantenimiento y pruebas unitarias.

#### SMART and DUMB components
Antes de crear un componente debemos medir su complejidad.

**SMART**
- Ejecutan lógica de negocio
- Gestionan datos
- Realizan comunicación hacia abajo
- Manejan / gestionan hacia arriba

**DUMB**
- Reciben datos y los presentan (@Input)
- Emiten eventos (@Output)

### Usar un gestor de estados (solo si el proyecto lo amerita)
**¿Qué es el estado?** básicamente se refiere al valor de las variables de nuestros componentes (o aplicación) en un momento determinado. Cuando los valores cambian, el estado **"muta"**.

**Redux:** es el patrón de arquitectura de datos que implementa el flujo de la información sencillo y predecible, adoptado por numerosos frameworks y aplicaciones avanzadas.

--- 

## 02. Sintaxis
### Guía de estilos de Angular
- Máximo de 400 líneas por archivo
- Máximo 75 líneas por método
- Convención de nombre de ficheros y clases
- Organizar dentro de la clase
- Const vs let

### Aprovechar las características de ES6 y TypeScript
- Funciones de flecha (arrow function)
- Template string
- Herencias
- Strict type
- Abastracts
- Generic Types
- Spread operator
- Ambitos de bloque en variables y constantes

```
Generic Type Example
--------------------
export interface IResponse<T = void> {
    data: T;
    success: boolean,
    errorMessage: string;
}
```

### Diferenciar públicos y privados
Se debe poder distinguir los métodos, funciones y variables públicas y privadas dentro de un componente, de esta manera será más fácil saber quienes interactúan con el HTML.
```
//* Podemos usar el _ (guión bajo) para decir que es una variable, función o método privado, y el resto será público.

constructor(private _userApiService: UserApiService, private _formBuilder: FormBuilder, private _router: Router){}
```

### Usar pipes en vez de métodos directo en el HTML
Si llamas a un método o función directamente en el HTML, este se ejecutará cada vez que se vuelva a renderizar el componente, incluso con la detección onPush, eso significará
que se activará cada vez que haya interacción con el componente o cualquier elemento secundario del componente (hacer click, escribir).

### Usar "CONST" al crear un ENUM
En la mayoría de los casos, los enums son una solución perfectamente válida. Sin embargo, a veces los requisitos son más estrictos.
```
const enum STATUS {
    "PENDIENTE" = 1,
    "AUTORIZADO" = 2,
    "CANCELADO" = 3
}
```

### Centralizar los valores globales
- Nombre de rutas
- Identificadores de Storage Web (LocalStorage, SessionStorage, Cookies, etc.)
- URL Públicas

#### Optimizar la detección de cambios
Cada componente tiene asociado un detector de cambios. Angular puede detectar cuándo cambian los datos de los componentes y luego volver a renderizar automáticamente la vista para reflejar ese cambio.

#### Prevenir memory leaks (pérdida de memoria)
**Memory leak**, es memoria que ya no se utiliza pero no se libera. Esto lo vemos en los Observables, creamos un memory leak si no nos de-subscribimos al destruir el componente.  
Tres maneras de prevenir los memory leaks:

- TAKE UNTIL
```
export class HeaderComponent implements OnInit, OnDestroy {
    private readonly destroy$ = new Subject();

    constructor(private _apiService: ApiService){}

    ngOnInit(): void {
        this._apiService.channel$
            .pipe(
                finalize(() => console.log('-Finalize-')),
                takeUntil(this.destroy$)
            )
            .subscribe(data => console.log(data));
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
```
- CAPTURE SUBSCRIPTION
```
export class HeaderComponent implements OnInit, OnDestroy {
    private _subscription!: Subscription;

    constructor(private _apiService: ApiService){}

    ngOnInit(): void {
        this._subscription = this._apiService.channel$
            .subscribe(data => console.log(data));
    }

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }
}
```
- ASYNC PIPE, el pipe ASYNC mata automáticamente la subscripción por nosotros.
```
<li *ngFor="let item of myService.getItems() | async">{{ item.name }}</li>
```

#### Evitar las subscripciones anidadas
- Esto funciona, pero no sería recomendable
```
constuctor(private _apiService: ApiService){}

ngOnInit(): void {
    this._apiService.getPokemonDitto()
        .subscribe(responseDitto => {
            console.log(responseDitto);

            this._apiService.getPokemonCharizard()
                .subscribe(responseCharizard => {
                    console.log(responseCharizard);
                });
        });
}
```

- CombineLatest(...), Cuando tengamos dos o más peticiones anidadas sin importarnos el orden de las peticiones, es decir no existe dependencia entre una petición y otra.
```
constuctor(private _apiService: ApiService){}

ngOnInit(): void {
    combineLatest([
        this._apiService.getPokemonDitto(),
        this._apiService.getPokemonCharizard(),
    ])
    .subscribe(([responseDitto, responseCharizard]) => {
        console.log(responseDitto);
        console.log(responseCharizard);
    });
}
```

- ConcatMap(...), cuando necesitamos que un observable se resuelva primero para que a partir del dato devuelto podamos hacer el llamado a otro observable.  
Sería recomendable usar ConcatMap() sobre SwitchMap(), ya que [el SwitchMap() puede resultar peligroso según esta página](https://medium.com/dottech/todo-sobre-switchmap-y-compa%C3%B1%C3%ADa-2af03cedc2be)
```
constuctor(private _apiService: ApiService){}

ngOnInit(): void {
    this._apiService.getPokemonDitto()
        .pipe(
            concatMap((response) => {
                console.log(response);
                return this._apiService.getPokemonCharizard(response.id);
            })
        )
        .subscribe(responseCharizard => {
            console.log(responseCharizard);
        });
}
```

#### TrackBy ngFor
Al usar **ngFor** y actualizar la lista, Angular eliminará de manera predeterminada toda la lista del DOM y la creará nuevamente, porque no tiene forma, de manera predeterminada,
de saber qué elemento se agregó o eliminó de la lista. 

La función **trackBy** nos ayudará a lidiar con esto.

```
<li *ngFor="let pokemon of listPokemons; trackBy: identifyPokemon">{{ pokemon.name }}</li>

identifyPokemon(_index: number, pokemon: IPokemon): number {
    return pokemon.id;
}
```