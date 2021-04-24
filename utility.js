// Holds Custom Functions that are utilized throughout the app in multiple pages and components
//TODO: for Production Code change default value of fn:layoutGuide parameter `dev` to false !!!



const layoutGuide = function (tailwind, dev=false){
    if (dev === true){
        return ('border-2 border-dotted border-red-500' + tailwind)  
    } else {
        return tailwind
    }
    };

module.exports = {'layoutGuide' : layoutGuide};