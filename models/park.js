const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collections = [
        {'species' : 'Tyrannasaurus Rex', 'diet' : 'carnivore', 'guestsAttractedPerDay' : 50}, 
        {'species' :  'Brachiasaurus', 'diet' : 'herbivore', 'guestsAttractedPerDay' : 25},
        {'species' :  'Ankylosaurus', 'diet' : 'herbivore', 'guestsAttractedPerDay' : 45}
    ]
}

Park.prototype.numberInCollection = function (){
    return this.collections.length;
}

Park.prototype.addToCollection = function (collection){
    this.collections.push(collection)
}

Park.prototype.removeFromCollection = function (collection){
    this.collections.pop(collection)
}

Park.prototype.mostPopularDinosaur = function (){
    if (this.collections.guestsAttractedPerDay[0] > this.collections.guestsAttractedPerDay[1]){
        if (this.collections.guestsAttractedPerDay[0] > this.collections.guestsAttractedPerDay[2]){
            return this.collections.guestsAttractedPerDay[0]
        } else if (this.collections.guestsAttractedPerDay[1] > this.collections.guestsAttractedPerDay[2]){
            return this.collections.guestsAttractedPerDay[0]

        }
    } else {
        return this.collections.guestsAttractedPerDay[2]
    }
}
module.exports = Park

