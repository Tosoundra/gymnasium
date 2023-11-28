import { createContext, useContext, useState } from 'react';
import { Footer } from './blocks/Footer/Footer';
import { Header } from './blocks/Header/Header';
import { Main } from './blocks/Main/Main';
import { PopupWithForm } from './components/PopupWithForm/PopupWithForm';
import { PopupFeedback } from './components/PopupFeedback/PopupFeedback';

export const PopupFeedbackContext = createContext();
export const PopupWithFormContext = createContext();

export const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupWithFeedbackOpen, setIsPopupWithFeedbackOpen] = useState(false);
  return (
    <>
      <PopupFeedbackContext.Provider value={setIsPopupWithFeedbackOpen}>
        <Header setIsPopupOpen={setIsPopupOpen} />
        <PopupWithFormContext.Provider value={setIsPopupOpen}>
          <Main />
          <PopupWithForm
            isOpen={isPopupOpen}
            setIsPopupOpen={setIsPopupOpen}
            setIsPopupWithFeedbackOpen={setIsPopupWithFeedbackOpen}
          />
        </PopupWithFormContext.Provider>
      </PopupFeedbackContext.Provider>

      <Footer />
      <PopupFeedback
        isPopupWithFeedbackOpen={isPopupWithFeedbackOpen}
        setIsPopupWithFeedbackOpen={setIsPopupWithFeedbackOpen}
      />
    </>
  );
};
