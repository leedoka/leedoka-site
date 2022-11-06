const buyCoffeeButtons = document.querySelectorAll('.btn__to__buy');

const closeModalWindow = document.getElementById('remodal__close');
const modalWindow = document.querySelector('.remodal');
const productField = document.getElementById('product-name');

// buyCoffee.onclick = function () {
//   modalWindow.classList.remove('invisible');
// };

buyCoffeeButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const productName = button.dataset.productName;
    productField.value = productName;
    modalWindow.classList.remove('invisible');
  })
})

closeModalWindow.onclick = function () {
  modalWindow.classList.add('invisible');
}

$(document).ready(function () {
    $("form").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'deliver_order_data.php',
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html(data);
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);
            }
        });
        return false;
    });
});
