export type NewtConfig = {
  settings: {
    date: boolean;
    background: string;
    results: number;
    searchEngine: string;
  };
  links: {
    name: string;
    url: string;
  }[];
};

export const defaultConfig: NewtConfig = {
  settings: {
    date: true,
    background: "https://images.unsplash.com/photo-1704319180538-f57994377412",
    results: 5,
    searchEngine: "https://duckduckgo.com/?q=%s",
  },
  links: [
    {
      name: "Google",
      url: "https://google.com",
    },
    {
      name: "GitHub",
      url: "https://github.com",
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
    },
  ],
};
