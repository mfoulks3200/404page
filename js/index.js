// Notelek Studios 404 Page

function genRandom(start, end){
  return Math.floor(Math.random() * end) + start;				
}

function glitch(ctx){
  //Clear the screen
  ctx.fillStyle = "rgba(255,255,255,1)";
  ctx.fillRect(1,1,700,700);

  //overly complicated random gen to see if we should draw an rgb split, or a logo
  if(genRandom(1,40) !== 1){
    if(genRandom(1,10) == 10){
      ctx.font      = '152px OpenSans';
      ctx.fillStyle = "rgba(50,50,136,0."+genRandom(2,4)+")";
      if(genRandom(1,2) == 1){
        if(genRandom(1,10) == 1){
          ctx.fillText  ('#f7', 215+genRandom(10,50), 270+genRandom(10,50));
        }else{
          ctx.fillText  ('404', 215+genRandom(10,50), 270+genRandom(10,50));
        }
      }else{
        if(genRandom(1,10) == 1){
          ctx.fillText  ('hj5', 215-genRandom(10,50), 270-genRandom(10,50));
        }else{
          ctx.fillText  ('404', 215-genRandom(10,50), 270-genRandom(10,50));
        }
      }
      ctx.font      = '152px OpenSans';
      ctx.fillStyle = "rgba(136,50,50,0."+genRandom(2,4)+")";
      if(genRandom(1,2) == 1){
        if(genRandom(1,10) == 1){
          ctx.fillText  ('a&#', 215+genRandom(10,50), 270+genRandom(10,50));
        }else{
          ctx.fillText  ('404', 215+genRandom(10,50), 270+genRandom(10,50));
        }
      }else{
        if(genRandom(1,10) == 1){
          ctx.fillText  ('x%j', 215-genRandom(10,50), 270-genRandom(10,50));
        }else{
          ctx.fillText  ('404', 215-genRandom(10,50), 270-genRandom(10,50));
        }
      }
    }else{
      ctx.font      = '152px OpenSans';
      ctx.fillStyle = '#888';
      if(genRandom(1,7) == 1){
        if(genRandom(1,2) == 1){
          ctx.fillText  ('4%A', 215, 270);
        }else{
          ctx.fillText  ('A&4', 215, 270);
        }
      }else{
        ctx.fillText  ('404', 215, 270);
      }
    }
  }else{
    var imageObj = new Image();

    imageObj.onload = function() {
      ctx.drawImage(imageObj, 50, 100);
    };
    imageObj.src = 'http://i.imgur.com/gL36W7A.png';
  }

  //See how much, and where we should block out text
  for(var i = 0;i < genRandom(1,3);i++){
    ctx.fillStyle = "rgba(255,255,255,0."+genRandom(1,7)+")";
    ctx.fillRect(genRandom(1,700), genRandom(1,700), genRandom(1,700), genRandom(1,700));
  }
}

function startGlitch(ctx){
  var rand = Math.round(Math.random() * 100) + 1;
  setTimeout(function() {
    glitch(ctx);
    startGlitch(ctx);
  }, rand);
}

$(document).ready(function(){
  $('.err-rprt-cvr').hide();
  $('.prog').hide();
  var quips = ["These are not the files your looking for.","Woops, our bad.","I coulda sworn I saw that file a week ago...","Must be my A.D.D.","It WAS here...","I'm sorry Dave, I'm afraid I can't do that.","Well then..."];
  $('.quip').html(quips[genRandom(0,quips.length-1)]);
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.font         = '152px OpenSans';
  ctx.fillStyle = '#888';
  ctx.fillText  ('404', 200, 270);
  startGlitch(ctx);
  $('.err-btn').click(function(){
    $('.err-rprt-cvr').fadeIn();
    setTimeout(function(){
      $('.err-btn').hide();
      $('.prog').fadeIn();
      setTimeout(function(){
        $('.loadtext').fadeOut(500);
        setTimeout(function(){
          $('.loadtext').html("Sending Data...");
          setTimeout(function(){
            $('.loadtext').fadeIn();
            setTimeout(function(){
              $('.loadtext').fadeOut(500);
              setTimeout(function(){
                $('.loadtext').html("All Done!");
                setTimeout(function(){
                  $('.loadtext').fadeIn();
                  setTimeout(function(){
                    $('.err-rprt-cvr').fadeOut();
                  },2000);
                },500);
              },500);
            },2000);
          },500);
        },500);
      },2000);
    },250);
  });
});