(function($){


    var silde={
        init:function(){
           this.clickFun();
        },

        clickFun:function(){
            var  index=0,
                 $ul=$(".banner").find('ul'),
                 $li=$ul.children('li'),
                 width=$li.eq(0).width(),
                 li_total=$li.length,
                 cur_no = 0;

                     $('.next').click(function(){
                         index++
                         if(index < $li.length){
                            uwdith=width*index;
                            $ul.animate({
                                 'left':'-'+uwdith+'px'
                             })
                         }else{
                            index=0;
                             $ul.animate({
                                 'left':'0px'
                             })
                         }

                    })

           
                    $('.prev').click(function(){
                         index--
                         if(index < 0){
                            index=$li.length-1;
                            uwdith=width*index;
                            $ul.animate({
                                 'left':'-'+uwdith+'px'
                             })
                         }else{
                             uwdith=width*index;
                            $ul.animate({
                                 'left':'-'+uwdith+'px'
                             })
                         }

                    })

                    //自动播放
                    setInterval(function(){
                        index++
                        if(index < $li.length){
                            uwdith=width*index;
                            $ul.animate({
                                 'left':'-'+uwdith+'px'
                             })
                        }else{
                            index=0;
                             $ul.animate({
                                 'left':'0px'
                             })
                        }
                    },3000)


        }


    }

    $(function(){ silde.init(); })
})(jQuery); 