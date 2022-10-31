$(document).on("click", ".submit", function () {
  var input_blanter = document.getElementById("wa_email");

  /* Whatsapp Settings */
  var walink = "https://api.whatsapp.com/send",
    phone = "6281328611825",
    walink2 = "Halo saya ingin menggunakan jasa Yulise Wisata",
    text_yes = "Terkirim.",
    text_no = "Isi semua Formulir lalu klik Send.";

  /* Smartphone Support */
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    var walink = "whatsapp://send";
  }

  if ("" != input_blanter.value) {
    /* Call Input Form */
    var input_select1 = $("#wa_select :selected").text(),
      input_name1 = $("#wa_name").val(),
      input_email1 = $("#wa_email").val(),
      input_number1 = $("#wa_number").val(),
      input_textarea1 = $("#wa_textarea").val();

    /* Final Whatsapp URL */
    var blanter_whatsapp =
      walink +
      "?phone=" +
      phone +
      "&text=" +
      walink2 +
      "%0A%0A" +
      "*Nama* : " +
      input_name1 +
      "%0A" +
      "*Tujuan Wisata* : " +
      input_email1 +
      "%0A" +
      "*Jenis Bis* : " +
      input_select1 +
      "%0A" +
      "*Jumlah Peserta* : " +
      input_number1 +
      "%0A" +
      "%0A" +
      "*Deskripsi* : " +
      input_textarea1 +
      "%0A";

    /* Whatsapp Window Open */
    window.open(blanter_whatsapp, "_blank");
    document.getElementById("text-info").innerHTML =
      '<span class="yes">' + text_yes + "</span>";
  } else {
    document.getElementById("text-info").innerHTML =
      '<span class="no">' + text_no + "</span>";
  }
});
