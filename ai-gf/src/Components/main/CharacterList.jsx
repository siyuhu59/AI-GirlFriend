import React from 'react';
import Slider from 'react-slick';
import Character from './Character';
import styled from 'styled-components';

// 기존 스타일드 컴포넌트에 추가적인 스타일을 적용할 수 있습니다.
const CharacterContainer = styled.div`
    width: 90%;

  .slick-slide {
    padding: 0 10px;
  }
  
  // 화살표 버튼의 스타일을 커스터마이징 할 수 있습니다.
  .slick-prev:before,
  .slick-next:before {
    color: black; // 여기서 화살표의 색상을 변경할 수 있습니다.
  }
`;

const CharacterList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true, // 화살표를 활성화합니다.
    responsive: [
      // 반응형 설정은 그대로 유지합니다.
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // 게임 데이터 예시입니다.
  const games = [
    { image: "game1.jpg", title: "Game 1", data: "data 1" },
    { image: "game2.jpg", title: "Game 2", data: "data 2" },
      { image: "game3.jpg", title: "Game 3", data: "data 3" },
      { image: "game4.jpg", title: "Game 4", data: "data 4" },
    // 추가 게임 데이터...
  ];

  return (
    <CharacterContainer>
      <Slider {...settings}>
        {games.map((game, index) => (
          <Character key={index} image={game.image} title={game.title} data={game.data} />
        ))}
      </Slider>
    </CharacterContainer>
  );
};

export default CharacterList;
