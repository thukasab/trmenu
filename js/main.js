'use script';

{
    const dts = document.querySelectorAll('dt');

    dts.forEach(dt => {
        dt.addEventListener('click', () => {
            dt.parentNode.classList.toggle('appear');
        });
    })

    const dds = document.querySelectorAll('dd');

    dds.forEach(dd => {
        dd.addEventListener('click', () => {
            dd.parentNode.classList.toggle('appear');
        });
    })



}