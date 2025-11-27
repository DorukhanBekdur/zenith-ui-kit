import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";
import { Button } from "../Button/Button";

describe("Card Component Tests", () => {
  it("should render the Card with the correct title", () => {
    const cardTitle = "Ayarlar Paneli";
    render(<Card title={cardTitle} />);

    expect(
      screen.getByRole("heading", { level: 2, name: cardTitle })
    ).toBeInTheDocument();
  });

  it("should render the children content correctly", () => {
    const childText = "Bu bir kart içeriğidir.";
    render(
      <Card>
        <p>{childText}</p>
      </Card>
    );

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it("should render a nested component (Button) inside the Card", () => {
    const buttonLabel = "Onayla ve Bitir";
    render(
      <Card title="İşlem Kartı">
        <Button label={buttonLabel} primary={true} />
      </Card>
    );

    expect(
      screen.getByRole("button", { name: buttonLabel })
    ).toBeInTheDocument();
  });
});
