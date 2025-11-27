import { Textarea } from "./Textarea";

const meta = {
  title: "Zenith UI/Atoms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "text", description: "Hata mesajı gösterir" },
    onChange: { action: "changed" },
    rows: { control: "number", description: "Satır sayısı" },
    cols: { control: "number", description: "Sütun sayısı" },
  },
};

export default meta;

// Textarea Stories
export const Default = {
  args: {
    label: "Geri Bildiriminiz",
    placeholder: "Detaylı yorumlarınızı buraya yazınız...",
    rows: 4,
  },
};

export const WithError = {
  args: {
    label: "Zorunlu Açıklama",
    placeholder: "Neden katılmadınız?",
    error: "Bu açıklama alanı zorunludur.",
    rows: 6,
  },
};
