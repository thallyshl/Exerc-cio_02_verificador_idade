function verificar() {
    var date = new Date()
    var yearNow = date.getFullYear()
    var year = document.querySelector("input#year")
    var res = document.querySelector("p#pfinal")
    var gender = document.querySelector("input")
    if (year.value.length == 0 || Number(year.value) > yearNow) {
        alert("Verifique os dados e tente novamente")
    } else {
        var sex = document.getElementsByName("genderg")
        var finalAge = (yearNow - Number(year.value))
        var genero = ''
        if (sex[0].checked) {
            genero = 'masculino'
            if (finalAge > 0 && finalAge <=10) {
                document.getElementById('image').src = 'images/criança_h.jpg'
            } else if (finalAge > 10 && finalAge <= 18) {
                document.getElementById('image').src = 'images/adolescente_h.jpg'
            } else if (finalAge > 18 && finalAge <= 30) {
                document.getElementById ('image').src ='images/jovem_h.jpg'
            } else {
                document.getElementById ('image').src ='images/velho_h.jpg'
            }
        } else if (sex[1].checked) {
            genero = 'feminino'
            if (finalAge > 0 && finalAge <=10) {
                document.getElementById('image').src = 'images/criança_m.jpg'
            } else if (finalAge > 10 && finalAge <= 18) {
                document.getElementById('image').src = 'images/adolescente_m.jpg'
            } else if (finalAge > 18 && finalAge <= 30) {
                document.getElementById ('image').src ='images/jovem_m.jpg'
            } else {
                document.getElementById ('image').src ='images/velho_m.jpg'
            }
        }
    }
    
    res.innerHTML = `Detectamos uma pessoa do sexo ${genero} com ${finalAge} anos!`
}