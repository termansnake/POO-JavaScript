class courses{
    constructor({
        name,
        classes =[],
        isFree = false, 
        lang = "spanish"
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }

    set name(nuevoNombre){
        if(nuevoNombre === "Curso malito de programacion basica"){
        console.error("web..no");   
    } else {
        this._=nuevoNombre;
    }
}}
const cursoProgBasicA = new courses({
    name: "Curso de programacion basica",
    isFree: true,
})
const cursoDeifinitivoHTMl = new courses ({
    name: "Curso definitivo de HTML",
})
const cursoPracticoHTMl = new courses ({
    name: "Curso definitivo de HTML",
    lang: "english",
})

class Student {
    constructor({
        name, email, username, twitter = undefined, instagram = undefined, facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) 
    {
        this.name = name;
        this.email = email; 
        this.username = username; 
        this.socialMedia = {
            twitter,instagram,facebook,
        };
        this.approvedCourses = [] = approvedCourses;
        this.learningPaths = [] = learningPaths;
    };
};

class freeStudent extends Student{
    constructor(props) {
        super(props);
    }  
    
    approvedCourses(newCourse) {                        
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos " + this.name + "solo puedes tomar cursos gratis")
        }

    }
}

class basicStudent extends Student{
    constructor(props) {
        super(props);
    }   
    approvedCourses(newCourse) {                        
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos " + this.name + "solo puedes tomar cursos de ingles");
        }

    }
}

class expertStudent extends Student{
    constructor(props) {
        super(props);
    }   
    approvedCourses(newCourse) {                        
            this.approvedCourses.push(newCourse);
        }
    }

    //clase learning path
class learningPat {
    constructor({name,cursos =[]}){
        this.name = name;
        this.cursos = cursos;
    }
}

const escuelaWeB = new learningPat ({
    name: "Escuela de desarrollo web",
    cursos: [ cursoDeifinitivoHTMl, cursoPracticoHTMl, "Flex CDD"] 
})

const escuelaDatA = new learningPat ({
    name: "Escuela de Data Science",
    cursos: ["Inteligencia Artificial", "Dataviz"] 
})
const escuelaVgS = new learningPat ({
    name: "Escuela de Video Juegos",
    cursos: ["Intro de Unity", "Unreal"] 
})



const juan = new freeStudent({
    name:"german",
    username: "shgerman",
    email: "eiodeio@ffddd.com",
    twitter: "germanserr",
    learningPat: [
        escuelaWeB,escuelaDatA
    ]

    })
const migueli = new basicStudent({
    name:"god",
    username: "fdfdfdf",
    email: "eioddfdfdfdfdfo@ffddd.com",
    twitter: "loquillo",
    learningPat: [
        escuelaWeB, escuelaVgS
    ]
    })    

