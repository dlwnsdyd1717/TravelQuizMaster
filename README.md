# TravelQuizMaster
Shinhan University Métist graduation work

KOREAN

우리 팀은 갑작스러운 해외 여행을 떠나는 사람의 여행지 정보를 제공 위해 프로젝트를 시작했습니다.

프로젝트 개발 동기

여행을 갈 때 중요한 건 가서 뭘 해야 되는가 입니다. 대부분의 사람들이 스마트폰을 이용해 인터넷으로 여행지 정보를 찾습니다. 하지만 검색을 하다 보면 정보는 없이 방문을 유도하는 블로그, 카페에 가입하지 않으면 보여주지 않는 게시글, 광고와 원하지 않는 사이트로 접속 되는 리다이렉션에 노출됩니다.

프로젝트 개발 목표

우리 팀은 이 문제를 해결할 방안을 고민했습니다.
먼저 시스템의 요구사항을 결정하기 위해 설문 조사를 하였고, 그 결과  가장 많이 찾는 대륙 아시아의 나라들 일본-오사카 중국-상하이 베트남-다낭을 여행지 타겟으로 정했습니다. 또 한 가장 많이 원하는 정보인 음식, 랜드마크, 문화, 교통수단을 제공하는 것으로 결정하였습니다.
저희는 정보를 제공하는 방법으로 여행지 모습으로 디자인 된 가상의 공간에서 퀴즈 게임을 선택했습니다. 검색과 광고 노출이 없고, 여행지 지식이 없어도 직접 문제에 부딪치며 학습이 가능하기 때문입니다. 퀴즈를 전부 맞추게 되면 여행지에 도착해서도 무엇을 할 지 고민하지 않는 시스템을 목표로 시스템 설계를 시작했습니다

프로젝트 설계 과정

3D로 여행지 음식, 랜드마크, 문화, 교통수단을 체험할 수 있는 각각의 월드를 디자인 하고, 월드의 생성부터 삭제까지 순서도를 작성하며, 손 그림까지 이용해 설계를 하였습니다. 퀴즈 문제는 여행지 정보를 모아 같은 내용이지만 정답이 O,X로 다른 문제를 준비해 정확하게 문제를 이해하고 있는지 설계하였고, 총 240개의 문제를 만들었습니다.

프로젝트 구현

실제 구현에는 네이버 제페토 템플릿과 유니티를 사용하였고, 13개의 월드를 만들었습니다. 네이버 제페토에 이 월드를 등록해서 서비스를 하기 위함이었고, 제페토 빌드 잇으로는 퀴즈 시스템을 구현할 수 없어 유니티를 사용했습니다.
파티룸과 각 일본, 중국, 베트남 컨셉의 디자인을 한 로비 월드부터, 나라-카테고리별 컨셉의 월드를 우리는 구현했습니다.
퀴즈 진행은 총 10라운드이며, 3번 오답일 경우 게임오버가 되어 처음 로비로 돌아 갑니다. 해설은 정답 유무와 상관없이 퀴즈를 진행하는 15초 이후 바로 출력 되며 이것은 멀티플레이를 목적으로 설계했기 떄문입니다. 10라운드 진행을 마치면 게임은 클리어 되고 로비 월드로 돌아가 다른 문제를 진행할 수 있도록 했습니다.
문제의 난이도는 어려운 편이며, 그 이유는 어려운 문제일 수록 고민을 하며 텍스트가 기억에 오래 남기 때문입니다.
랜드마크를 컨셉으로 디자인 한 월드에는 실제 랜드마크와 유사한 오브젝트가 있어 실제 여행지를 가서 알아 볼 수 있다는 장점을 가졌습니다. 다른 컨셉의 월드도 그 나라의 분위기를 느낄 수 있도록 하였습니다. 

프로젝트 보완점

단점으로는 알고 싶은 정보를 바로 찾아볼 수 없다는 점인데 우리 팀은 이를 위해 사이트 혹은 블로그를 개설하고 시스템을 통해 접근하게 하여 해결을 하고자 계획하였습니다.

우리의 시스템을 이용해 많은 정보를 얻었으면 좋겠습니다.

ENGLISH

Our team started the project to provide destination information for people who suddenly go on an overseas trip.

Project development motivation

What is important when traveling is what to do. Most people search for destination information on the Internet using their smartphones. However, when searching, they are exposed to blogs that induce visitors without information, posts that they do not show if they do not join a cafe, and redirection that connects to advertisements and unwanted sites.

Project Development Goals

Our team thought about how to solve this problem.
First of all, we conducted a survey to determine the requirements of the system, and as a result, we chose Japan-Osaka, China-Shanghai, Vietnam-Danang, the most visited continental Asian countries. In addition, we decided to provide the most desired information, such as food, landmarks, culture, and means of transportation.
We chose a quiz game in a virtual space designed in the form of a travel destination as a way to provide information. This is because there is no exposure to search and advertisements, and even if you do not have knowledge of the travel destination, you can directly encounter problems and learn. If we get all the quizzes right, we started designing the system with the aim of not thinking about what to do even when we arrive at the travel destination

Project Design Process

We designed each world where you can experience food, landmarks, culture, and transportation in 3D, draw up a flow chart from creation to deletion of the world, and even use hand drawings to design it. The quiz question is about the same content by collecting travel destination information, but we prepared different questions with O and X to design whether we understand the problem accurately, and we created a total of 240 questions.

Project Implementation

In the actual implementation, we used Naver Zepeto templates and Unity, and we created 13 worlds. This was to register this world on Naver Zepeto for service, and we used Unity because we could not implement a quiz system with Zepeto Build It.
From the lobby world, which designed party rooms and Japanese, Chinese, and Vietnamese concepts, we implemented a world of concepts by country-category.
There are a total of 10 rounds of quiz, and if there are 3 incorrect answers, it will be a game over and you will return to the lobby for the first time. The commentary will be output after 15 seconds of the quiz, regardless of whether there is a correct answer or not, because it was designed for multiplayer purposes. After 10 rounds, the game was cleared, and we went back to the lobby world to proceed with other questions.
The difficulty of the problem is difficult, because the more difficult the problem, the longer you think about it, and the longer the text stays in your memory.
Worlds designed with the concept of landmarks have objects that are similar to real landmarks, which has the advantage of being able to go and find out about real destinations. Worlds with other concepts also let you feel the atmosphere of the country. 

Project Complement Points

The downside is that you can't find the information you want to know right away, but our team planned to open a site or blog and make it accessible through the system to solve it.

I hope we can get a lot of information using our system.
