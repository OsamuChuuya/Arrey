let appy = ["olma", "uzum", "banan", "gilos",]
alert(`Boshlanishda Arryning uzunligi; ${appy.length}`)
console.log(appy)
let result =confirm(`arrayingizdan malumotlarni olib tashamoqchimiz`);
if (result){
    appy.pop()
    console.log(appy)
}else{
    console.log(appy)
    alert(`Arrayning uzunligi; ${appy.length} `)

}
