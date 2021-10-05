
window.onload = function () {
	(

		function () {

			// 그리기 예제1 
			const canvas1 = document.getElementById('canvasTranslate');
			const ctx1 = canvas1.getContext('2d');
			canvas1.width = 300;
			canvas1.height = 300;
			canvas1.style.backgroundColor = "#fff";
			canvas1.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분 
			ctx1.beginPath();
			ctx1.fillStyle="green"; // 배경 색
			ctx1.fillRect(10,10,60,60); //배경 크기 // 좌표x,y,width,height
			ctx1.translate(60,60); // 캔버스의 원점 이동 (0, 0) → (x, y)
			ctx1.fillStyle="red"; // 배경 색
			ctx1.fillRect(10,10,60,60); //배경 크기 // 좌표x,y,width,height
			ctx1.translate(60,60); // 캔버스의 원점 이동 (0, 0) → (x, y)
			ctx1.fillStyle="blue"; // 배경 색
			ctx1.fillRect(10,10,60,60); //배경 크기 // 좌표x,y,width,height

			// dash 그리기 예제
			const canvas2 = document.getElementById('canvasScale');
			const ctx2 = canvas2.getContext('2d');
			canvas2.width = 300;
			canvas2.height = 300;
			canvas2.style.backgroundColor = "#fff";
			canvas2.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분 
			ctx2.beginPath();
			ctx2.lineWidth=5;
			ctx2.strokeStyle="black";
			ctx2.strokeRect(20,20,100,100);
			ctx2.scale(2.0, 0.5); // x,y
			ctx2.strokeStyle="red";
			ctx2.strokeRect(20,20,100,100);//(40,10 200,50) x,y, width,height
			ctx2.scale(0.25, 4.0);
			ctx2.strokeStyle="blue";
			ctx2.strokeRect(20,20,100,100); // (10,40,50,200) 직전 scale된 사이즈와 scale 요청 값과 연산



			// fill style 그리기 예제 
			const canvas3 = document.getElementById('canvasScale1');
			const ctx3 = canvas3.getContext('2d');
			canvas3.width = 300;
			canvas3.height = 300;
			canvas3.style.backgroundColor = "#fff";
			canvas3.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분 
			ctx3.strokeStyle="red"; // 선색 
			ctx3.lineWidth = 5; // 선두께
			ctx3.beginPath(); // 패스 초기화
			ctx3.moveTo(95,100); // 이동 x,y
			ctx3.arc(95, 100, 80, 135*Math.PI/180, 225*Math.PI/180, false); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
			ctx3.closePath();  //  셋 이상의 점을 가진 경우, 자동으로 추가하여 닫힌 모양의 도형을 만듦
			ctx3.stroke(); // 선 출력
			ctx3.fill(); // 면 출력
			ctx3.translate(195, 0); // 캔버스의 원점 이동 (0, 0) → (x, y)
			ctx3.scale(-1, 1); // (-1,1)좌우대칭 (-1,-1)상하대칭 (1,1) 오른쪽,아래 (1,-1) 오른쪽 위
			ctx3.beginPath(); // 패스 초기화
			ctx3.moveTo(95,100); // 이동 x,y
			ctx3.arc(95, 100, 80, 135*Math.PI/180, 225*Math.PI/180, false);
			ctx3.closePath();  //  셋 이상의 점을 가진 경우, 자동으로 추가하여 닫힌 모양의 도형을 만듦
			ctx3.stroke(); // 선 출력
			ctx3.fill(); // 면 출력



			// canvasRotate
			const canvas4 = document.getElementById('canvasRotate');
			const ctx4 = canvas4.getContext('2d');
			canvas4.width = 300;
			canvas4.height = 300;
			canvas4.style.backgroundColor = "#fff";
			canvas4.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			ctx4.fillStyle="green";
			ctx4.fillRect(100,10,180,60); //배경 크기 // 좌표x,y,width,height
			ctx4.rotate(30*Math.PI/180); // rotate(각도), 좌표 공간을 시계방향으로 회전, 기준점 → 왼쪽 상단 모서리, 각도*Math.PI/180
			ctx4.fillStyle="red";
			ctx4.fillRect(100,10,180,60); //배경 크기 // 좌표x,y,width,height
			ctx4.rotate(30*Math.PI/180); // rotate(각도), 좌표 공간을 시계방향으로 회전, 기준점 → 왼쪽 상단 모서리, 각도*Math.PI/180
			ctx4.fillStyle="blue";
			ctx4.fillRect(100,10,180,60); //배경 크기 // 좌표x,y,width,height



			// transform vs setTransform 1
			// 계속해서 변환행렬을 곱해주는것이 transform()
			const canvas5 = document.getElementById('canvasCustom');
			const ctx5 = canvas5.getContext('2d');
			canvas5.width = 300;
			canvas5.height = 300;
			canvas5.style.backgroundColor = "#fff";
			canvas5.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			ctx5.fillStyle="green";
			ctx5.fillRect(10,10,100,100);
			ctx5.transform(1.5, 0.5, 0, 0.5, 120, 0); // 수평으로 확대축소, 수평기울임,수직기울임,수직으로 확대축소, 수평으로 이동, 수직으로 이동
			ctx5.fillStyle="red";
			ctx5.fillRect(10,10,100,100); //150만큼 확대,0.5로 수평기움,수직기움없음,50만큼 줄어듦,120만큼 x이동,y는0
			ctx5.transform(1, 0, 0, 1, 0, 120); //y만 이동
			ctx5.fillStyle="blue";
			ctx5.fillRect(10,10,100,100);
			ctx5.transform(1, 0, 0, 1, 0, 120); //y만 이동
			ctx5.fillStyle="orange";
			ctx5.fillRect(10,10,100,100);



			// transform vs setTransform 2
			//초기화를 한뒤에 변환행렬을 곱해주는것이 setTransform() 
			const canvas6 = document.getElementById('canvasCustom1');
			const ctx6 = canvas6.getContext('2d');
			canvas6.width = 300;
			canvas6.height = 300;
			canvas6.style.backgroundColor = "#fff";
			canvas6.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			ctx6.fillStyle="pink";
			ctx6.fillRect(10,10,100,100);
			ctx6.setTransform(1.5, 0.5, 0, 0.5, 120, 0); // 수평으로 확대축소, 수평기울임,수직기울임,수직으로 확대축소, 수평으로 이동, 수직으로 이동
			ctx6.fillStyle="purple";
			ctx6.fillRect(10,10,100,100); //150만큼 확대,0.5로 수평기움,수직기움없음,50만큼 줄어듦,120만큼 x이동,y는0
			ctx6.setTransform(1, 0, 0, 1, 0, 120); // 초기화 후 y만 이동 
			ctx6.fillStyle="skyblue";
			ctx6.fillRect(10,10,100,100);
			ctx6.setTransform(1, 0, 0, 1, 0, 240); // 초기화 후 y만 이동  
			ctx6.fillStyle="black";
			ctx6.fillRect(10,10,100,100);


			// canvasDrawImage
			const canvas7 = document.getElementById('canvasDrawImage1');
			const ctx7 = canvas7.getContext('2d');
			canvas7.width = 800;
			canvas7.height = 300;
			canvas7.style.backgroundColor = "#fff";
			canvas7.style.border="1px solid black";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			ctx7.strokeStyle="red"; 
			ctx7.setLineDash([3]);
			const img1 = new Image();
			img1.src = "C:/dev/HTML_basicSource1/img/flower01.jpg"; 
			img1.onload = function () {
			ctx7.drawImage(img1, 10,10); // 원본 이미지의원래 크기대로 캔버스의 지정된 위치 ( 좌표 dx, dy)에 삽입
			ctx7.strokeRect(10,10,267,308);
			ctx7.drawImage(img1, 300,10,100,100); // 원본 이미지를 캔버스의 지정된 위치 (좌표 dx, dy)에서 가로세로 싸이즈 dw*dh 크기로 삽입
			ctx7.strokeRect(300,10,100,100);
			ctx7.drawImage(img1, 45, 0, 170, 200, 430,10, 200,250); // "원본 이미지"의 (좌표 sx, sy) 위치에서 가로세로 싸이즈 sw*sh 크기로 잘라내어 "캔버스"의 지정된 위치 (좌표 dx, dy)에서 가로세로 싸이즈 dw*dh 크기로 삽입
			ctx7.strokeRect(430,10, 200,250);
			}




			// canvasDrawData
			const canvas8 = document.getElementById('canvasDrawData');
			const ctx8 = canvas8.getContext('2d');
			canvas8.width = 300;
			canvas8.height = 300;
			canvas8.style.backgroundColor = "#fff";
			canvas8.style.border="1px solid black";
			// data → ImageData 객체의 데이터를 저장하고 있는 1차원 배열
			const imgData=ctx8.createImageData(160,160);  // 가로, 세로 // 모든 픽셀이 투명한 검은색으로 초기화된 빈 ImageData 객체 생성/반환
			//imgData.data.length = (폭*너비*4)  102400
			for (var i=0; i<imgData.data.length; i+=4) {  
				imgData.data[i+0]=0;      // R
				imgData.data[i+1]=255;    // G
				imgData.data[i+2]=0;      // B
				imgData.data[i+3]=127;    // A
			}
			ctx8.putImageData(imgData,20,20); // 지정한 ImageData 객체의 데이터를 "캔버스"의 지정한 위치에 그림
			// ctx8.putImageData(imgData,40,20, 5,5,100,100); // 지정한 ImageData 객체의 데이터를 "캔버스"의 지정한 위치에 그림



			

			
			// canvasDrawDataImage 
			const imgOp1 = document.getElementById('canvasDrawDataImage1');
			const sketch1 = document.createElement('canvas');
			sketch1.setAttribute('id','canvasDrawDataImageOp1');
			sketch1.setAttribute('style','width:150px');
			document.getElementById('sketch1').appendChild(sketch1);
			const canvas9 = document.getElementById('canvasDrawDataImageOp1');
			const ctx9 = canvas9.getContext('2d');
			imgOp1.addEventListener('click',function(){
				canvas9.width = 150;
				canvas9.height = 100;
				canvas9.style.backgroundColor = "#fff";
				canvas9.style.border="1px solid black";
				ctx9.drawImage(imgOp1, 0, 0,150,100); // 원본 이미지를 캔버스의 지정된 위치 (좌표 dx, dy)에서 가로세로 싸이즈 dw*dh 크기로 삽입
			});

			// canvasDrawDataImage 
			const imgOp2 = document.getElementById('canvasDrawDataImage2');
			const sketch2 = document.createElement('canvas')
			sketch2.setAttribute('id','canvasDrawDataImageOp2');
			sketch2.setAttribute('style','width:150px');
			document.getElementById('sketch2').appendChild(sketch2);
			imgOp2.addEventListener('click',function(){
				const canvas10 = document.getElementById('canvasDrawDataImageOp2');
				const ctx10 = canvas10.getContext('2d');
				canvas10.width = 150;
				canvas10.height = 100;
				canvas10.style.backgroundColor = "#fff";
				canvas10.style.border="1px solid black";
				// let imgData1 = ctx9.getImageData(0,0,300,300);  // 캔버스 영역에서 지정한 사각형 영역의 픽셀 데이터를 복사한 ImageData 객체를 반환
				// imgData.data.length = (폭*너비*4)  102400
				// for (var i=0; i<imgData1.data.length; i+=4) {  
				// 	imgData.data[i] = 255 - imgData.data[i];
				// 	imgData.data[i+1] = 255 - imgData.data[i+1];
				// 	imgData.data[i+2] = 255 - imgData.data[i+2];
				// 	imgData.data[i+3] = 255;
				// }
				// ctx10.putImageData(imgData1,0,0);

				// 결과 안나옴 
				// 참조 https://stackoverflow.com/questions/39048227/html5-canvas-invert-color-of-pixels

				ctx10.drawImage(imgOp2, 0, 0, 150,100); // 원본 이미지를 캔버스의 지정된 위치 (좌표 dx, dy)에서 가로세로 싸이즈 dw*dh 크기로 삽입
				ctx10.globalCompositeOperation='difference';  // 반전
				ctx10.fillStyle='white'; // 바탕색
				ctx10.fillRect(0,0,150,100); // 좌표 x,y,가로,세로
			});
			

			

			// 이미지데이터 조작
			var canvas11 = document.getElementById("canvasImageDataOp");
			var ctx11 = canvas11.getContext("2d");
			canvas11.width = 200;
			canvas11.height = 200;
			canvas11.style.backgroundColor = "#fff";
			canvas11.style.border="1px solid black";
			ctx11.beginPath(); // 패스 초기화
			ctx11.fillStyle="rgba(255,0,0,0.5)"; // 배경색
			ctx11.rect(10,10,100,100); // 도형 좌표
			ctx11.arc(130,130,60,0,2*Math.PI,true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
			ctx11.fill() // 출력

			// tag append
			const sketch3 = document.createElement('canvas');
			sketch3.setAttribute('id','canvasImageDataOp1');
			sketch3.setAttribute('style','width:200px');
			document.getElementById('sketch3').appendChild(sketch3);
			
			canvas11.addEventListener('click', function(){
				const canvas12 = document.getElementById("canvasImageDataOp1");
				canvas12.width = 200;
				canvas12.height = 200;
				canvas12.style.backgroundColor = "#fff";
				canvas12.style.border="1px solid red";
				const ctx12 = canvas12.getContext("2d");
				const imageBuffer = ctx11.getImageData(50, 50, 100, 100); // 캔버스 영역에서 지정한 사각형 영역의 픽셀 데이터를 복사한 ImageData 객체를 반환
				ctx12.putImageData(imageBuffer, 0, 0, 10, 10, 150, 150); // 캔버스에서의 x,y, 이미지데이터에서의 x,y, 가로,세로
			}, false);


			// clipping
			const canvas13 = document.getElementById("canvasClipping");
			const ctx13 = canvas13.getContext("2d");
			canvas13.width = 300;
			canvas13.height = 300;
			canvas13.style.backgroundColor = "#fff";
			canvas13.style.border="1px solid black";
			ctx13.beginPath(); // 패스 초기화
			ctx13.arc(150,150,70,0,2*Math.PI,false);; // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
			ctx13.stroke();
			// ctx13.clip(); // 주석풀기
			ctx13.fillStyle="rgba(255,0,0,0.5)"; // 배경색
			ctx13.fillRect(20,100, 250, 100); // 출력


			// save(), restore()
			//save() 현재 드로잉 상태의 정보를 스택에 저장
			//restore() 스택에 저장되어 있는 드로잉 상태 정보를 가져와서 현재의 상태로 복원
			const canvas14 = document.getElementById("canvasSaveRestore");
			const ctx14 = canvas14.getContext("2d");
			canvas14.width = 200;
			canvas14.height = 200;
			canvas14.style.backgroundColor = "#fff";
			canvas14.style.border="1px solid black";

			ctx14.fillStyle="red";
			ctx14.fillRect( 10, 10, 20, 20);
			ctx14.fillStyle="green";
			ctx14.fillRect( 40, 10, 20, 20);
			ctx14.fillStyle="blue";
			ctx14.fillRect( 70, 10, 20, 20);
			ctx14.fillRect( 100, 10, 20, 20);
			ctx14.fillRect( 130, 10, 20, 20);

			ctx14.fillStyle="red";
			ctx14.fillRect( 10, 40, 20, 20);
			ctx14.save();
			ctx14.fillStyle="green";
			ctx14.fillRect( 40, 40, 20, 20);
			ctx14.save();
			ctx14.fillStyle="blue";
			ctx14.fillRect( 70, 40, 20, 20);
			ctx14.restore();
			ctx14.fillRect( 100, 40, 20, 20);
			ctx14.restore();
			ctx14.fillRect( 130, 40, 20, 20);


		}

	)();
};
