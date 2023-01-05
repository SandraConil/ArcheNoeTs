//Arche de Noé


// interface

interface ArcheNoe{
    pattes : number;
    color : string;
}
//LEs classes : 1 pour tous les animeaux et les autres en fonctions des especes. 

class Animaux implements ArcheNoe {
    pattes : number;
    color : string;

    constructor(pattes: number, color:string){
        this.pattes = pattes;
        this.color = color;
    }
}

// heritage
class Chats extends Animaux{}
class ChatsChartreux extends Chats{}
class ChatsEuropeens extends Chats{}

class Chiens extends Animaux{}
class ChiensTerreNeuve extends Animaux{}
class ChiensMoonMoon extends Animaux{}

class Oiseaux extends Animaux{}
class OiseauxMesange extends Oiseaux{}
class OiseauxMerle extends Oiseaux{}

class Poissons extends Animaux{}
class PoissonsThon extends Poissons{}
class PoissonsRequin extends Poissons{}

class Asticots extends Animaux{}

// les ACTIONS 
function photo(parametre : Animaux){
    console.log('cheese');
}

function miaule(parametre : Chats){
    console.log('Miaouuuuu');
}

function aboie(parametre: Chiens){
    console.log('wouaff');
}

function voler(parametre: Oiseaux){
    console.log('voler');
}

function nager(parametre: Poissons){
    console.log('gloupss');
}

function caresser(animal : Animaux){
if(animal.pattes === 4){
    console.log('caresse');
} else {
    console.log('pas touche');
    }
}

function nourrir(animal : Animaux){
    if(animal.color === "noir"){
        console.log('miam miam');
    } else {
        console.log('au régime');
        }
    }


/// mes tests 

const midor = new ChiensMoonMoon(4,"noir");
caresser(midor);
photo(midor);



