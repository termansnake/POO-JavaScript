function videoPlay(id){
    const urlSecreta = "https://platzuvideocreserto.com " +id;
    console.log("Se esta reproduciendo desde la irl" + urlSecreta)
}
function videoStop(id) {
    const urlSecreta = "https://platzuvideocreserto.com " +id;
    console.log("Pausamos la url " + urlSecreta);
}


export class PlatziClass {
    constructor({
        name, 
        videoID
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoStop(this.videoID);
    }
};

const clas21 = new PlatziClass({
    name: "Java]Script: orientado a objetos, basado en prototipos",
    videoID: "32435346576",
});

clas21.reproducir();
clas21.pausar();