import { Inputs } from "./Inputs"; // Asegúrate de importar el componente correctamente
import { action } from "@storybook/addon-actions";

export default {
  component: Inputs,
  title: "Atoms/Esentials/Inputs",
  tags: ["autodocs"]
};

// Aquí defines tus diferentes estados para el componente
export const NormalInput = () => (
  <Inputs label="Nombre" inputType="normal" onClick={action("clicked")} />
);

export const PasswordInput = () => (
  <Inputs label="Contraseña" inputType="password" onClick={action("clicked")} />
);
