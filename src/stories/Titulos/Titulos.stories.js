import Titulos from "./Titulos";

export default {
  component: Titulos,
  title: "Atoms/Titulos",
  argTypes: {
    nivel: {
      control: "inline-radio",
    },
  },
  tags: ["autodocs"]
};

export const Header1 = {
  args: {
    texto: "Header 1",
    nivel: 1,
    backgroundColor: "Orange",
    textColor: "#000",
  },
};
export const Header3 = {
  args: {
    texto: "Header 3",
    nivel: 3,
    backgroundColor: "Black",
    textColor: "white",
  },
};
export const Header6 = {
  args: {
    texto: "Header 6",
    nivel: 6,
    backgroundColor: "Green",
    textColor: "white",
  },
};