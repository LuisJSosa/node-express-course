const { readFile, writeFile } = require('fs').promises

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start  = async function(){
    try{
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')

        await writeFile('./content/result-mind-granade.txt', `THIS IS AWESOME: ${first}, ${second} `, {flag: 'a'})

        console.log(first, second)
        console.log(second)

    } catch (err){
        console.log(err)
    }
   
    
}

start()

// const getText = function (path){
//     return new Promise(function(resolve, reject){
//         readFile(path,'utf8', function(err, data) {
//             if(err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/first.txt')
// .then( function(result){
//     console.log(result)
// } ) 
// .catch( function(err){
//     console.log(err)
// } ) 