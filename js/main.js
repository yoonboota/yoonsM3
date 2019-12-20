
$(document).ready(function(){
	$(".panelBg").hide();
	$(".panel").click(function(){
		$(".panelMenu").css("width","70%");
		$(".panelBg").fadeIn();
	})
		
	
	$(".closeBtn,.panelBg").click(function(){
		$(".panelMenu").css("width","0");
		$(".panelBg").fadeOut();		
	})
	
	
	
})



/*
	1.메뉴에 구조추가
	2. 보이는 메뉴로 css 작업
	3. 안보이게 처리
	4. 대상을 클릭했을때 메뉴 나오게
	5. X버튼이나 대상을 클릭했을때 닫히게
*/