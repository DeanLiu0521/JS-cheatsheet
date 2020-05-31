class Book{
    constructor(author){
        this._author = author;
    }

    get writer(){
        return this._author;
    }

    set writer(updateauthor){
        this._author = updateauthor;
    }
}


class Thermostat{
    constructor(temp){
        this._temp = 5/9 * (temp-32);
    }
    get temperature(){
        return this._temp;
    }
    set temperature(updatedtemp){
        this._temp = updatedtemp;
    }

}

const thermos = new Thermostat(70);
console.log(thermos.temperature);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp)