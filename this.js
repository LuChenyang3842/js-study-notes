function* test(){
    var y = 0    
    while(true){
    yield y + 1
    y = y + 1
    }
    return y
}
g = test();
console.log(g.next())
console.log(g.next())