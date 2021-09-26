
window.onload = function () {
	(

		function () {

			// 그리기 예제1 
			const canvas1 = document.getElementById('canvasLineStyle1');
			const ctx1 = canvas1.getContext('2d');
			canvas1.width = 300;
			canvas1.height = 300;
			canvas1.style.backgroundColor = "#fff";
			canvas1.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분 
			ctx1.strokeStyle = "rgba(255,0, 255, 0.5)"; //선의 색상(또는 그라데이션, 패턴) 지정
			ctx1.lineWidth = 30; // 선의 두께 지정 (기본 1픽셀)
			ctx1.lineJoin = 'bevel'; // 두 선이 만나 꺽이는 모서리 부분의 모양 지정 [= bevel | round | miter(기본) ]
			ctx1.lineCap = 'round'; // 선의 양쪽 끝부분의 모양 지정 [= butt (기본) | round | square] 
			ctx1.beginPath();
			ctx1.moveTo(50, 50); // 시작위치  x,y
			ctx1.lineTo(200, 250); // 이동
			ctx1.lineTo(250, 120); // 이동
			ctx1.stroke(); // 출력


			// dash 그리기 예제
			const canvas2 = document.getElementById('canvasLineDash1');
			const ctx2 = canvas2.getContext('2d');
			canvas2.width = 300;
			canvas2.height = 300;
			canvas2.style.backgroundColor = "#fff";
			canvas2.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분 
			ctx2.beginPath();
			ctx2.strokeStyle = "grey"; //선의 색상(또는 그라데이션, 패턴) 지정
			ctx2.lineWidth = 10; // 선의 두께 지정 (기본 1픽셀)
			ctx2.setLineDash([10]); //패턴으로 그려지는 부분과 그려지지 않는 부분이 반복되는 배열
			ctx2.arc(150,150,100,0,2*Math.PI); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
			ctx2.stroke();

			ctx2.beginPath();
			ctx2.strokeStyle = "pink"; //선의 색상(또는 그라데이션, 패턴) 지정
			ctx2.lineWidth=10;
			ctx2.setLineDash([1,2,3,4]);
			ctx2.rect(30,30,240,240);
			ctx2.stroke();

			ctx2.beginPath();
			ctx2.strokeStyle = "green"; //선의 색상(또는 그라데이션, 패턴) 지정
			ctx2.setLineDash([5,2]);
			ctx2.fillStyle="lightblue"
			ctx2.rect(100,100,100,100);
			ctx2.stroke();
			ctx2.fill();



			// fill style 그리기 예제 
			const canvas3 = document.getElementById('canvasFillStyle1');
			const ctx3 = canvas3.getContext('2d');
			canvas3.width = 300;
			canvas3.height = 300;
			canvas3.style.backgroundColor = "#fff";
			canvas3.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분 
			ctx3.beginPath();
			ctx3.lineWidth = 20; // 선의 두께 지정 (기본 1픽셀)
			ctx3.strokeStyle="blue"; //선의 색상(또는 그라데이션, 패턴) 지정
			ctx3.strokeRect(50,50,100,100); //선 // 좌표x,y,width,height
			ctx3.fillStyle="red"; // 배경 색
			ctx3.fillRect(50,50,100,100); //배경 크기 // 좌표x,y,width,height
			ctx3.stroke(); // 출력
			ctx3.beginPath();
			ctx3.lineWidth = 20; // 선의 두께 지정 (기본 1픽셀)
			ctx3.strokeStyle="blue"; //선의 색상(또는 그라데이션, 패턴) 지정
			ctx3.strokeRect(180,180,100,100); //선 // 좌표x,y,width,height
			ctx3.globalAlpha=0.5; // 색상의 투명도 지정 : 값 → 0.0 (완전 투명) ~ 1.0 (완전 불투명)
			ctx3.fillStyle="red"; // 배경 색
			ctx3.fillRect(180,180,100,100); //배경 크기 // 좌표x,y,width,height
			ctx3.stroke(); // 출력



			// fill style 그리기 예제 1
			const canvas4 = document.getElementById('canvasFillStyle2');
			const ctx4 = canvas4.getContext('2d');
			canvas4.width = 300;
			canvas4.height = 300;
			canvas4.style.backgroundColor = "#fff";
			canvas4.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			ctx4.lineWidth=15; // 선두께
			ctx4.fillStyle="red"; // 배경색
			ctx4.strokeStyle="blue"; // 선색
			ctx4.beginPath();
			ctx4.rect(50,50,100,100); // 도형 좌표
			ctx4.globalAlpha=0.5; // 색상의 투명도 지정 : 값 → 0.0 (완전 투명) ~ 1.0 (완전 불투명)
			ctx4.fill(); // 채우기
			ctx4.stroke(); // 출력



			// gradient style 그리기 예제 1
			const canvas5 = document.getElementById('canvasGradient1');
			const ctx5 = canvas5.getContext('2d');
			canvas5.width = 300;
			canvas5.height = 300;
			canvas5.style.backgroundColor = "#fff";
			canvas5.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			const gradident = ctx5.createLinearGradient(0,0,100,100); // 좌표 x,y,x1,y1 // 그라데이션 면적설정
			gradident.addColorStop(0.0,'red'); //경계색 위치(시작점 0.0 ~ 끝점 1.0) / 그라데이션 경계색 지정
			gradident.addColorStop(0.5,'yellow');
			gradident.addColorStop(1.0,'blue');
			ctx5.fillStyle=gradident; // 그라데이션 배경색
			ctx5.beginPath();
			ctx5.fillRect(0,0,100,100); //배경 크기 // 좌표x,y,width,height
			ctx5.stroke(); // 출력

			const gradident1 = ctx5.createLinearGradient(100,0,200,100); // 좌표 x,y,x1,y1 // 그라데이션 면적설정
			gradident1.addColorStop(0.0,'pink'); //경계색 위치(시작점 0.0 ~ 끝점 1.0) / 그라데이션 경계색 지정
			gradident1.addColorStop(0.5,'purple');
			gradident1.addColorStop(1.0,'skyblue');
			ctx5.fillStyle=gradident1; // 그라데이션 배경색
			ctx5.beginPath();
			ctx5.fillRect(100,0,100,70); //배경 크기 // 좌표x,y,width,height
			ctx5.stroke(); // 출력

			const gradident2 = ctx5.createLinearGradient(200,0,300,0); // 좌표 x,y,x1,y1 // 그라데이션 면적설정
			gradident2.addColorStop(0.0,'red'); //경계색 위치(시작점 0.0 ~ 끝점 1.0) / 그라데이션 경계색 지정
			gradident2.addColorStop(0.5,'yellow');
			gradident2.addColorStop(1.0,'blue');
			ctx5.fillStyle=gradident2; // 그라데이션 배경색
			ctx5.beginPath();
			ctx5.fillRect(200,0,100,100); //배경 크기 // 좌표x,y,width,height
			ctx5.stroke(); // 출력

			const gradident3 = ctx5.createLinearGradient(0,100,0,200); // 좌표 x,y,x1,y1 // 그라데이션 면적설정
			gradident3.addColorStop(0.0,'red'); //경계색 위치(시작점 0.0 ~ 끝점 1.0) / 그라데이션 경계색 지정
			gradident3.addColorStop(0.5,'yellow');
			gradident3.addColorStop(1.0,'blue');
			ctx5.fillStyle=gradident3; // 그라데이션 배경색
			ctx5.beginPath();
			ctx5.fillRect(0,100,100,100); //배경 크기 // 좌표x,y,width,height
			ctx5.stroke(); // 출력

			const gradident4 = ctx5.createLinearGradient(100,100,200,200); // 좌표 x,y,x1,y1 // 그라데이션 면적설정
			gradident4.addColorStop(0.0,'blue'); //경계색 위치(시작점 0.0 ~ 끝점 1.0) / 그라데이션 경계색 지정
			gradident4.addColorStop(0.5,'yellow');
			gradident4.addColorStop(1.0,'red');
			ctx5.fillStyle=gradident4; // 그라데이션 배경색
			ctx5.beginPath();
			ctx5.fillRect(100,100,100,100); //배경 크기 // 좌표x,y,width,height
			ctx5.stroke(); // 출력

			const gradident5 = ctx5.createLinearGradient(300,100,200,200); // 좌표 x,y,x1,y1 // 그라데이션 면적설정
			gradident5.addColorStop(0.0,'red'); //경계색 위치(시작점 0.0 ~ 끝점 1.0) / 그라데이션 경계색 지정
			gradident5.addColorStop(0.5,'yellow');
			gradident5.addColorStop(1.0,'blue');
			ctx5.fillStyle=gradident5; // 그라데이션 배경색
			ctx5.beginPath();
			ctx5.fillRect(200,100,100,100); //배경 크기 // 좌표x,y,width,height
			ctx5.stroke(); // 출력

			const gradident6 = ctx5.createLinearGradient(0,300,100,200); // 좌표 x,y,x1,y1 // 그라데이션 면적설정
			gradident6.addColorStop(0.0,'red'); //경계색 위치(시작점 0.0 ~ 끝점 1.0) / 그라데이션 경계색 지정
			gradident6.addColorStop(0.5,'yellow');
			gradident6.addColorStop(1.0,'blue');
			ctx5.fillStyle=gradident6; // 그라데이션 배경색
			ctx5.beginPath();
			ctx5.fillRect(0,200,100,100); //배경 크기 // 좌표x,y,width,height
			ctx5.stroke(); // 출력



			// createRadialGradient style 그리기 예제 1
			const canvas7 = document.getElementById('canvasRadialGradient1');
			const ctx7 = canvas7.getContext('2d');
			canvas7.width = 300;
			canvas7.height = 300;
			canvas7.style.backgroundColor = "#fff";
			canvas7.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			const gradident7 = ctx7.createRadialGradient(50,50,5,50,50,50); //  x1, y1, 첫번째 원의 반지름 r1, x2, y2, 두번째 원의 반지름 r2 
			gradident7.addColorStop(0.0,'red'); //경계색 위치(시작점 0.0 ~ 끝점 1.0) / 그라데이션 경계색 지정
			gradident7.addColorStop(0.5,'yellow');
			gradident7.addColorStop(1.0,'blue');
			ctx7.fillStyle=gradident7; // 그라데이션 배경색
			ctx7.beginPath();
			ctx7.fillRect(0,0,100,100); //배경 크기 // 좌표x,y,width,height
			ctx7.arc(50,50,50,0,2*Math.PI,false); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
			ctx7.fill(); // 출력

			const gradident8 = ctx7.createRadialGradient(150,150,5,150,150,50); //  x1, y1, 첫번째 원의 반지름 r1, x2, y2, 두번째 원의 반지름 r2 
			gradident8.addColorStop(0.0,'red'); //경계색 위치(시작점 0.0 ~ 끝점 1.0) / 그라데이션 경계색 지정
			gradident8.addColorStop(0.5,'yellow');
			gradident8.addColorStop(1.0,'blue');
			ctx7.fillStyle=gradident8; // 그라데이션 배경색
			ctx7.beginPath();
			// ctx8.fillRect(0,0,100,100); //배경 크기 // 좌표x,y,width,height   ----> 배경없앴을때 
			ctx7.arc(150,150,50,0,2*Math.PI,false); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
			ctx7.fill(); // 출력




			// createRadialGradient  style 그리기 예제 - 중심에 따른 변화
			const canvas8 = document.getElementById('canvasRadialGradient2');
			const ctx8 = canvas8.getContext('2d');
			canvas8.width = 300;
			canvas8.height = 300;
			canvas8.style.backgroundColor = "#fff";
			canvas8.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			const gradident9 = ctx8.createRadialGradient(50,50,5,50,50,50); //  x1, y1, 첫번째 원의 반지름 r1, x2, y2, 두번째 원의 반지름 r2 
			gradident9.addColorStop(0.0,'yellow'); //경계색 위치(시작점 0.0 ~ 끝점 1.0) / 그라데이션 경계색 지정
			gradident9.addColorStop(1.0,'blue');
			ctx8.fillStyle=gradident9; // 그라데이션 배경색
			ctx8.beginPath();
			ctx8.fillRect(0,0,100,100); //배경 크기 // 좌표x,y,width,height
			ctx8.arc(50,50,50,0,2*Math.PI,false); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
			ctx8.fill(); // 출력

			const gradident10 = ctx8.createRadialGradient(190,50,5,150,50,50); //  x1, y1, 첫번째 원의 반지름 r1, x2, y2, 두번째 원의 반지름 r2 
			gradident10.addColorStop(0.0,'yellow'); //경계색 위치(시작점 0.0 ~ 끝점 1.0) / 그라데이션 경계색 지정
			gradident10.addColorStop(1.0,'red');
			ctx8.fillStyle=gradident10; // 그라데이션 배경색
			ctx8.beginPath();
			ctx8.fillRect(100,0,100,100); //배경 크기 // 좌표x,y,width,height
			ctx8.arc(150,50,50,0,2*Math.PI,false); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
			ctx8.fill(); // 출력

			const gradident11 = ctx8.createRadialGradient(300,50,5,310,50,50); //  x1, y1, 첫번째 원의 반지름 r1, x2, y2, 두번째 원의 반지름 r2 
			gradident11.addColorStop(0.0,'red'); //경계색 위치(시작점 0.0 ~ 끝점 1.0) / 그라데이션 경계색 지정
			gradident11.addColorStop(1.0,'purple');
			ctx8.fillStyle=gradident11; // 그라데이션 배경색
			ctx8.beginPath();
			ctx8.fillRect(200,0,100,100); //배경 크기 // 좌표x,y,width,height
			ctx8.arc(250,50,50,0,2*Math.PI,false); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
			ctx8.fill(); // 출력

			const gradident12 = ctx8.createRadialGradient(50,150,50,50,150,10); //  x1, y1, 첫번째 원의 반지름 r1, x2, y2, 두번째 원의 반지름 r2 
			gradident12.addColorStop(0.0,'yellow'); //경계색 위치(시작점 0.0 ~ 끝점 1.0) / 그라데이션 경계색 지정
			gradident12.addColorStop(1.0,'blue');
			ctx8.fillStyle=gradident12; // 그라데이션 배경색
			ctx8.beginPath();
			ctx8.fillRect(0,100,100,100); //배경 크기 // 좌표x,y,width,height
			ctx8.arc(50,150,50,0,2*Math.PI,false); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
			ctx8.fill(); // 출력

			

			
			// 패턴  style 그리기 예제 
			const patternImg = new Image();
			patternImg.src = 'C:/dev/HTML_basicSource1/img/round-orange.png';
			patternImg.onload = function(){
				const canvas9 = document.getElementById('canvasPattern1');
				const ctx9 = canvas9.getContext('2d');
				canvas9.width = 300;
				canvas9.height = 300;
				canvas9.style.backgroundColor = "#fff";
				canvas9.style.border="1px solid black";
				//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
				//그리는 부분
				ctx9.beginPath();
				const pattern = ctx9.createPattern(patternImg,"repeat");  // no-repeat, repeat-x, repeat-y, repeat(default)
				ctx9.fillStyle=pattern; // 그라데이션 배경색
				ctx9.arc(85,85,50,0,2*Math.PI,false); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
				ctx9.fill(); // 출력
				ctx9.strokeStyle = pattern;
				ctx9.lineWidth = 20;
				ctx9.strokeRect(10, 10, 150, 150); // //좌표x,y,width,height
			}
			


			// 그림자  style 그리기 예제 
			const canvas10 = document.getElementById('canvasShadow1');
			const ctx10 = canvas10.getContext('2d');
			canvas10.width = 300;
			canvas10.height = 300;
			canvas10.style.backgroundColor = "#fff";
			canvas10.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			ctx10.beginPath();
			ctx10.fillStyle="rgba(220, 11, 93, 0.8)" // 배경색
			ctx10.shadowOffsetX = 10;
			ctx10.shadowOffsetY = 10;
			ctx10.shadowColor = 'green';
			ctx10.shadowBlur = 1;
			ctx10.fillRect(10, 10, 100, 100); //배경 크기 // 좌표x,y,width,height

			ctx10.beginPath();
			ctx10.fillStyle="rgba(255, 0, 0, 1.0)" // 배경색
			ctx10.shadowOffsetX = -5;
			ctx10.shadowOffsetY = -10;
			ctx10.shadowColor = 'black';
			ctx10.shadowBlur = 5;
			ctx10.fillRect(150, 30, 100, 100); //배경 크기 // 좌표x,y,width,height

			ctx10.beginPath();
			ctx10.shadowOffsetX = 10;
			ctx10.shadowOffsetY = 40;
			ctx10.shadowColor = 'black';
			ctx10.shadowBlur = 10;
			ctx10.fillRect(10, 150, 100, 100); //배경 크기 // 좌표x,y,width,height

			ctx10.beginPath();
			ctx10.shadowOffsetX = 40;
			ctx10.shadowOffsetY = 10;
			ctx10.shadowColor = 'black';
			ctx10.shadowBlur = 30;
			ctx10.fillRect(150, 150, 100, 100); //배경 크기 // 좌표x,y,width,height

			


			// 도형합성 그리기 예제 1
				const canvas11 = document.getElementById('canvasOperation1');
				const ctx11 = canvas11.getContext('2d');
				canvas11.width = 200;
				canvas11.height = 100;
				canvas11.style.backgroundColor = "#fff";
				canvas11.style.border="1px solid black";
				//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
				//그리는 부분
				// <----- destination 속성 지정 이전에 먼저 그려진 도형 ---->
				ctx11.beginPath();
				ctx11.fillStyle="green"; // 그라데이션 배경색
				ctx11.arc(50,50,50,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
				ctx11.fill(); // 출력
				ctx11.globalCompositeOperation ="source-atop";
				// <----- source 속성 지정 이후에 그려진 도형---->
				ctx11.beginPath();
				ctx11.fillStyle="red"; // 그라데이션 배경색
				ctx11.arc(100,50,50,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
				ctx11.fill(); // 출력


			// 도형합성 그리기 예제 2
				const canvas12 = document.getElementById('canvasOperation2');
				const ctx12 = canvas12.getContext('2d');
				canvas12.width = 200;
				canvas12.height = 100;
				canvas12.style.backgroundColor = "#fff";
				canvas12.style.border="1px solid black";
				//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
				//그리는 부분
				// <----- destination 속성 지정 이전에 먼저 그려진 도형 ---->
				ctx12.beginPath();
				ctx12.fillStyle="green"; // 그라데이션 배경색
				ctx12.arc(50,50,50,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
				ctx12.fill(); // 출력
				ctx12.globalCompositeOperation ="source-in";
				// <----- source 속성 지정 이후에 그려진 도형---->
				ctx12.beginPath();
				ctx12.fillStyle="red"; // 그라데이션 배경색
				ctx12.arc(100,50,50,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
				ctx12.fill(); // 출력


			// 도형합성 그리기 예제 3
				const canvas13 = document.getElementById('canvasOperation3');
				const ctx13 = canvas13.getContext('2d');
				canvas13.width = 200;
				canvas13.height = 100;
				canvas13.style.backgroundColor = "#fff";
				canvas13.style.border="1px solid black";
				//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
				//그리는 부분
				// <----- destination 속성 지정 이전에 먼저 그려진 도형 ---->
				ctx13.beginPath();
				ctx13.fillStyle="green"; // 그라데이션 배경색
				ctx13.arc(50,50,50,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
				ctx13.fill(); // 출력
				ctx13.globalCompositeOperation ="source-out";
				// <----- source 속성 지정 이후에 그려진 도형---->
				ctx13.beginPath();
				ctx13.fillStyle="red"; // 그라데이션 배경색
				ctx13.arc(100,50,50,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
				ctx13.fill(); // 출력



			// 도형합성 그리기 예제 4
				const canvas14 = document.getElementById('canvasOperation4');
				const ctx14 = canvas14.getContext('2d');
				canvas14.width = 200;
				canvas14.height = 100;
				canvas14.style.backgroundColor = "#fff";
				canvas14.style.border="1px solid black";
				//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
				//그리는 부분
				// <----- destination 속성 지정 이전에 먼저 그려진 도형 ---->
				ctx14.beginPath();
				ctx14.fillStyle="green"; // 그라데이션 배경색
				ctx14.arc(50,50,50,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
				ctx14.fill(); // 출력
				ctx14.globalCompositeOperation ="source-over";
				// <----- source 속성 지정 이후에 그려진 도형---->
				ctx14.beginPath();
				ctx14.fillStyle="red"; // 그라데이션 배경색
				ctx14.arc(100,50,50,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
				ctx14.fill(); // 출력

			


			// 도형합성 그리기 예제 1
				const canvas15 = document.getElementById('canvasOperation5');
				const ctx15 = canvas15.getContext('2d');
				canvas15.width = 200;
				canvas15.height = 100;
				canvas15.style.backgroundColor = "#fff";
				canvas15.style.border="1px solid black";
				//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
				//그리는 부분
				// <----- destination 속성 지정 이전에 먼저 그려진 도형 ---->
				ctx15.beginPath();
				ctx15.fillStyle="skyblue"; // 그라데이션 배경색
				ctx15.arc(50,50,50,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
				ctx15.fill(); // 출력
				ctx15.globalCompositeOperation ="destination-atop";
				// <----- source 속성 지정 이후에 그려진 도형---->
				ctx15.beginPath();
				ctx15.fillStyle="pink"; // 그라데이션 배경색
				ctx15.arc(100,50,50,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
				ctx15.fill(); // 출력


			// 도형합성 그리기 예제 2
			const canvas16 = document.getElementById('canvasOperation6');
			const ctx16 = canvas16.getContext('2d');
			canvas16.width = 200;
			canvas16.height = 100;
			canvas16.style.backgroundColor = "#fff";
			canvas16.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			// <----- destination 속성 지정 이전에 먼저 그려진 도형 ---->
			ctx16.beginPath();
			ctx16.fillStyle="skyblue"; // 그라데이션 배경색
			ctx16.arc(50,50,50,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
			ctx16.fill(); // 출력
			ctx16.globalCompositeOperation ="destination-in";
			// <----- source 속성 지정 이후에 그려진 도형---->
			ctx16.beginPath();
			ctx16.fillStyle="pink"; // 그라데이션 배경색
			ctx16.arc(100,50,50,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
			ctx16.fill(); // 출력


			// 도형합성 그리기 예제 3
			const canvas17 = document.getElementById('canvasOperation7');
			const ctx17 = canvas17.getContext('2d');
			canvas17.width = 200;
			canvas17.height = 100;
			canvas17.style.backgroundColor = "#fff";
			canvas17.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			// <----- destination 속성 지정 이전에 먼저 그려진 도형 ---->
			ctx17.beginPath();
			ctx17.fillStyle="skyblue"; // 그라데이션 배경색
			ctx17.arc(50,50,50,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
			ctx17.fill(); // 출력
			ctx17.globalCompositeOperation ="destination-out";
			// <----- source 속성 지정 이후에 그려진 도형---->
			ctx17.beginPath();
			ctx17.fillStyle="pink"; // 그라데이션 배경색
			ctx17.arc(100,50,50,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
			ctx17.fill(); // 출력



			// 도형합성 그리기 예제 4
			const canvas18 = document.getElementById('canvasOperation8');
			const ctx18 = canvas18.getContext('2d');
			canvas18.width = 200;
			canvas18.height = 100;
			canvas18.style.backgroundColor = "#fff";
			canvas18.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			// <----- destination 속성 지정 이전에 먼저 그려진 도형 ---->
			ctx18.beginPath();
			ctx18.fillStyle="skyblue"; // 그라데이션 배경색
			ctx18.arc(50,50,50,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
			ctx18.fill(); // 출력
			ctx18.globalCompositeOperation ="destination-over";
			// <----- source 속성 지정 이후에 그려진 도형---->
			ctx18.beginPath();
			ctx18.fillStyle="pink"; // 그라데이션 배경색
			ctx18.arc(100,50,50,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
			ctx18.fill(); // 출력



			// 도형합성 그리기 예제 1
			const canvas19 = document.getElementById('canvasOperation9');
			const ctx19 = canvas19.getContext('2d');
			canvas19.width = 200;
			canvas19.height = 100;
			canvas19.style.backgroundColor = "#fff";
			canvas19.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			// <----- destination 속성 지정 이전에 먼저 그려진 도형 ---->
			ctx19.beginPath();
			ctx19.fillStyle="green"; // 그라데이션 배경색
			ctx19.arc(50,50,50,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
			ctx19.fill(); // 출력
			ctx19.globalCompositeOperation ="lighter";
			// <----- source 속성 지정 이후에 그려진 도형---->
			ctx19.beginPath();
			ctx19.fillStyle="red"; // 그라데이션 배경색
			ctx19.arc(100,50,50,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
			ctx19.fill(); // 출력

			// 도형합성 그리기 예제 2
			const canvas20 = document.getElementById('canvasOperation10');
			const ctx20 = canvas20.getContext('2d');
			canvas20.width = 200;
			canvas20.height = 100;
			canvas20.style.backgroundColor = "#fff";
			canvas20.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			// <----- destination 속성 지정 이전에 먼저 그려진 도형 ---->
			ctx20.beginPath();
			ctx20.fillStyle="green"; // 그라데이션 배경색
			ctx20.arc(50,50,50,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
			ctx20.fill(); // 출력
			ctx20.globalCompositeOperation ="copy";
			// <----- source 속성 지정 이후에 그려진 도형---->
			ctx20.beginPath();
			ctx20.fillStyle="red"; // 그라데이션 배경색
			ctx20.arc(100,50,50,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
			ctx20.fill(); // 출력

			// 도형합성 그리기 예제 3
			const canvas21 = document.getElementById('canvasOperation11');
			const ctx21 = canvas21.getContext('2d');
			canvas21.width = 200;
			canvas21.height = 100;
			canvas21.style.backgroundColor = "#fff";
			canvas21.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			// <----- destination 속성 지정 이전에 먼저 그려진 도형 ---->
			ctx21.beginPath();
			ctx21.fillStyle="green"; // 그라데이션 배경색
			ctx21.arc(50,50,50,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
			ctx21.fill(); // 출력
			ctx21.globalCompositeOperation ="xor";
			// <----- source 속성 지정 이후에 그려진 도형---->
			ctx21.beginPath();
			ctx21.fillStyle="red"; // 그라데이션 배경색
			ctx21.arc(100,50,50,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
			ctx21.fill(); // 출력




			// 텍스트 그리기 예제 1
			const canvas22 = document.getElementById('canvasText1');
			const ctx22 = canvas22.getContext('2d');
			canvas22.width = 300;
			canvas22.height = 300;
			canvas22.style.backgroundColor = "#fff";
			canvas22.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			ctx22.beginPath();
			ctx22.font="italic 25pt 궁서체"; // 폰트 설정
			ctx22.strokeStyle = "red"; //선의 색상(또는 그라데이션, 패턴) 지정
			ctx22.lineWidth = 1; // 선의 두께 지정 (기본 1픽셀)
			ctx22.strokeText("컴퓨터과학 HTML5", 10, 70); // 텍스트, 좌표 x, y [, maxWidth ]
			
			ctx22.beginPath();
			const gradident13 = ctx22.createLinearGradient(0,0,300,0); // 좌표 x,y,x1,y1 // 그라데이션 면적설정
			gradident13.addColorStop("0.0", "magenta");//경계색 위치(시작점 0.0 ~ 끝점 1.0) / 그라데이션 경계색 지정
			gradident13.addColorStop("0.25", "blue");
			gradident13.addColorStop("0.50", "green");
			gradident13.addColorStop("0.75", "yellow");
			gradident13.addColorStop("1.0", "red");
			ctx22.fillStyle=gradident13; // 그라데이션 배경색
			ctx22.font="italic 25pt 궁서체"; // 폰트 설정
			ctx22.fillText("컴퓨터과학 HTML5", 10, 140); // 텍스트, 좌표 x, y [, maxWidth ]

			ctx22.beginPath();
			ctx22.font="25pt Noto Sans KR"; // 폰트 설정
			ctx22.lineWidth = 5; // 선의 두께 지정 (기본 1픽셀)
			ctx22.fillStyle = 'cyan';
			ctx22.strokeText("컴퓨터과학 HTML5", 10, 210); // 텍스트, 좌표 x, y [, maxWidth ]
			ctx22.fillText("컴퓨터과학 HTML5", 10, 210); // 텍스트, 좌표 x, y [, maxWidth ]



			// 텍스트 그리기 예제 2
			const canvas23 = document.getElementById("canvasText2");
			const ctx23 = canvas23.getContext("2d");
			const txt = "변수 = measureText(텍스트)";
			canvas23.width = 300;
			canvas23.height = 300;
			canvas23.style.backgroundColor = "#fff";
			canvas23.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			ctx23.beginPath();
			ctx23.font = "20px Noto Sans KR";
			ctx23.fillText("width: " + ctx23.measureText(txt).width, 10, 50) //현재 글꼴에서 주어진 텍스트의 폭을 반환
			ctx23.fillText(txt, 10, 100); // 텍스트, 좌표 x, y [, maxWidth ]
			



			// 텍스트 그리기 예제 3
			const canvas24 = document.getElementById("canvasText3");
			const ctx24 = canvas24.getContext("2d");
			canvas24.width = 300;
			canvas24.height = 300;
			canvas24.style.backgroundColor = "#fff";
			canvas24.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			ctx24.font = "15px Noto Sans KR";
			ctx24.beginPath();
			ctx24.textAlign="left"; // 정렬
			ctx24.fillText('textAlign left', 150, 30); // 텍스트, 좌표 x, y [, maxWidth ]

			ctx24.textAlign="right"; // 정렬
			ctx24.fillText('textAlign right', 150, 60); // 텍스트, 좌표 x, y [, maxWidth ]

			ctx24.textAlign="center"; // 정렬
			ctx24.fillText('textAlign center', 150, 90); // 텍스트, 좌표 x, y [, maxWidth ]

			ctx24.textAlign="start"; // 정렬
			ctx24.fillText('textAlign start (기본)', 150, 120); // 텍스트, 좌표 x, y [, maxWidth ]

			ctx24.textAlign="end"; // 정렬
			ctx24.fillText('textAlign end', 150, 150); // 텍스트, 좌표 x, y [, maxWidth ]
			


			// 텍스트 그리기 예제 4
			const canvas25 = document.getElementById("canvasText4");
			const ctx25 = canvas25.getContext("2d");
			canvas25.width = 800;
			canvas25.height = 100;
			canvas25.style.backgroundColor = "#fff";
			canvas25.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			ctx25.font = "15px Noto Sans KR";
			ctx25.beginPath();
			ctx25.textBaseline="top"; // 텍스트 수평 기준선
			ctx25.fillText('aA5가川top', 0, 50); // 텍스트, 좌표 x, y [, maxWidth ]

			ctx25.textBaseline="hanging"; 
			ctx25.fillText('aA5가川hanging', 90, 50); // 텍스트, 좌표 x, y [, maxWidth ]

			ctx25.textBaseline="middle"; 
			ctx25.fillText('aA5가川middle', 220, 50); // 텍스트, 좌표 x, y [, maxWidth ]

			ctx25.textBaseline="alphabetic"; 
			ctx25.fillText('aA5가川alphabetic', 340, 50); // 텍스트, 좌표 x, y [, maxWidth ]

			ctx25.textBaseline="ideographic"; 
			ctx25.fillText('aA5가川ideographic', 480, 50); // 텍스트, 좌표 x, y [, maxWidth ]

			ctx25.textBaseline="bottom"; 
			ctx25.fillText('aA5가川bottom', 640, 50); // 텍스트, 좌표 x, y [, maxWidth ]




			// 텍스트 그리기 예제 5
			const canvas26 = document.getElementById("canvasText5");
			const ctx26 = canvas26.getContext("2d");
			canvas26.width = 300;
			canvas26.height = 300;
			canvas26.style.backgroundColor = "#fff";
			canvas26.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			ctx26.font = "25pt 궁서체";
			ctx26.strokeText("HTML5 캔버스", 0, 50); // 텍스트, 좌표 x, y [, maxWidth ]

			ctx26.textAlign = 'left';
			ctx26.textBaseline = 'top';
			ctx26.fillStyle="blue";
			ctx26.fillText("HTML5 캔버스", 0, 50); // 텍스트, 좌표 x, y [, maxWidth ]

			ctx26.font = "30pt Noto Sans KR";
			ctx26.textAlign = 'right';
			ctx26.textBaseline = 'middle';
			ctx26.strokeStyle="red";
			ctx26.strokeText("HTML5 캔버스", 300, 100); // 텍스트, 좌표 x, y [, maxWidth ]






		}

	)();
};
