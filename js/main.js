window.onload = function () {
  var i, j;
  for (i = 3; i <= 18; ++i) {
    var add_contens = `<option value=${i*1}>${i}</option>`;

    $(".3d6").append(add_contens);
  }
  for (i = 8; i <= 18; ++i) {
    var add_contens = `<option value=${i*1}>${i}</option>`;

    $(".2d6_6").append(add_contens);
  }
  for (i = 6; i <= 21; ++i) {
    var add_contens = `<option value=${i*1}>${i}</option>`;

    $(".3d6_3").append(add_contens)
  }
  $(".2d6_6").val(8);
  $(".3d6_3").val(6);
}

function diserool1d6() {
  j = 0
  var dis = [25];
  for (i = 0; i <= 25; ++i) {
    dis[i] = Math.floor(Math.random() * 6 + 1);
  }
  var stats = [9];
  for (j = 0; j < 8; ++j) {
    if (j < 5) {
      stats[j] = dis[3 * j] + dis[3 * j + 1] + dis[3 * j + 2];
    } else if (j < 7) {
      stats[j] =
        dis[3 * j] + dis[3 * j + 1] + 6;
    } else {
      stats[j] =
        dis[3 * j] + dis[3 * j + 1] + dis[3 * j + 2] + 3;
    }
  }
  console.log(stats[6])
  for (i = 2; i <= 11; ++i) {
    var tg = $(`th:nth-child(${i}) select`);
    tg.val(stats[i - 2]);
  }
  for (i = 0; i < 8; ++i) {
    dis[i] = Math.floor(Math.random() * 3 + 1);
    $(`.stats${i}`).val(dis[i]);
  }

}
