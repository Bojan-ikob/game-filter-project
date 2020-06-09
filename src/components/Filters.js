import React, { useState } from "react";
import "../css/filters.css";

const Filters = ({
  toggleFilters,
  filters,
  allFilters,
  toggleAll,
  actualFilters
}) => {
  const [onThisFilter, setonThisFilter] = useState(false);
  const [onThisFilter2, setonThisFilter2] = useState(false);
  const [onThisFilter3, setonThisFilter3] = useState(false);
  const catButt = () => {
    setonThisFilter(!onThisFilter);
    setonThisFilter2(false);
    setonThisFilter3(false);
  };
  const timeButt = () => {
    setonThisFilter2(!onThisFilter2);
    setonThisFilter(false);
    setonThisFilter3(false);
  };
  const groupButt = () => {
    setonThisFilter3(!onThisFilter3);
    setonThisFilter2(false);
    setonThisFilter(false);
  };
  return (
    <div className="filters">
      <div className="all">
        <p>Прикажи ги сите</p>
        <button
          className={allFilters ? "aktiven" : "neaktiven"}
          onClick={toggleAll}
        >
          Сите
        </button>
      </div>
      <div className="by-category">
        <p>Избери по категорија</p>
        <div className={onThisFilter ? "show-buttons" : "hide-buttons"}>
          <button
            className={filters.category.Energizer ? "aktiven" : "neaktiven"}
            data-filter="category"
            data-filter-name="Energizer"
            data-actual-filter-name="Енергични"
            onClick={toggleFilters}
          >
            Енергични
          </button>
          <button
            className={filters.category.Inovacii ? "aktiven" : "neaktiven"}
            data-filter="category"
            data-filter-name="Inovacii"
            data-actual-filter-name="Иновации"
            onClick={toggleFilters}
          >
            Иновации
          </button>
          <button
            className={filters.category.Akcija ? "aktiven" : "neaktiven"}
            data-filter="category"
            data-filter-name="Akcija"
            data-actual-filter-name="Акција"
            onClick={toggleFilters}
          >
            Акција
          </button>
          <button
            className={filters.category.Liderstvo ? "aktiven" : "neaktiven"}
            data-filter="category"
            data-filter-name="Liderstvo"
            data-actual-filter-name="Лидерство"
            onClick={toggleFilters}
          >
            Лидерство
          </button>
          <button
            className={filters.category.Tim ? "aktiven" : "neaktiven"}
            data-filter="category"
            data-filter-name="Tim"
            data-actual-filter-name="Тим"
            onClick={toggleFilters}
          >
            Тим
          </button>
        </div>

        <button
          id="button-category"
          onClick={catButt}
          className={onThisFilter ? "aktiven" : "neaktiven"}
        >
          by CATEGORY
        </button>
      </div>
      <div className="time">
        <p>Временска рамка (минути)</p>
        <div className={onThisFilter2 ? "show-buttons2" : "hide-buttons2"}>
          <button
            className={
              filters.timeFrame.five_thirty_minutes ? "aktiven" : "neaktiven"
            }
            data-filter="timeFrame"
            data-filter-name="five_thirty_minutes"
            data-actual-filter-name="5-30 минути"
            onClick={toggleFilters}
          >
            5 - 30
          </button>
          <button
            className={
              filters.timeFrame.thirty_sixty_minutes ? "aktiven" : "neaktiven"
            }
            data-filter="timeFrame"
            data-filter-name="thirty_sixty_minutes"
            data-actual-filter-name="30-60 минути"
            onClick={toggleFilters}
          >
            30 - 60
          </button>
          <button
            className={
              filters.timeFrame.sixty_onehundredtwenty_minutes
                ? "aktiven"
                : "neaktiven"
            }
            data-filter="timeFrame"
            data-filter-name="sixty_onehundredtwenty_minutes"
            data-actual-filter-name="60-120 минути"
            onClick={toggleFilters}
          >
            60 - 120
          </button>
          <button
            className={
              filters.timeFrame.onehundredtwenty_twohundredfourty_minutes
                ? "aktiven"
                : "neaktiven"
            }
            data-filter="timeFrame"
            data-filter-name="onehundredtwenty_twohundredfourty_minutes"
            data-actual-filter-name="120-240 минути"
            onClick={toggleFilters}
          >
            120 -240
          </button>
        </div>
        <button
          id="by-time"
          onClick={timeButt}
          className={onThisFilter2 ? "aktiven" : "neaktiven"}
        >
          by TIME
        </button>
      </div>
      <div className="group">
        <p>Големина на група</p>
        <div className={onThisFilter3 ? "show-buttons3" : "hide-buttons3"}>
          <button
            className={filters.groupSize.two_ten ? "aktiven" : "neaktiven"}
            data-filter="groupSize"
            data-filter-name="two_ten"
            data-actual-filter-name="2-10"
            onClick={toggleFilters}
          >
            2 - 10
          </button>
          <button
            className={filters.groupSize.ten_fourty ? "aktiven" : "neaktiven"}
            data-filter="groupSize"
            data-filter-name="ten_fourty"
            data-actual-filter-name="10-40"
            onClick={toggleFilters}
          >
            10 - 40
          </button>
          <button
            className={filters.groupSize.fourtyplus ? "aktiven" : "neaktiven"}
            data-filter="groupSize"
            data-filter-name="fourtyplus"
            data-actual-filter-name="40+"
            onClick={toggleFilters}
          >
            40 +
          </button>
        </div>

        <button
          id="group-btn"
          onClick={groupButt}
          className={onThisFilter3 ? "aktiven" : "neaktiven"}
        >
          by GROUP
        </button>
      </div>
    </div>
  );
};

export default Filters;
