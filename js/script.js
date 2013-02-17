$(function(){
	//传送带
	var slider1={
		show_num:1,
		width:314,
		m:$('.m6')
	}
	Slider(slider1);
	function Slider(s){
		s.index=0;
		s.num=s.m.find('li').length;
		s.next=s.m.find('.br');
		s.prev=s.m.find('.bl');
		s.ul=s.m.find('ul');
		s.ul.width(s.width*s.num);
		s.next.click(function(){
			slider_next();
		})
		s.prev.click(function(){
			slider_prev();
		})
		function slider(){
			s.ul.animate({left:-s.width*s.index},500);
		}
		function slider_next(){
			s.index++;
			if(s.index>s.num-s.show_num){
				s.index=0;	
			}
			slider();	
		}
		function slider_prev(){
			s.index--;
			if(s.index<0){
				s.index=s.num-s.show_num;	
			}
			slider();
		}
	}
	
})
$(function(){
		//文字轮播
        var $this = $(".m3 .b");
        var scrollTimer;
        $this.hover(function(){
              clearInterval(scrollTimer);
         },function(){
           scrollTimer = setInterval(function(){
                         scrollNews( $this );
                    }, 2000 );
        }).trigger("mouseout");
});
function scrollNews(obj){
   var $self = obj.find("ul:first");
   var lineHeight = $self.find("li:first").height(); 
   $self.animate({ "margin-top" : -lineHeight +"px" },600 , function(){
         $self.css({"margin-top":"0px"}).find("li:first").appendTo($self); 
   })
}