import React, { useState, useEffect, Fragment } from "react";
import Filters from "./Filters";
import Voved from "./Voved";
import GameList from "./GameList";

const FirstPage = () => {
  const [cards, setCards] = useState([]);
  const [cardsToRender, setCardsToRender] = useState([]);
  const [filters, setFilters] = useState({
    category: {
      Akcija: false,
      Inovacii: false,
      Energizer: false,
      Tim: false,
      Liderstvo: false
    },
    timeFrame: {
      thirty_sixty_minutes: false,
      five_thirty_minutes: false,
      sixty_onehundredtwenty_minutes: false,
      onehundredtwenty_twohundredfourty_minutes: false
    },
    groupSize: {
      two_ten: false,
      ten_fourty: false,
      fourtyplus: false
    }
  });
  const [allFilters, setAllFilters] = useState(true);
  const [actualFilters, setActualFilters] = useState({
    category: {
      Енергични: false,
      Акција: false,
      Иновации: false,
      Лидерство: false,
      Тим: false
    },
    timeFrame: {
      "5-30 минути": false,
      "30-60 минути": false,
      "60-120 минути": false,
      "120-240 минути": false
    },
    groupSize: {
      "2-10": false,
      "10-40": false,
      "40+": false
    }
  });
  useEffect(() => {
    fetch("https://brainsterboxapi.herokuapp.com/games")
      .then(res => res.json())
      .then(data => {
        setCards(data);
        setCardsToRender(data);
      });
  }, []);
  useEffect(() => {
    let allFiltersThatAreActive = {
      category: [],
      timeFrame: [],
      groupSize: []
    };

    const { category, groupSize, timeFrame } = actualFilters;
    for (let i in category) {
      if (category[i]) {
        allFiltersThatAreActive.category.push(i);
      }
    }
    for (let i in timeFrame) {
      if (timeFrame[i]) {
        allFiltersThatAreActive.timeFrame.push(i);
      }
    }

    for (let i in groupSize) {
      if (groupSize[i]) {
        allFiltersThatAreActive.groupSize.push(i);
      }
    }
    const filterKeys = Object.keys(allFiltersThatAreActive);
    let filteredCards = cards.filter(eachCard => {
      return filterKeys.every(key => {
        if (!allFiltersThatAreActive[key].length) {
          return true;
        }

        return allFiltersThatAreActive[key].includes(eachCard[key]);
      });
    });
    setCardsToRender(filteredCards);
  }, [actualFilters, cards]);
  useEffect(() => {
    if (cardsToRender.length === cards.length) {
      setAllFilters(true);
    }
  }, [cardsToRender.length, cards]);
  const [prazno, setPrazno] = useState(true);
  useEffect(() => {
    if (cardsToRender.length === 0) {
      setPrazno(false);
    } else {
      setPrazno(true);
    }
  }, [cardsToRender.length]);
  const toggleFilters = e => {
    let dataFilter = e.target.dataset.filter,
      dataFilterName = e.target.dataset.filterName,
      dataActualFilterName = e.target.dataset.actualFilterName;
    setFilters(prevState => ({
      ...prevState,
      [dataFilter]: {
        ...prevState[dataFilter],
        [dataFilterName]: !prevState[dataFilter][dataFilterName]
      }
    }));
    setActualFilters(prevState => ({
      ...prevState,
      [dataFilter]: {
        ...prevState[dataFilter],
        [dataActualFilterName]: !prevState[dataFilter][dataActualFilterName]
      }
    }));

    setAllFilters(false);
  };

  const toggleAll = () => {
    setAllFilters(true);
    setFilters({
      category: {
        Akcija: false,
        Inovacii: false,
        Energizer: false,
        Tim: false,
        Liderstvo: false
      },
      timeFrame: {
        thirty_sixty_minutes: false,
        five_thirty_minutes: false,
        sixty_onehundredtwenty_minutes: false,
        onehundredtwenty_twohundredfourty_minutes: false
      },
      groupSize: {
        two_ten: false,
        ten_fourty: false,
        fourtyplus: false
      }
    });
    setActualFilters({
      category: {
        Акција: false,
        Иновации: false,
        Лидерство: false,
        Тим: false,
        Енергични: false
      },
      timeFrame: {
        "30-60 минути": false,
        "5-30 минути": false,
        "60-120 минути": false,
        "120-240 минути": false
      },
      groupSize: {
        "2-10": false,
        "10-40": false,
        "40+": false
      }
    });
  };

  return (
    <Fragment>
      <Voved />
      <Filters
        toggleFilters={toggleFilters}
        filters={filters}
        actualFilters={actualFilters}
        allFilters={allFilters}
        toggleAll={toggleAll}
      />
      <GameList prikaziDiv={prazno} cards={cardsToRender} />
      <Voved />
    </Fragment>
  );
};

export default FirstPage;
