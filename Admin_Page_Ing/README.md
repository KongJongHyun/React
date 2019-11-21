# *Admin Page 제작 2탄 (From Kinterch)*

### ***개발 환경***
 - React  
   *- Hooks(Function)*
 - Material-UI  
   *- @Material-ui/core*  
   *- @Material-ui/icons*  
   *- @Material-ui/core/Table*
 - Node.js  
 
 
 ### ***제작 기간***
 - 19.11.02 ~ 19.12.20 < 추후 계속 업데이트 예정 >

 ### ***진행상황***
  *- 19.11.15 < Admin Main Page 완료 >*  
    ~~*- Dropdown Menu*~~  
    ~~*- Hamburger Menu*~~  
    ~~*- Router 이용 페이지 이동*~~
    
  *- 19.11.19 < Table Template 완료 >*  
    *- UI / UX 디자인 완료*  
    *- 식당, 숙박, 쇼핑, 관광 전부 Table 삽입 완료*  
    
### ***추후 업데이트*** 
  ~~*- Table 새로 제작* <2019.11.19 완료 > ~~
  *- Component에 맞는 메뉴 Re - Rendering*   
  *- 식당 & 카페 부분 "상세정보확인" Render*  

### ***19.11.18 이후 작업 (예정)***
  ~~- *Restaurant.js 파일 수정하여 상세정보확인 페이지 제작*  ~~
  *- 화면설계서 참고하여 페이지 추가제작*   

### ***19.11.19 이후 작업 (예정)***
  *- Table에 들어간 버튼 에 대한 기능 로직 구현*

-----------------------
- ## Components/
 - ***App.js***  *//<Router 설정 & Page Move >* 
 - ***ResponsiveDrawer.js***   *//<Appbar & DropDown SubMenu onClick => Count 값 변동으로 Re-rendering => Router  사용하여 URL로 변경 >*

-----------------------
- ## Menu/
- ***ResponsiveDrawer*** *에서 onClick한 SubDropDownMenu중 각각 버튼과 연결된 js파일*

 - ***Hotel.js***  *//<장소정보-숙박 > Table*
 - ***CInfo.js***  *//<장소정보-관광 > Table* 
 - ***Shopping.js***  *//<장소정보-쇼핑 > Table* 
 - ***EvBanner.js***  *// <회원정보-예비용-숙박메뉴 >*
 - ***PerInfo.js***  *//<회원정보-사용자일반 > Table* 
 - ***MemGrade.js***  *//<이벤트관리-예비용-식당&카페메뉴 >* 
 - ***MInfo.js***  *//<회원정보-예비용-쇼핑메뉴 >* 
 - ***Restaurants.js***  *//<장소정보-맛집&카페 > Table* 
 - ***Statistics.js***  *//<회원정보-예비용-관광메뉴 >* 

-----------------------
- ## Menu/info/

- ***ResponsiveDrawer -> SubMenu*** *에서 상세정보보기(Button) onClick 하면,* ***Deepinfo*** *페이지로 이동*
- ***Deepinfo.js***  *에는 총 4개의 메뉴가 존재(세부정보 / 계정설정 / 예약내역 / 신고내역)*

 - ***Ddata.js***  *// 세부정보에 대한 Typography 와 TextField 모음 js*
 - ***Deepinfo.js***  *// 총 4개의 메뉴가 존재하는 Scroll Button 모음 js* 
 - ***Filter.js***  *// Restaurants의 FilterIcon 과 엮을 js* 
 - ***Register.js***  *// 계정정보에 대한 Typography 와 TextField 모음 js*
