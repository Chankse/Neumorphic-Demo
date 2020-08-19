setupSliders();

function setupSliders() {
    let sliderV1 = document.getElementById('slider_v1');
    let sliderV1RangeInput = sliderV1.querySelector('#range')
    let sliderV1RangeBar = sliderV1.querySelector('.fill')

    sliderV1RangeBar.style.width = sliderV1RangeInput.value + '%';
    sliderV1RangeInput.addEventListener('input', () => {
        sliderV1RangeBar.style.width = sliderV1RangeInput.value + '%';
    })


    let sliderV2 = document.getElementById('slider_v2');
    let sliderV2RangeInput = sliderV2.querySelector('#range')
    let sliderV2RangeBar = sliderV2.querySelector('.fill')
    let sliderV2RangeToolTip = sliderV2.querySelector('.tooltip')

    sliderV2RangeBar.style.width = sliderV2RangeInput.value + '%';
    sliderV2RangeToolTip.style.left = `calc(${sliderV2RangeInput.value}% - 40px)`;
    sliderV2RangeToolTip.innerHTML = sliderV2RangeInput.value + '%'

    sliderV2RangeInput.addEventListener('input', () => {
        sliderV2RangeBar.style.width = sliderV2RangeInput.value + '%';

        sliderV2RangeToolTip.style.left = `calc(${sliderV2RangeInput.value}% - 40px)`;
        sliderV2RangeToolTip.innerHTML = sliderV2RangeInput.value + '%'
    })


    let sliderV3 = document.getElementById('slider_v3');
    let sliderV3RangeInput = sliderV3.querySelector('#range')
    let sliderV3RangeBar = sliderV3.querySelector('.thumb');

    let percent = (sliderV3RangeInput.clientWidth - sliderV3RangeBar.clientWidth) / sliderV3RangeInput.clientWidth
    sliderV3RangeBar.style.left = sliderV3RangeInput.value * percent + '%';

    sliderV3RangeInput.addEventListener('input', () => {
        sliderV3RangeBar.style.left = sliderV3RangeInput.value * percent + '%';
    })

}