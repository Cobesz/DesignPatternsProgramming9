//factory function
const dog = () => {
const sound = 'woof';
    return {
    talk: () => console.log(sound)
    }
};

//make a new dog object
const sniffles = dog();


//use talk function within dog
sniffles.talk();



