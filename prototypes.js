const Developer = function(name, experience, language) {
    this.name = name;
    this.experience = experience;
    this.language = language;
}

Developer.prototype.getStartYear = function() {
    return `${this.name} works since  ${new Date().getFullYear() - this.experience}`;
}

Developer.prototype.getLanguage = function() {
    return `Favourite language is ${this.language}`;
}

const UIDev = function(name, experience, favourite) {
    Developer.call(this, name, experience, 'JavaScript');
    this.favourite = favourite;
}

const MobileDev = function(name, experience, operatingSys) {
    Developer.call(this, name, experience, 'Swift');
    this.operatingSys = operatingSys;
}

Object.setPrototypeOf(UIDev.prototype, Developer.prototype);
Object.setPrototypeOf(MobileDev.prototype, Developer.prototype);

const andrew = new UIDev('Andrew', 7, 'React');
const yana = new MobileDev('Yana', 2, 'iOS');

console.log(andrew.getStartYear());
console.log(andrew.getLanguage());

console.log(yana.getStartYear());
console.log(yana.getLanguage());