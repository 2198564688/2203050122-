$.getJSON('info.json', function (json) {
    $('#name').text(json.name)
    $('#intro').text(json.intro)
    $('#about').text(json.about)
  
    // 0为女生，1为男生
    if (json.sex == '1') {
      $('#sex').text('👦')
    } else {
      $('#sex').text('👧')
    }
  })