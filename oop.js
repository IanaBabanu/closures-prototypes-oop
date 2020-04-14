class Developer {
    constructor(name, experience, language) {
        this.name = name;
        this.experience = experience;
        this.language = language;
    }

    getStartYear() {
        return `${this.name} works since  ${new Date().getFullYear() - this.experience}`;
    }

    getLanguage() {
        return `Favourite language is ${this.language}`;
    }
}

class UIDev extends Developer {
    constructor(name, experience, favourite) {
        super(name, experience, 'JavaScript');
        this.favourite = favourite;
    }
}

class MobileDev extends Developer {
    constructor(name, experience, operatingSys) {
        super(name, experience, 'Swift');
        this.operatingSys = operatingSys;
    }
}


const andrew = new UIDev('Andrew', 7, 'React');
const yana = new MobileDev('Yana', 2, 'iOS');

console.log(andrew.getStartYear());
console.log(andrew.getLanguage());

console.log(yana.getStartYear());
console.log(yana.getLanguage());