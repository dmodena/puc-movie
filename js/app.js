var load = function () {
  loadImg()

  $('#imagens img').click(function () {
    $('#imagens img').removeClass('outline')
    $(this).addClass('outline')
    loadImg()
  })
}

var loadImg = function () {
  $('#active').html('<img itemprop="image" src="' + $('#imagens .outline').attr('src') + '" alt="Movie image 2">')
}

document.addEventListener("DOMContentLoaded", load, false)
