
console.log(`It Print All Method && Properties In Current Tab : `,window);
console.log(`It Print All Method && Properties In Current Tab : `,document);

// Document and window are Same
//Eg:
if(window.document==document)
{
    console.log(true);
}
else{
    console.log(false);
}

//Print document Inside Method && Property
console.dir(document)

document.title="Kishor"
document.bgColor="red"
