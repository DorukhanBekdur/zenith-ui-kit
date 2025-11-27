// src/components/Icon/Icon.test.jsx

import React from "react";
import { render, screen } from "@testing-library/react";
import { Icon, SettingsIcon } from "./Icon";

// 💡 MOCKED_STYLES değişkenini burada tanımlamayın, tamamen kaldırın.
// import { MOCKED_STYLES } from './Icon.mocks'; // Bu satırı da kaldırın.

// 💡 KESİN ÇÖZÜM: Mock değerini vi.mock'un içine alarak hoisting sorununu çözüyoruz.
// Vitest'in ES Module ortamında senkron mock'lama yapmak için importOriginal kullanmalıyız.
vi.mock("./Icon.module.scss", async (importOriginal) => {
  // Harici mock dosyasını async olarak içe aktar
  const { MOCKED_STYLES } = await import("./Icon.mocks");

  // Default export olarak MOCKED_STYLES'ı döndür
  return {
    default: MOCKED_STYLES,
  };
});

// Artık MOCKED_STYLES'ı doğrudan kullanmak yerine,
// mock'tan gelen değerleri kullanmak için tekrar tanımlayalım.
// Bu değişken, testin geri kalanında mock sınıflarını kontrol etmek için gereklidir.
const MOCKED_STYLES = {
  icon: "test-icon",
  sizeSm: "test-size-sm",
  sizeLg: "test-size-lg",
  colorPrimary: "test-color-primary",
  colorError: "test-color-error",
};

const TestContent = <span data-testid="icon-content">T</span>;

describe("Icon Component Tests", () => {
  // 1. İçerik Görüntüleme Testi (Aynı Kalır)
  it("should render the children content (SVG/span) inside the component", () => {
    render(<Icon>{TestContent}</Icon>);
    expect(screen.getByTestId("icon-content")).toBeInTheDocument();

    render(
      <Icon>
        <SettingsIcon data-testid="settings-svg" />
      </Icon>
    );
    expect(screen.getByTestId("settings-svg")).toBeInTheDocument();
  });

  // 2. Varsayılan Sınıf (Default/md) Testi
  it("should apply the default class and no size/color variant classes by default", () => {
    render(<Icon>{TestContent}</Icon>);
    const iconElement = screen.getByTestId("icon-content").parentElement;

    expect(iconElement).toHaveClass(MOCKED_STYLES.icon);
    expect(iconElement).not.toHaveClass(MOCKED_STYLES.sizeLg);
  });

  // 3. Boyut (Size) Prop Kontrolü
  it('should apply the correct size class for "sm" and "lg"', () => {
    const { rerender } = render(<Icon size="sm">{TestContent}</Icon>);
    let iconElement = screen.getByTestId("icon-content").parentElement;

    expect(iconElement).toHaveClass(MOCKED_STYLES.sizeSm);

    rerender(<Icon size="lg">{TestContent}</Icon>);
    iconElement = screen.getByTestId("icon-content").parentElement;
    expect(iconElement).toHaveClass(MOCKED_STYLES.sizeLg);
  });

  // 4. Renk (Color) Prop Kontrolü
  it('should apply the correct color class for "primary" and "error"', () => {
    const { rerender } = render(<Icon color="primary">{TestContent}</Icon>);
    let iconElement = screen.getByTestId("icon-content").parentElement;

    expect(iconElement).toHaveClass(MOCKED_STYLES.colorPrimary);

    rerender(<Icon color="error">{TestContent}</Icon>);
    iconElement = screen.getByTestId("icon-content").parentElement;
    expect(iconElement).toHaveClass(MOCKED_STYLES.colorError);
  });
});
