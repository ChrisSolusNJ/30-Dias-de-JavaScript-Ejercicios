const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"];
console.log(webTechs);

//5. En el array webTechs, verifique si Sass existe en el array y si existe, imprima 'Sass es un preproceso de CSS'. Si no existe, agregue Sass al array e imprima el array.
webTechs.includes("Sass") ? console.log('Sass es un preproceso de CSS') : webTechs.push("Sass");
console.log(webTechs);

//6. Concatene las siguientes dos variables y guardelas en una variable fullStack.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);