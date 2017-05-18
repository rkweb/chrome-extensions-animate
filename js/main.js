var typeSelect = new Vue({
  	el: 'body',
  	data: {
	    selected: 'bounce',
	    options: [
	      { text: 'bounce', value: 'bounce'},
	      { text: 'bounceIn', value: 'bounceIn'},
	      { text: 'flash', value: 'flash'},
	      { text: 'pulse', value: 'pulse'}
		],
    },
    computed:{
    	cssMsg:function(){
    		var value = this.selected;
	        var json = animate.children;
	        var json_str = json['@-webkit-keyframes '+value];
	        var css_data = CSSJSON.toCSS(json_str);
	        var animate_data = '@-webkit-keyframes '+value + '{' + '\n\r' + css_data + '}';
	       	return animate_data;
    	}
    }
});

/*css格式化*/

/*http://tool.css-js.com

http://rubular.com/*/