
let submit = document.getElementById("submit-btn");

submit.addEventListener('click' , function(){
    swal({
        title: "Готово!",
        text: "Тепер ви будете отримувати повідомлення про новини нашого закладу.",
        icon: "success",
        button: "Чудово!",
      });
});
