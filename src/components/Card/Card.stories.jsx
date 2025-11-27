import { Card } from "./Card";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

const meta = {
  title: "Zenith UI/Molecules/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    children: { control: false },
  },
};

export default meta;

export const DefaultCard = {
  args: {
    title: "Sign In Form",
    children: (
      <div>
        <Input label="Username" placeholder="Username" />
        <Input label="Password" type="password" placeholder="••••••••" />
        <div style={{ marginTop: "24px" }}>
          <Button label="Sign In" primary={true} style={{ width: "100%" }} />
        </div>
      </div>
    ),
  },
};
