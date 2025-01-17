import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [storyTitleContent, setStoryTitleContent] = useState("Uma jornada se inicia...");
    const [storyTextContent, setStoryTextContent] = useState("Ecos de tempos sombrios ecoam pelo reino. Nas profundezas de uma antiga masmorra, um artefato perdido guarda o poder de restaurar o equilíbrio. Um aventureiro, guiado apenas por coragem e destino, parte para enfrentar o desconhecido e recuperar o que poderá salvar o mundo… ou mergulhá-lo ainda mais nas sombras.");
  
    return (
      <AppContext.Provider value={{ storyTextContent, setStoryTextContent, storyTitleContent, setStoryTitleContent }}>
        {children}
      </AppContext.Provider>
    )
  }