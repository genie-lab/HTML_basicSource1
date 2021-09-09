
window.onload = function () {
	(

		function () {

			//캔버스 객체생성//캔버스 컨텍스트 객체 생성
			const canvas1 = document.getElementById('myCanvas');
			const ctx1 = canvas1.getContext('2d'); // const ctx = document.getElementById('myCanvas').getContext('2d');

			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//빨간색으로 텍스트 그리기
			ctx1.font = "12px Noto Sans KR";
			ctx1.fillStyle = "red";
			ctx1.fillText('캔버스 맛보기', canvas1.width / 2 - 50, canvas1.height / 2 + 5); //canavas.width,height은 좌표x,y위치
			//파란색으로 사각형 그리기
			ctx1.strokeStyle = "blue";
			ctx1.strokeRect(100, 100, 200, 30);//좌표x,y,width,height


			///////////////////////////////////////////////////////
			//캔버스 객체생성, 캔버스 컨텍스트 객체 생성
			const canvas2 = document.getElementById('drawingRect');
			const ctx2 = canvas2.getContext('2d');
			canvas2.width = 300;
			canvas2.height = 300;
			canvas2.style.backgroundColor = "lightyellow";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//사각형 그리는 부분
			ctx2.lineWidth = "2"; // 선두께
			ctx2.strokeStyle = "blue"; //선색
			ctx2.fillStyle = "green"; // 배경색
			ctx2.strokeRect(50, 50, 100, 100);//선 // 좌표x,y,width,height
			ctx2.fillRect(150, 150, 100, 100);//배경색 // 좌표x,y,width,height
			ctx2.clearRect(100, 100, 100, 100);//지우기 // 좌표x,y,width,height
			//캔버스 전체영역을 지우려면
			// ctx2.clearRect(0,0,canvas2.width,canvas2.height);


			///////////////////////////////////////////////////////
			//그리기의 2가지 유형
			//즉시 그리는 방법=> 관련함수 호출 : • strokeRect(), fillRect(), clearRect(), strokeText(), drawImage()
			//패스path를 기반으로 그리는 방법=> 패스 → 각 도형을 이루는 선(“서브패스”)들의 집합

			/**
			 * 패스기반의 선/도형 그리는 과정
			 *  1. 패스를 초기화 한다. → beginPath() 메서드
					2. 다양한 메서드를 사용해서 패스를 지정하고 선/도형을 그린다.
					3. 지정한 패스를 닫는다. → closePath() 메서드
					4. 선이나 도형을 출력한다. → stroke() 또는 fill() 메서드
			 */

			//선그리기 
			const canvas3 = document.getElementById('drawingPathLine');
			const ctx3 = canvas3.getContext('2d');
			canvas3.width = 250;
			canvas3.height = 250;
			canvas3.style.backgroundColor = "#222";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			ctx3.lineWidth = "3"; // 선두께
			ctx3.strokeStyle = "pink"; //선색
			//선시작 // 라인
			ctx3.beginPath();
			ctx3.moveTo(10,10); // x1,y1
			ctx3.lineTo(500,300); // x2,y2
			//사각형
			ctx3.moveTo(50, 50);
			ctx3.lineTo(200,50);
			ctx3.lineTo(200, 200);
			ctx3.lineTo(50,200);
			ctx3.lineTo(50,50);
			//선종료
			ctx3.stroke();



			//다각형 그리기 
			/**
			 * 방법1. 선들을 연결해서 연속적으로 그리는 방법
			 */
			const canvas4 = document.getElementById('drawingPathPolygon1');
			const ctx4 = canvas4.getContext('2d');
			canvas4.width = 250;
			canvas4.height = 250;
			canvas4.style.backgroundColor = "#222";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			ctx4.lineWidth = "3"; // 선두께
			ctx4.strokeStyle = "pink"; //선색
			//선시작
			ctx4.beginPath();
			//삼각형
			ctx4.moveTo(100,25); 
			ctx4.lineTo(175,177);
			ctx4.lineTo(25,175);
			ctx4.lineTo(100,25);
			//선종료
			ctx4.stroke();

			/**
			 * 방법2. 선 그리기 메서드 + closePath()
			 * closePath() → 셋 이상의 점을 가진 경우, 마지막점과 첫번째 점을 연결하는 직선을 
			 * 자동으로 추가하여 닫힌 모양의 도형을 만듦
			 */
			const canvas5 = document.getElementById('drawingPathPolygon2');
			const ctx5 = canvas5.getContext('2d');
			canvas5.width = 250;
			canvas5.height = 250;
			canvas5.style.backgroundColor = "#222";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			ctx5.lineWidth = "5"; // 선두께
			ctx5.strokeStyle = "purple"; //선색
			ctx5.beginPath();
			ctx5.moveTo(100, 25);
			ctx5.lineTo(175,177);
			ctx5.lineTo(25,175);
			ctx5.lineTo(40,55);
			ctx5.closePath();  //  셋 이상의 점을 가진 경우, 자동으로 추가하여 닫힌 모양의 도형을 만듦
			ctx5.stroke();

			// 다각형 배경색 채우기
			const canvas6 = document.getElementById('drawingPathPolygonFillColor');
			const ctx6 = canvas6.getContext('2d');
			canvas6.width = 250;
			canvas6.height = 250;
			canvas6.style.backgroundColor = "#222";
			//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
			//그리는 부분
			ctx6.lineWidth = "5"; // 선두께
			ctx6.strokeStyle = "yellow"; //선색
			ctx6.fillStyle = "orange"; // 배경색
			ctx6.beginPath();
			ctx6.moveTo(50, 50);
			ctx6.lineTo(200,50);
			ctx6.lineTo(200, 200);
			ctx6.lineTo(50,200);
			ctx6.closePath();
			ctx6.stroke();
			ctx6.fill(); 


		//https://darkpgmr.tistory.com/26 
		/* 
			각의 단위는 디그리(degree)
			호의 길이가 반지름과 같게 되는 만큼의 각을 1 라디안(radian)이라고 정의
			사람이 선호하는 각 체계는 degree인 반면 컴퓨터나 수학에서 주로 사용되는 각 체계는 radian.
			그렇다면 degree와 radian은 어떤 변환 관계를 가지고 있을까요? 180도는 π radian입니다. 
			여기서 π(파이)는 3.1415926535... 의 값을 갖는 무한소수로 원주율을 말합니다
			(원주율 π는 원의 둘레가 지름의 몇 배나 되는지를 그 동안 수학자들이 열심히 노력해서 찾은 값인데, 
				원둘레 = 3.1415926535..×지름 = π×2r 이 됨을 찾아냈고 이 상수를 원주율 π라 명명한 것입니다). 
			이 관계식을 이용하면 다음과 같이 자유롭게 degree와 radian의 단위를 변경할 수 있습니다.
			
			180 degree = π radian
			1 degree = π / 180 radian
			x degree = x * π / 180 radian

			π radian = 180 degree
			1 radian = 180 / π degree
			x radian = x * 180 / π degree 

		*/

		// 원, 원호 그리기 예제1
		const canvas7 = document.getElementById('drawingRound1');
		const ctx7 = canvas7.getContext('2d');
		canvas7.width = 250;
		canvas7.height = 250;
		canvas7.style.backgroundColor = "#222";
		//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
		//그리는 부분  Math.PI == π
		ctx7.lineWidth = "5"; // 선두께
		ctx7.strokeStyle = "yellow"; //선색
		ctx7.fillStyle = "orange"; // 배경색
		ctx7.beginPath();
		ctx7.arc(100, 100, 75, 0, 2*Math.PI, true); // x,y,반지름,시작각도,종료각도,그리는방향 //2*Math.PI=360
		// ctx7.stroke(); //선
		ctx7.fill(); 



		// 원, 원호 그리기 예제2 방향 true
		const canvas8 = document.getElementById('drawingRound2');
		const ctx8 = canvas8.getContext('2d');
		canvas8.width = 250;
		canvas8.height = 250;
		canvas8.style.backgroundColor = "#222";
		//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
		//그리는 부분
		ctx8.lineWidth = "5"; // 선두께
		ctx8.strokeStyle = "yellow"; //선색
		ctx8.fillStyle = "orange"; // 배경색
		ctx8.beginPath();
		ctx8.arc(125, 125, 75, 135*Math.PI/180, 315*Math.PI/180, true); // x,y,반지름,시작각도,종료각도, 그리는방향{시계반대} //2*Math.PI=360
		ctx8.stroke(); //선
		// ctx8.fill(); 



		// 원, 원호 그리기 예제3 방향 false
		const canvas9 = document.getElementById('drawingRound3');
		const ctx9 = canvas9.getContext('2d');
		canvas9.width = 250;
		canvas9.height = 250;
		canvas9.style.backgroundColor = "#222";
		//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
		//그리는 부분
		ctx9.lineWidth = "5"; // 선두께
		ctx9.strokeStyle = "gray"; //선색
		ctx9.fillStyle = "orange"; // 배경색
		ctx9.beginPath();
		ctx9.arc(125, 125, 75, 135*Math.PI/180, 315*Math.PI/180, false); // x,y,반지름,시작각도,종료각도, 그리는방향{시계반대} //2*Math.PI=360
		ctx9.stroke(); //선
		// ctx9.fill(); 



		// 원, 원호 그리기 예제4 방향 false
		const canvas10 = document.getElementById('drawingRound4');
		const ctx10 = canvas10.getContext('2d');
		canvas10.width = 250;
		canvas10.height = 250;
		canvas10.style.backgroundColor = "#222";
		//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
		//그리는 부분
		ctx10.lineWidth = "5"; // 선두께
		ctx10.strokeStyle = "purple"; //선색
		ctx10.fillStyle = "orange"; // 배경색
		ctx10.beginPath();
		ctx10.arc(125, 125, 75, 225*Math.PI/180, 45*Math.PI/180, false); // x,y,반지름,시작각도,종료각도, 그리는방향{시계반대} //2*Math.PI=360
		ctx10.stroke(); //선
		// ctx10.fill(); 



		// 원, 원호 그리기 예제5 방향 false
		const canvas11 = document.getElementById('drawingRound5');
		const ctx11 = canvas11.getContext('2d');
		canvas11.width = 250;
		canvas11.height = 250;
		canvas11.style.backgroundColor = "#222";
		//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
		//그리는 부분
		ctx11.lineWidth = "5"; // 선두께
		ctx11.strokeStyle = "lightblue"; //선색
		ctx11.fillStyle = "orange"; // 배경색
		ctx11.beginPath();
		ctx11.arc(125, 125, 75, 45*Math.PI/180, 225*Math.PI/180, false); // x,y,반지름,시작각도,종료각도, 그리는방향{시계반대} //2*Math.PI=360
		ctx11.stroke(); //선
		// ctx11.fill(); 



		// 원, 원호 그리기 예제6 방향 false
		const canvas12 = document.getElementById('drawingRound6');
		const ctx12 = canvas12.getContext('2d');
		canvas12.width = 250;
		canvas12.height = 250;
		canvas12.style.backgroundColor = "#222";
		//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
		//그리는 부분
		ctx12.lineWidth = "5"; // 선두께
		ctx12.fillStyle = "lightblue"; // 배경색
		ctx12.beginPath();
		ctx12.arc(125, 125, 75, 0*Math.PI/180, 90*Math.PI/180, false); // x,y,반지름,시작각도,종료각도, 그리는방향{시계반대} //2*Math.PI=360
		ctx12.fill(); 
		ctx12.beginPath();
		ctx12.arc(125, 125, 75, 90*Math.PI/180, 180*Math.PI/180, false); // x,y,반지름,시작각도,종료각도, 그리는방향{시계반대} //2*Math.PI=360
		ctx12.fill(); 
		ctx12.beginPath();
		ctx12.arc(125, 125, 75, 180*Math.PI/180, 0*Math.PI/180, false); // x,y,반지름,시작각도,종료각도, 그리는방향{시계반대} //2*Math.PI=360
		ctx12.fill(); 



		// 부채꼴 그리기 예제7 
		const canvas13 = document.getElementById('drawingRound7');
		const ctx13 = canvas13.getContext('2d');
		canvas13.width = 250;
		canvas13.height = 250;
		canvas13.style.backgroundColor = "#222";
		//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
		//그리는 부분
		ctx13.lineWidth = "3"; // 선두께
		ctx13.strokeStyle = "lightblue"; //선색
		ctx13.fillStyle = "blue"; // 배경색
		ctx13.beginPath();
		ctx13.moveTo(100,100);
		ctx13.arc(100, 100, 75, 0, 90*Math.PI/180, true); // x,y,반지름,시작각도,종료각도, 그리는방향{시계반대} //2*Math.PI=360
		ctx13.closePath();
		ctx13.stroke();
		ctx13.beginPath();
		ctx13.moveTo(110,110);
		ctx13.arc(110, 110, 75, 0, 90*Math.PI/180, false ); // x,y,반지름,시작각도,종료각도, 그리는방향{시계반대} //2*Math.PI=360
		ctx13.closePath();
		ctx13.fill(); 



		// 직선과 접하는 원호 그리기 예제7 
		const canvas14 = document.getElementById('drawingLineRadians1');
		const ctx14 = canvas14.getContext('2d');
		canvas14.width = 250;
		canvas14.height = 250;
		canvas14.style.backgroundColor = "#222";
		//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
		//그리는 부분
		ctx14.lineWidth = "5"; // 선두께
		ctx14.strokeStyle = "white"; //선색
		ctx14.fillStyle = "green"; // 배경색
		ctx14.beginPath();
		ctx14.moveTo(30,30); // 이동 x,y
		ctx14.arcTo(100, 170, 180, 80, 50); // 보조점 x1,y1 | 종료점 x2,y2 | 반지름
		ctx14.stroke();
		ctx14.fill(); 



		// 직선과 접하는 원호 그리기 예제7 
		const canvas15 = document.getElementById('bezierSecond');
		const ctx15 = canvas15.getContext('2d');
		canvas15.width = 250;
		canvas15.height = 250;
		canvas15.style.backgroundColor = "#222";
		//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
		//그리는 부분 //quardratic == 이차의 
		ctx15.lineWidth = "5"; // 선두께
		ctx15.strokeStyle = "white"; //선색
		ctx15.fillStyle = "green"; // 배경색
		ctx15.beginPath();
		ctx15.moveTo(50,150); // 이동 x,y
		ctx15.quadraticCurveTo(130, 50, 180, 180); // 제어점x, 제어점y, 종료점x, 종료점y
		ctx15.stroke();



		// 직선과 접하는 원호 그리기 예제7 
		const canvas16 = document.getElementById('bezierThird');
		const ctx16 = canvas16.getContext('2d');
		canvas16.width = 250;
		canvas16.height = 250;
		canvas16.style.backgroundColor = "#222";
		//실제 그림을 그리는 자바스크립트 코드를 위치시킨다
		//그리는 부분
		ctx16.lineWidth = "5"; // 선두께
		ctx16.strokeStyle = "white"; //선색
		ctx16.fillStyle = "green"; // 배경색
		ctx16.beginPath();
		ctx16.moveTo(30,50); // 이동 x,y
		ctx16.bezierCurveTo(50, 180, 130, 180, 180, 50); // 제어점x1, 제어점y1, 제어점x2, 제어점y2, 종료점x, 종료점y
		ctx16.stroke();
		ctx16.fill();



		}

	)();
};
