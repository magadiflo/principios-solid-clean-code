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
- **Duplication**: duplicidad de código, no aplicar el principio DRY

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