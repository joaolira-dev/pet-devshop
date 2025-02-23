type MenuObject = "" | "all" | "dog" | "cat" | "fish"

export const createMenuObject = (activeMenu: MenuObject) => {
      let returnObject = {
         all: false,
         dog: false,
         cat: false,
         fish: false
      }

      if(activeMenu !== "") {
         return returnObject[activeMenu] = true;
      }

      return returnObject;
}



