export interface forecastItem {
  dt_txt: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
}

export interface forecastResponse {
  city: {
    name: string;
  };
  list: forecastItem[];
}
