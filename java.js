var ticket = document.getElementById("ccc");
var download_btn1 = document.getElementById('btn1');
var download_btn2 = document.getElementById('btn2');
var download_btn3 = document.getElementById('btn3');
var download_btn4 = document.getElementById('btn4');


download_btn1.addEventListener('click', () => {
    domtoimage.toJpeg(ticket).then((data) => {
        var link = document.createElement('a');
        link.download = "image1.jpeg";
        link.href = data;
        link.click();
    });
});
download_btn2.addEventListener('click', () => {
    domtoimage.toPng(ticket).then((data) => {
        var link = document.createElement('a');
        link.download = "image2.png";
        link.href = data;
        link.click();
    });
});
download_btn3.addEventListener('click', () => {
    domtoimage.toSvg(ticket).then((data) => {
        var link = document.createElement('a');
        link.download = "image3.svg";
        link.href = data;
        link.click();
    });
});
download_btn4.addEventListener('click', () => {
    html2pdf().from(ticket).save();
});
