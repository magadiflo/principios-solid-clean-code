//* (() => { ...código.... })(); Función anónima autoinvocada para que el código quede aislado.
(() => {

    type Gender = 'M' | 'F';

    class Person {
        constructor(public name: string, public gender: Gender, public birthday: Date) { }
    }

    const newPerson = new Person('Martín', 'M', new Date('1995-10-20'));
    console.log({ newPerson });

})();   