function GerarBordas() {
    let iTopLeft = document.getElementById("iTopLeft").value
    let iTopRight = document.getElementById("iTopRight").value
    let iBottomRight = document.getElementById("iBottomRight").value
    let iBottomLeft = document.getElementById("iBottomLeft").value

    let resultado = document.getElementById("resultado")
    let css = document.getElementById("css")

    let texto = `${iTopLeft}px ${iTopRight}px ${iBottomRight}px ${iBottomLeft}px`

    css.innerText = `border-radius: ${texto}`;
    resultado.style.borderRadius =  texto;

}