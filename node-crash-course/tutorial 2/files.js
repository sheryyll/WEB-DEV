const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data); // outputs a Buffer
    console.log(data.toString()); // outputs acutal data
});
console.log('last line');

// writing files
fs.writeFile('./docs/blog1.txt', 'hello world', () => {
    console.log('file was written');
})

// wriring to a file that doesnt exist
fs.writeFile('./docs/blog2.txt', 'hello world', () => {
    console.log('file was written');
}) // this creates a new file: 'blog2.txt'

// directories
    /* fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder created'); // if this is run again it will throw error
    }) */

    // to prevent such error:
    if(!fs.existsSync('./assets')){ 
        fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder created'); 
        }) 
    } else {
        fs.rmdir('./assets', (err) => {
            if(err){
                console.log(err);
            }
            console.log('folder deleted');
        })
    }

// deleting files
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('.docs/deleteme.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('File deleted');
    })
}