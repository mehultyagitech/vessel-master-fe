import React from "react";

const Daigramcards = () => {
  const decksData = [
    {
      deckName: "Tween Deck",
      imageSrc: "/Daigram1.png", // Update with the correct image path
      survey: "2",
      maint: "2",
      removed: "2",
      active: "2",
      surveyLabel: "I-1",
      maintLabel: "I-2",
      removedLabel: "I-3",
      activeLabel: "I-2",
    },
    {
      deckName: "2nd Deck",
      imageSrc: "/Daigram2.png", // Update with the correct image path
      survey: "2",
      maint: "2",
      removed: "2",
      active: "2",
      surveyLabel: "I-1",
      maintLabel: "I-2",
      removedLabel: "I-3",
      activeLabel: "I-2",
    },
    {
      deckName: "Main Deck",
      imageSrc: "/Daigram3.png", // Update with the correct image path
      survey: "1",
      maint: "1",
      removed: "1",
      active: "1",
      surveyLabel: "I-2",
      maintLabel: "I-1",
      removedLabel: "I-3",
      activeLabel: "I-1",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 p-6 bg-gray-50">
      {decksData.map((deck, index) => (
        <div
          key={index}
          className="rounded-3xl overflow-hidden shadow-2xl bg-white w-72 transform transition-transform duration-300 hover:scale-105"
        >
          {/* Image */}
          <div className="h-44 w-full">
            <img
              src={deck.imageSrc}
              alt={deck.deckName}
              className="w-full h-full object-contain p-2"
            />
          </div>

          {/* Deck Name */}
          <div className="text-center py-3 font-bold text-xl text-green-700">
            {deck.deckName}
          </div>

          {/* Statistics Table */}
          <div className="p-4 bg-blue-100 rounded-b-3xl">
            <div className="grid grid-cols-4 gap-y-4 text-center">
              <div>
                <p className="text-2xl font-bold text-blue-700">{deck.survey}</p>
                <p className="text-gray-600">{deck.surveyLabel}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-700">{deck.maint}</p>
                <p className="text-gray-600">{deck.maintLabel}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-700">{deck.removed}</p>
                <p className="text-gray-600">{deck.removedLabel}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-700">{deck.active}</p>
                <p className="text-gray-600">{deck.activeLabel}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Daigramcards;
