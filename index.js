//Arche de Noé
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//LEs classes : 1 pour tous les animeaux et les autres en fonctions des especes. 
var Animaux = /** @class */ (function () {
    function Animaux(pattes, color) {
        this.pattes = pattes;
        this.color = color;
    }
    return Animaux;
}());
// heritage
var Chats = /** @class */ (function (_super) {
    __extends(Chats, _super);
    function Chats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Chats;
}(Animaux));
var ChatsChartreux = /** @class */ (function (_super) {
    __extends(ChatsChartreux, _super);
    function ChatsChartreux() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChatsChartreux;
}(Chats));
var ChatsEuropeens = /** @class */ (function (_super) {
    __extends(ChatsEuropeens, _super);
    function ChatsEuropeens() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChatsEuropeens;
}(Chats));
var Chiens = /** @class */ (function (_super) {
    __extends(Chiens, _super);
    function Chiens() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Chiens;
}(Animaux));
var ChiensTerreNeuve = /** @class */ (function (_super) {
    __extends(ChiensTerreNeuve, _super);
    function ChiensTerreNeuve() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChiensTerreNeuve;
}(Animaux));
var ChiensMoonMoon = /** @class */ (function (_super) {
    __extends(ChiensMoonMoon, _super);
    function ChiensMoonMoon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChiensMoonMoon;
}(Animaux));
var Oiseaux = /** @class */ (function (_super) {
    __extends(Oiseaux, _super);
    function Oiseaux() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Oiseaux;
}(Animaux));
var OiseauxMesange = /** @class */ (function (_super) {
    __extends(OiseauxMesange, _super);
    function OiseauxMesange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OiseauxMesange;
}(Oiseaux));
var OiseauxMerle = /** @class */ (function (_super) {
    __extends(OiseauxMerle, _super);
    function OiseauxMerle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OiseauxMerle;
}(Oiseaux));
var Poissons = /** @class */ (function (_super) {
    __extends(Poissons, _super);
    function Poissons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Poissons;
}(Animaux));
var PoissonsThon = /** @class */ (function (_super) {
    __extends(PoissonsThon, _super);
    function PoissonsThon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PoissonsThon;
}(Poissons));
var PoissonsRequin = /** @class */ (function (_super) {
    __extends(PoissonsRequin, _super);
    function PoissonsRequin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PoissonsRequin;
}(Poissons));
var Asticots = /** @class */ (function (_super) {
    __extends(Asticots, _super);
    function Asticots() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Asticots;
}(Animaux));
// les ACTIONS 
function photo(parametre) {
    console.log('cheese');
}
function miaule(parametre) {
    console.log('Miaouuuuu');
}
function aboie(parametre) {
    console.log('wouaff');
}
function voler(parametre) {
    console.log('voler');
}
function nager(parametre) {
    console.log('gloupss');
}
function caresser(animal) {
    if (animal.pattes === 4) {
        console.log('caresse');
    }
    else {
        console.log('pas touche');
    }
}
function nourrir(animal) {
    if (animal.color === "noir") {
        console.log('miam miam');
    }
    else {
        console.log('au régime');
    }
}
/// mes tests 
var midor = new ChatsEuropeens(4, "noir");
caresser(midor);
photo(midor);
