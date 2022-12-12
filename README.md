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