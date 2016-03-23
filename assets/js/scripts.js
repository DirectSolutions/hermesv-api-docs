/**
 * Copyright 2016 Direct Solutions
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Written by John Prantalos
**/
maximized=false;
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    if(maximized){
	 	$("#expand-icon").removeClass("fa-compress");
    	$("#expand-icon").addClass("fa-expand");
    	maximized=false;
    }else{
	 	$("#expand-icon").removeClass("fa-expand");
	 	$("#expand-icon").addClass("fa-compress");
	 	maximized=true;
    }
});
$(window).scroll(function(){
    if(		$(this).scrollTop() >= $('#vehicles-get').offset().top 
    	|| 	$(this).scrollTop() >= $('#vehicle-get').offset().top 
    	|| 	$(this).scrollTop() >= $('#vehicle-trips').offset().top
    	||	$(this).scrollTop() >= $('#vehicles').offset().top){
      $('#vehicles-subnav').slideDown();
    } else{
    	$('#vehicles-subnav').fadeOut();
    }
});