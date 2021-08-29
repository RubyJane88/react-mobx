import React, { createContext } from "react";
import useHeroContext from "features/heroes/heroContext";
import useVillainContext from "features/villains/villainContext";
import { HeroStoreSchema } from "features/heroes/heroTypes";
import { VillainStoreSchema } from "features/villains/villainTypes";

type RootStoreSchema = {
  heroStore: HeroStoreSchema;
  villainStore: VillainStoreSchema;
};

export const RootStoreContext = createContext<RootStoreSchema>(null);

const RootStore = ({ children }) => {
  const heroContext = useHeroContext();
  const villainContext = useVillainContext();

  return (
    <RootStoreContext.Provider
      value={{
        heroStore: heroContext,
        villainStore: villainContext,
      }}
    >
      {children}
    </RootStoreContext.Provider>
  );
};

export default RootStore;
