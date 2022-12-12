(() => {

    //* función para obtener información de una película por Id
    function getMovieById(id: string) {
        console.log({ id });
    }

    //* función para obtener información de los actores de una película - Actors o Cast //* id = movieId getMovieCast
    function getMovieCastById(id: string) {
        console.log({ id });
    }

    //* funcion para obtener el bio del actor por el id
    function getActorBioById(id: string) {
        console.log({ id });
    }

    //* Crear una película
    interface Movie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }
    function createMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    //* Crea un nuevo actor
    function createActor(fullName: string, birthdate: Date): boolean {
        console.log(birthdate);
        //* tarea asincrona para verificar nombre
        //* ..
        //* ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor');
        return true;
    }

})();
