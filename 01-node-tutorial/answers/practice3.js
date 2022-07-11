fs = require('fs').promises

const makeFile = async ()=>{
    try{
        const data = await fs.writeFile('./content/practice2.txt,', 'This is the first line. \n')
        console.log('File create successfully')
        for (let i=0; i<11; i++) {
            fs.appendFile('./content/practice2.txt,', `This is line ${i}\n`, {flags: 'a'})
        }
        
    } catch(err){
        console.error(err)
    }
}

makeFile()

