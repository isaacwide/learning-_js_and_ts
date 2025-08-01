let words=['casa', 'asa', 'taza', 'coche']

function acabanEnA(words) {
    for(const palabra of words) {
         if(!palabra.endsWith("a")){
            return false; 
            break; // 
         }

    }   
    return true;
  
}