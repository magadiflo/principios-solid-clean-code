(() => {

    interface Bird {
        eat(): void;
    }

    interface FlyingBird {
        fly(): void;
    }

    interface RunningBird {
        run(): void;
    }

    interface SwimmingBird {
        swim(): void;
    }

    class Tucan implements Bird, FlyingBird {
        public fly() { }
        public eat() { }
    }

    class Hummingbird implements Bird, FlyingBird {
        public fly() { }
        public eat() { }
    }

    class Ostrich implements Bird, RunningBird {
        public eat(): void { }
        public run(): void { }
    }

    class Penguin implements Bird, SwimmingBird {
        public eat() { }
        public swim() { }
    }


})();