import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/pet"


export const home = (req: Request, res: Response) => {
  const list =  Pet.getAll();

  res.render("pages/page", {
    menu: createMenuObject("all"),
    banner: {
      title: "Todos os animais",
      background: "allanimals.jpg",
    },
    list: list
  });
};

export const dogs = (req: Request, res: Response) => {
  const list = Pet.getFromType("dog")

  res.render("pages/page", {
    menu: createMenuObject("dog"),
    banner: {
      title: "Cachorros",
      background: "banner_dog.jpg",
    },
    list: list
  });
};

export const cats = (req: Request, res: Response) => {
  const list = Pet.getFromType("cat")

  res.render("pages/page", {
    menu: createMenuObject("cat"),
    banner: {
      title: "Gatos",
      background: "banner_cat.jpg",
    },
    list: list
  });
};

export const fishes = (req: Request, res: Response) => {
  const list = Pet.getFromType("fish")

  res.render("pages/page", {
    menu: createMenuObject("fish"),
    banner: {
      title: "Peixes",
      background: "banner_fish.jpg",
    },
    list: list
  });
};
